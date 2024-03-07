const Mailgun = require("mailgun.js");
const formData = require("form-data");
require("../utils/dotenv");

const { MAILGUN_API_KEY, MAILGUN_DOMAIN } = global.process.env;

const mailgun = new Mailgun(formData);

const mg = mailgun.client({ username: "api", key: MAILGUN_API_KEY });

module.exports = mg;
