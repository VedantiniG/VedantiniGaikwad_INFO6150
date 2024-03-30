import { ValidationError } from "../errors/errorHandling";

const testRegex = (pattern, str) => {
    return pattern.test(str)
};

export const isValidName = (name) => {
    // return testRegex(/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/, name)
    return testRegex(/^([A-Za-z]+(?: [A-Za-z]+)*)$/, name)
};

export const isValidPassword = (password) => {
    return testRegex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/, password)
};

const isValidEmail = (email) => {
    return testRegex(/([\w\.]+)@northeastern\.edu/, email)
};

const validateEmailField = (email) => {
    if (email == null) {
        throw new ValidationError("Email required");
    }
    if (email.length > 60) {
        throw new ValidationError("Email is too long");
    }
    if (!isValidEmail(email)) {
        throw new ValidationError("Email validation failed");
    }
};

const validateNameField = (name) => {
    if (name == null) {
        throw new ValidationError("Name required");
    }
    if (name.length > 60) {
        throw new ValidationError("Name is too long");
    }
    if (!isValidName(name)) {
        throw new ValidationError("Name validation failed");
    }
};

const validatePasswordField = (password) => {
    if (password == null) {
        throw new ValidationError("Password required");
    }
    if (password.length > 60) {
        throw new ValidationError("Password is too long");
    }
    if (!isValidPassword(password)) {
        throw new ValidationError("Password validation failed");
    }
};

export const validateUserFields = (email, name, password) => {
    validateEmailField(email)
    validateNameField(name)
    validatePasswordField(password)
};