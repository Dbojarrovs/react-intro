const HttpError = require('../utils/http-error');
const Ingredient = require('../models/ingredient');

const menuController = {

  async getMenu(request, response, next) {
    let ingredients;
    try {
      ingredients = await Ingredient.find({});
    } catch (err) {
      const error = new HttpError(
        'Fetching menu ingredients failed, please try again later.',
        500
      );
      return next(error);
    }
    response.json({ ingredients: ingredients.map((ingredient) => ingredient.toObject()) });
  }

};

module.exports = menuController;