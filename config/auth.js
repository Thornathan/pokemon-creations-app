const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = function(req, res, next) {
  // Check for the token being sent in three different ways
  let fullTokenString = req.get('Authorization') || req.query.token || req.body.token;
  if (fullTokenString) {
    // Remove the 'Bearer ' if it was included in the token header
    parsedTokenString = fullTokenString.replace('Bearer ', '');
    // Check if token is valid and not expired
    jwt.verify(parsedTokenString, SECRET, function(err, decodedToken) {
      if (err) {
        next(err);
      } else {
        // It's a valid token, so add user to req
        req.user = decodedToken.user;    
        next();
      }
    });
  } else {
    next('No token sent');
  }
};