const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://un:vendredi@127.0.0.1:27017/special?readPreference=primary&ssl=false&directConnection=true"
  )
  .then(() => console.log("Good Job!"))
  .catch((e) => console.log(e));
