const router = require("express").Router();
const {
  afficherInscription,
  afficherConnexion,
  nouvelleInscription,
  verifierConnexion,
} = require("../controllers/user.controller");


router.get("./examen/connexion", (request, response) => {
  response.render(afficherConnexion);
});

router.post("./examen/connexion", (request, response) => {
  response.render(verifierConnexion);
});
router.get("./examen/inscription", (request, response) => {
  response.render(afficherInscription);
});
router.post("./examen/inscription", (request, response) => {
  response.render(nouvelleInscription);
});

module.exports = router;
