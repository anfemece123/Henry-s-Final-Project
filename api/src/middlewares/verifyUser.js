const jwt = require("jsonwebtoken");

//to verify only user tokens
const verifyToken = (req, res, next) => {
  const authorization = req.get("authorization"); //.get() metodo de express para obtener el header
  console.log("authorization:", authorization);
  if (!authorization) res.status(401).send("Unauthorized User");
  let token = null;
  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }
  console.log("token:", token);
  const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET); //compara lo que viene con el token_secret
  console.log("decodedToken:", decodedToken);

  if (!token || !decodedToken.id) return res.status(401).send("Invalid Token");
  req.UserId = decodedToken.id;
  console.log("userId:", req.UserId);
  console.log(" tipo userId:", typeof req.UserId);
  //lo pongo en la request porque nunca me lo va a enviar el usuario
  req.isAdmin = decodedToken.isAdmin;
  next();
};

const verifyTokenAndIsAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    !isAdmin && res.status(403).send("Forbidden Action");
    next();
  });
};

//to verify user and admin tokens
module.exports = { verifyToken, verifyTokenAndIsAdmin };
