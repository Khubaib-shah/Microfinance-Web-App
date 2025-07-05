const authorizationRole = (...allowedRoles) => {
  return (req, res, next) => {
    console.log("User role:", req.user.role);

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access Denied." });
    }

    next();
  };
};

export default authorizationRole;
