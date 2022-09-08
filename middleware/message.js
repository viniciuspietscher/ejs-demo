const setMessage = (req, res, next) => {
  req.session.pendingMessage
    ? (res.locals.message = req.session.pendingMessage)
    : (res.locals.message = "")
  req.session.pendingMessage = ""
  next()
}

module.exports = setMessage
