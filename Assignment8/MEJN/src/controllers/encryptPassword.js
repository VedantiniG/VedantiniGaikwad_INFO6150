const bcrypt = require('bcrypt');

const saltRounds = 10;

export const passwordHashing = (password) => {
    return bcrypt.hash(password, saltRounds);
};