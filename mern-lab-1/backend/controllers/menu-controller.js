const HttpError = require('../utils/http-error');
const Ingredient = require('../models/ingredient');
const { response } = require('express');

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
    response.json({ingredients});
  }

};

module.exports = menuController;