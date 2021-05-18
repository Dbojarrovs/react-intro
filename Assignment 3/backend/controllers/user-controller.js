const HttpError = require("../utils/http-error");

const User = require("../models/user");


const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

      let hashedPassword;
      try {
        hashedPassword = await bcrypt.hash(password, 12);
      } catch (err) {
        const error = new HttpError(
          "Could not create user, please try again.",
          500
        );
        return next(error);
      }

      const createdUser = new User({
        name,
        email,
          password: hashedPassword,
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

    async login(request, response, next) {
      const { email, password } = request.body;
    

    let existingUser;

    try {
       existingUser = await User.findOne({ email: email });
     } catch (err) {
       const error = new HttpError(
         "Logging in failed, please try again later.",
         500
       );
       return next(error);
     }
 
     if (!existingUser) {
       const error = new HttpError("User not found, could not log you in.", 403);
       return next(error);
     }

     let isValidPassword = false;
    try {
      isValidPassword = await bcrypt.compare(password, existingUser.password);
    } catch (err) {
      const error = new HttpError(
        "Could not log you in, please check your credentials and try again.",
        500
      );
      return next(error);
    }

    if (!isValidPassword) {
      const error = new HttpError(
        "Invalid credentials, could not log you in.",
        403
      );
      return next(error);
    }
    response.json({ message: "You are logged in!", userId: existingUser.id });
    },

    
};

module.exports = usersController;
