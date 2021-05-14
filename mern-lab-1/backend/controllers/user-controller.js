const HttpError = require("../utils/http-error");


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

    async signup(request, response, next) {
        const { name, email, password } = request.body;
    
        let existingUser;
        try {
          existingUser = await User.findOne({ email: email });
        } catch (err) {
          const error = new HttpError(
            "Signing up failed, please try again later.",
            500
          );
          return next(error);
        }
    
        if (existingUser) {
          const error = new HttpError(
            "User exists already, please login instead.",
            422
          );
          return next(error);
        }
    
        const createdUser = new User({
          name,
          email,
          password,
          orders: [],
        });
    
        try {
          await createdUser.save();
        } catch (err) {
          const error = new HttpError("Signing up failed, please try again.", 500);
          return next(error);
        }
    
        response
          .status(201)
          .json({ createdUser });
      },

};

module.exports = usersController;
