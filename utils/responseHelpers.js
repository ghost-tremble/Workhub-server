// Error Response Format
// {
// status: false
// message: A Detailed reason why the request failed
// data: Other necessary response can go in the data object
// }

const isRequired = require("../helpers/isRequired");

const sendError = (res, status, error, errorobj) => {
  console.log({ status, error, errorobj });
  // eslint-disable-next-line no-console
  let errorMessage = error?.message || errorobj?.message;
  if (status === 500 && !errorMessage) {
    errorMessage = "Internal server error";
  }

  let responseObject = {
    success: false,
    error: errorMessage || "An error occured"
  };

  if (errorobj) {
    delete errorobj?.message;
    responseObject = {
      ...errorobj,
      ...responseObject
    };
  }

  res.status(status).json(responseObject);
};

/**
 * @param {{ timestamp: EpochTimeStamp, token: string, signature: string }} sign - Mailgun Event signature object
 * @returns {boolean} Returns true if event is genuine and false if it's not
 */
const sendLatestError = (
  res = isRequired("res"),
  status = isRequired("status"),
  error = isRequired("error")
) => {
  // eslint-disable-next-line no-console

  // Message is required in the error object
  const { message = isRequired("error.message is required"), data } = error;
  console.log({ status, message, data });

  res.status(status).json({
    success: false,
    message: message,
    data: data || {}
  });
};

const sendInternalServerError = (res, error) => {
  console.log({ status: 500, error });
  return sendError(res, 500, { message: "Internal Server Error" });
};

const sendData = (res, status, data) => {
  res.status(status).json({ success: true, data });
};

const sendCustomError = (res, customError) => {
  console.log({ validationError: customError });
  let { fieldsError, statusCode, message } = customError;

  statusCode = statusCode || 500;
  return res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    fieldsError,
    message
  });
};

// Return only the first validation error
const sendlatestCustomError = (res, customError) => {
  console.log({ customError });
  let { fieldsError, statusCode } = customError;
  // console.log({ fieldsError, msg: fieldsError[0], statusCode, message });
  let fe = Object.keys(fieldsError);
  fe = fieldsError[fe[0]];
  const message = fe.msg;
  delete fe.msg;
  return res.status(statusCode).json({
    success: false,
    message: message,
    ...fe
  });
};

module.exports = {
  sendError,
  sendData,
  sendCustomError,
  sendInternalServerError,
  sendLatestError,
  sendlatestCustomError
};
