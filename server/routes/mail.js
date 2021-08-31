const router = require("express").Router();
const nodemailer = require("nodemailer");

router.route("/").post(async (req, res) => {
  const { mail, message, name } = req.body;

  var subject = "Pregunta hecha desde Landing Page de Innovanex";
  var From = "Landing Page Innovanex <desarrollador1@innovanex.com.co>";
  var messageHTML = `<div> Este mensaje fue enviado a través de la Landing Page de Innovanex en la sección de contacto por: <br/> Nombre: ${name} <br/>Email: ${mail} <br/>Mensaje: ${message}<br/><br/><br/> <b>NOTA: </b> Por favor no responder a este correo.</div>`;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "desarrollador1@innovanex.com.co",
      pass: "D3s4rr0ll4d0r*",
    },
  });

  var mailOptions = {
    from: From,
    to: "gerencia@innovanex.com.co",
    subject: subject,
    html: messageHTML,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.status(200).jsonp(req.body);
    }
  });
});

module.exports = router;
