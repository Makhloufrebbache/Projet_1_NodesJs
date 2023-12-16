const router = require("express").Router();
const userRouter = require("./user.routes");

const getHome = (request, response, next) => {
  response.render("home");
};
router.get("/user", userRouter);
router.get("/", getHome);
router.get("examen/connexion", router.get("/examen/connexion",(request, response) => {
  response.render("users/authentification.pug");
}));
router.get("examen/inscription", router.get("/examen/inscription", (request, response) => {
    response.render("users/inscription.pug");
  })
);
router.get("examen/inscription", router.get("/examen/inscription", (request, response) => {
    response.render("users/inscription.pug");
  })
);
module.exports = router;
