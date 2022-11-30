const userIdAndIsAdminExtractor = (req, res, next) => {
  const authorization = req.get("authorization"); //.get() metodo de express para obtener el header
  if (!authorization) res.status(401).send("Unauthorized User");
  let token = null;
  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }
  const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET); //compara lo que viene con el token_secret
  if (!token || !decodedToken.id)
    return res.status(401).send("Missing Or Invalid Token");
  const UserId = decodedToken.id;
  const isAdmin = decodedToken.isAdmin;
  console.log(decodedToken);
  req.UserId = UserId;
  req.isAdmin = isAdmin;
  next();
};

module.exports = userIdAndIsAdminExtractor;
