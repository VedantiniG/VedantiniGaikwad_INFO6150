const mongoose = require('mongoose');
import { userSchema } from '../models/userSchema';
import { passwordHashing } from './encryptPassword';
const { UserExistsError, UserDoesNotExistError } = require('../errors/errorHandling');
const path = require('path');

const User = mongoose.model('User', userSchema);

export const createNewUser = async (fullname, email, password) => {
    let userExists = await findUserByEmail(email);
    console.log(userExists);
    if(userExists != null) {
        throw new UserExistsError();
    }
    const hashedPassword = await passwordHashing(password);
    let user = new User({
        fullname: fullname,
        email: email,
        password: hashedPassword
    });
    let newUser = await user.save();
    return newUser;
};

const findUserByEmail = async (email) => {
    return await User.find({email: email});
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (err) {
        console.log(err);
    }
}

export const editUser = async (req, res) => {
    try {
        const email = req.body.email;
        const user = await User.findOneAndUpdate({email: email}, req.body, {new : true});
        res.json(user);
    } catch (err) {
        console.log(err);
    }
}

export const deleteUser = async (email) => {
    const user = await findUserByEmail(email);
    console.log(user.email);
        if(user.email == undefined) {
            throw new UserDoesNotExistError();
        }
    return await User.deleteOne({email: email});
}

export const uploadImage = async (req, res) => {
    try {
        if (!req.file || !req.body.email) {
            fs.unlink(`images/${req.file.originalname}`);
            return res.status(400).json({ message: 'Missing image file or email' });
        }

        const email = req.body.email

        if (!await User.findOne({ email })) {
            console.log("couldn't find user");
            fs.unlink(`images/${req.file.originalname}`)
            return res.status(404).json({
                message: 'User not found'
            });
        }

        console.log(path.basename(req.file.originalname));

        const fileNameWithoutExtension = path.basename(req.file.originalname, path.extname(req.file.originalname));
        const extension = path.extname(req.file.originalname);

        const imagePath = `images/${req.body.email}/${fileNameWithoutExtension}_${Date.now()}${extension}`;
        //fs.move(`images${req.file.originalname}, imagePath, { overwrite: true }`)

        await User.updateOne({ email: email }, { $push: { 'imagePaths': imagePath } })

        res.status(200).json({ message: 'Image uploaded successfully', imagePath });

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};