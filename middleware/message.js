const setMessage = (req, res, next) => {
  res.locals.message = req.session.pendingMessage
    ? req.session.pendingMessage
    : ""
  req.session.pendingMessage = ""
  next()
}

module.exports = setMessage
