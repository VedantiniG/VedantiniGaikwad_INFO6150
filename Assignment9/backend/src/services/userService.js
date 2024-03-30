const mongoose = require('mongoose');
import { userSchema } from '../models/userSchema';
import { UserAlreadyExists, UserDoesNotExist, ValidationError } from '../errors/errorHandling';
import { validateUserFields, isValidName, isValidPassword } from './validationService';
import { passwordHashing, comparePassword } from './encryptPassword';

const User = mongoose.model('User', userSchema);
var jwt = require('jsonwebtoken');

export const getUsers = async () => {
    return await User.find();
};

export const createNewUser = async (email, name, password) => {

    validateUserFields(email, name, password)

    const hashedPassword = passwordHashing(password);
    
    const userExists = await User.findOne({ email: email });
    if(userExists != null) {
        throw new UserAlreadyExists();
    }
    let user = new User({
        fullname: name,
        email: email,
        password: hashedPassword
    });
    let newUser = await user.save();
    return newUser;
}

export const editUser = async (email, name, password) => {
    let userExists = await User.findOne({ email: email });
    if(userExists == null) {
        throw new UserDoesNotExist();
    }
    console.log("what is name"+ name);
    if(name != "") {
        console.log("name is not null");
        if(!isValidName(name)) {
            throw new ValidationError("Name validation failed");
        }
        console.log("name validation successful");
        userExists.fullname = name;
        console.log(userExists.fullname);
    }
    if(password != "") {
        if(!isValidPassword(password)) {
            throw new ValidationError("Password validation failed");
        }
        const hashedPassword = await passwordHashing(password);
        userExists.password = hashedPassword;
    }
    let updateUser = await userExists.save();
    return updateUser;
}

export const deleteUserByEmail = async (email) => {
    const userExists = await User.findOne({ email: email });
    if(userExists == null) {
        throw new UserDoesNotExist();
    }
    await User.findOneAndDelete({ email: email });
}

export const authenticateAndLogin = async (email, password) => {
    let userExists = await User.findOne({ email: email });
    if(userExists == null) {
        throw new UserDoesNotExist();
    }
    if(!await comparePassword(password, userExists.password)) {
        console.log("password does not match")
        throw new ValidationError("Password authentication failed");
    }
    const token = jwt.sign(
        {
          userEmail: email,
        },
        "RANDOM-TOKEN",
        { expiresIn: "3h" }
      );
      return token;
}