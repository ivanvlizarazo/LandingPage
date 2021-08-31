const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: process.env.HOSTNAME,
  credentials: true,
};

app.use(express.json());
const COOKIE_SECRET = { httpOnly: true, signed: true };
//app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cookieParser(COOKIE_SECRET));
app.use((req, res, next) => {
  // Website you wish to allow to connect
  //res.setHeader("Access-Control-Allow-Origin", process.env.HOSTNAME);
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  next();
});



app.use(cors(corsOptions));

const uri = process.env.DB_CONNECT;
// mongoose.connect(uri, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log(
//     "Conexión establecida exitosamente con la base de datos de MongoDB"
//   );
// });

const emailRouter = require("./routes/mail")

app.use("/email",emailRouter)

app.use(express.static(path.join(__dirname, "../build")));
//console.log(path.join(__dirname, "..", "build"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto : ${port}`);
});