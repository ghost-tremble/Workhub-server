const isRequired = (key) => {
    throw new Error(`${String(key)} parameter is required`);
  };
  
  module.exports = isRequired;
  