import expressJWT from "express-jwt";

export const checkAuth = (req, res, next) => {
  const status = true;
  if (status) {
    next();
  } else {
    console.log("Hong bé ơi");
  }
};

export const requireSignin = expressJWT({
  algorithms: ["HS256"],
  secret: "123456",
  requestProperty: "auth",
});
export const isAuth = (req, res, next) => {
  const status = req.profile._id == req.auth._id;
  if (!status) {
    res.status(400).json({
      message: "Hong bé ơi",
    });
  }
  next();
};
export const isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    res.status(401).json({
      message:
        "Hong bé ơi, bạn không hait là admin mà bạn đòi truy cập à, tôi không cho đâu",
    });
  }
  next();
};
