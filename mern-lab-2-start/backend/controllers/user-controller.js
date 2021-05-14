const HttpError = require("../utils/http-error");
const User = require("../models/user");

let TEST_USER = [
    {
        id: '12345678',
        name: 'Joe Bloggs',
        email: 'joebloggs@gmail.com',
        password: 'pepperoni',
        orders: []
    }
];

const usersController = {

    async getUserById(request, response, next) {
        const userId = request.params.uid;

        const user = TEST_USER.find(user => {
          return user.id === userId;
        });
        response.json({ user });
    },

};

module.exports = usersController;
