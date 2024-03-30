import { getAllUsers, createUser, updateUser, deleteUser, uploadImage, loginUser } from "../controllers/userController";

export const routes = (app) => {

    app.route('/user/getAll')
    .get(getAllUsers);

    app.route('/user/create')
    .post(createUser);

    app.route('/user/edit')
    .put(updateUser);

    app.route('/user/delete')
    .delete(deleteUser);

    app.route('/user/uploadImage')
    .post(uploadImage);

    app.route('/user/login')
    .post(loginUser);

}