class CustomError extends Error {
    /**
     * @param {string} message error description
     * @param {number} statusCode HTTP status code
     * @param {object} fieldsError an object showing all errors in fields
     */
    constructor(message, statusCode, fieldsError) {
      super(message);
      this.fieldsError = fieldsError;
      this.statusCode = statusCode;
      this.name = this.constructor.name;
    }
  }
  
  module.exports = {
    CustomError
  };
  