exports.sendError = (res, error, status = 401) => {
  res.status(status).json({ sucess: false, error });
};
