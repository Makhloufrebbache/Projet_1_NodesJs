// Package npm
const express = require("express");
const morgan = require("morgan");

// Modules natifs
const path = require("path");

// Modules locaux
require("./database");
const navigation = require("./routes");

// Déclaration de l'app
const app = express();

// Initiation de l'app et middlewares
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("short"));
app.use(navigation);

// Port d'écoute
app.listen(3000);
