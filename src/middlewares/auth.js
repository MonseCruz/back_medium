const jwt = require('../lib/jwt')

function auth (request, response, next) {
  
  const { authorization: token } = request.headers
  
  next()
  try {
    const decodedToken = jwt.verify(token)
    next()
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'invalid authorization'
    })
  }

  next()
}

module.exports = auth
