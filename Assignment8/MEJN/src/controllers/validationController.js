const { UserInputError } = require("../errors/errorHandling")

const testRegex = (pattern, str) => {
    return pattern.test(str)
};

const isValidName = (name) => {
    // return testRegex(/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/, name)
    return testRegex(/^([A-Za-z]+(?: [A-Za-z]+)*)$/, name)
};

const isValidPassword = (password) => {
    return testRegex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/, password)
};

const isValidEmail = (email) => {
    return testRegex(/([\w\.]+)@northeastern\.edu/, email)
};

const validateEmailField = (email) => {
    if (email == null) {
        throw new Error("Email required");
    }
    if (email.length > 60) {
        throw new Error("Email is too long");
    }
    if (!isValidEmail(email)) {
        throw new Error("Email validation failed" + email);
    }
};

const validateNameField = (name) => {
    if (name == null) {
        throw new Error("Name required");
    }
    if (name.length > 60) {
        throw new Error("Name is too long");
    }
    if (!isValidName(name)) {
        throw new Error("Name validation failed");
    }
};

const validatePasswordField = (password) => {
    if (password == null) {
        throw new Error("Password required");
    }
    if (password.length > 60) {
        throw new Error("Password is too long");
    }
    if (!isValidPassword(password)) {
        throw new Error("Password validation failed");
    }
};

export const validateUserFields = (name, email, password) => {
    validateEmailField(email)
    validateNameField(name)
    validatePasswordField(password)
};