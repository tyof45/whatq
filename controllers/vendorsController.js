const db = require('../models');

module.exports = {
  /**
   *returns the sum of the two paramaters
   * @param {object}
   *@property {String} nameOfVendor
   *@property {String} nameOfMenu
   */
  createMenu() {

  },

  /**
   * adds an item to the menu
   * @param {object}
   * @property {string} name - name of item
   * @property {string} price - price of item
   * @property {string} description - descriptioin of item
   * @property {string} picture - link to cloudinary
   */
  createItem() {

  },

  /**
   * returns all the items from a single menu
   * @param {string} nameOfMenu
   */
  readSingleMenu(name) {

  },

  /**
   * returns all vendor data
   * @param {string} event - name of the event that you wanf the vendors from
   */
  readAllVendorsFromEvent() {

  },
};
