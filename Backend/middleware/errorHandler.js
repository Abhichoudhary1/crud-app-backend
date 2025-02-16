const errorHandler = (err, req, res, next) => {
  const statusCode = res.statuscode < 400 ? 500 : res.statusCode
  res.status(statusCode)

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV  === 'production' ? null : err.stack,
  })
}

module.exports = { errorHandler }