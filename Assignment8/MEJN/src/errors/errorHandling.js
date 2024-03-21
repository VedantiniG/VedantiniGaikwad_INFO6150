class UserExistsError extends Error {
    get message() {
        return "User with this email already exists :/";
    }
    get name() {
        return "UserExistsError";
    }
}

class UserDoesNotExistError extends Error {
    get message() {
        return "User with this email does not exist :/";
    }
    get name() {
        return "UserDoesNotExistError";
    }
}

class UserInputError extends Error {
    constructor(message) {
         super(message);
    }
    get name() {
         return "UserInputError";
    }
}

module.exports = {
    UserExistsError,
    UserInputError,
    UserDoesNotExistError
}