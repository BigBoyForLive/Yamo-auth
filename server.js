require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const helmet = require('helmet');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(helmet());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use("/user", require("./routes/userRouter"));
app.use("/api", require("./routes/reservation"));
app.use("/poste", require("./routes/poste"));
app.use("/abonnement", require("./routes/abonnement"));

const URI = process.env.MONGODB_URL;

mongoose.connect(
  "mongodb://localhost:27017/yamo",
  
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("connecté a mongo db");
  }
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("le serveur tourne sur le port ", PORT);
});
