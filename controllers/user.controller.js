const User = require("../database/models/user.model");
const {
  createUser,
  findUserPerEmail,
  findUserPerId,
} = require("../database/queries/user.queries");

const afficherInscription = (request, response, next) => {
  response.render("users/inscription");
  response.end();
};

const afficherConnexion = (request, response, next) => {
  response.render("users/authentification");
  response.end();
};

const nouvelleInscription = async (request, response, next) => {
  const body = request.body;
  try {
    const user = await createUser(body);
    response.redirect("/examen/connexion");
  } catch (e) {
    response.render("users/inscription", {
      errors: [e.message],
    });
  }
};

const verifierConnexion = async (request, response, next) => {
  const body = request.body;
  try {
    const user = await findUserPerEmail(body.email);
    if (user) {
      const match = await user.comparePassword(body.password);
      if (match) {
        response.render("home", { user });
      } else {
        response.render("users/authentification", {
          errors: ["Password doesn't match!"],
        });
        // done(null, false, { errors:  });
      }
    } else {
      response.render("users/authentification", {
        errors: ["User not found !"],
      });
      // done(null, false, { message: "User not found !" });
    }
  } catch (e) {
    // done(null, false, { message: e.message });
    next(e);
  }
};

module.exports = {
  afficherInscription,
  afficherConnexion,
  nouvelleInscription,
  verifierConnexion,
};
