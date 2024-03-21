import { get } from "mongoose";
import { createNewUser, getAllUsers, editUser, deleteUser, uploadImage } from "../controllers/userController";
import { validateUserFields } from "../controllers/validationController";

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const fileFilter = function (req, file, cb) {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
  
const upload = multer({ storage: storage, fileFilter: fileFilter });

const routes = (app) => {

    app.route('/user/create')
    .post((req, res) => {
        const fullname = req.body.fullname;
        const email = req.body.email;
        const password = req.body.password;
        try {
            validateUserFields(fullname, email, password);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
        try {
            const user = createNewUser(fullname, email, password);
            console.log("user"+ user);
            if(user == "User with this email already exists :/"){
                res.status(409).json({message: user});
            }
            res.status(201).json(user.email);
        } catch( error ) {
            res.status(500).json({message: error.message});
        }
    });

    app.route('/user/edit')
    .put((req, res) => {
        const fullname = req.body.fullname;
        const email = req.body.email;
        const password = req.body.password;
        try {
            const user = editUser(fullname, email, password);
            res.status(200).json(user);
        } catch( error ) {
            console.log("An error occured");
        }
    });

    app.route('/user/delete')
    .delete((req, res, next) => {
        const email = req.query.email;
        try{
            const deletionSuccess = deleteUser(email);
            if(deletionSuccess) {
                res.status(200).json({message: `User with email: ${email} has been deleted`});
            } else {
                next(error);
                res.status(500).json({message: "Internal error occured"});
            }
        } catch( error ) {
            res.status(404).json({message: error.message});
        }
    });

    app.route('/user/getAll')
    .get(getAllUsers);

    app.post('/uploadImage', upload.single('image'), uploadImage);
}

export default routes;