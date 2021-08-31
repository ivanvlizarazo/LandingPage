import React, { useState } from "react";
import { makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import api from "../../api";

const useStyles = makeStyles((theme) => ({
  
  margin: {
    margin: "0.6rem 0 0.6rem 0",
    width: "80%",
  },
  container: {
    background: "#ffffff99",
    width: "80%",
    padding: "2em 1em 6em 1em",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
    // display:'flex'
  },

  message: {
    width: "80%",
  },

  floatingLabelFocusStyle: {
    color: "#000",
    fontSize: "1.5em",
  },

  withoutLabel: { marginTop: theme.spacing(3) },
  textField: {
    backgroundColor: "#0a1a7c90",
    borderRadius: "5px",
  },
  button: {
    fontSize: "1rem",
    margin: "0.8rem 0",
    padding: "10px 30px",
    borderRadius: "20px",
    color: "#fff",
    display: "inline-block",
    backgroundColor: " #EE6B04 ",
    borderColor: "#EE6B04 ",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#F7750F",
    },
    cursor: "pointer",
    outline: "none",
  },
  root: {
    overflow: "hidden",
    backgroundColor: "#fff",
    borderRadius: "5px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    color: "#000",

    "& .MuiFormLabel-root.Mui-focused": {
      color: "#000",
    },
  },
  // focused: {},
}));

function FilledTextField(props) {
  const classes = useStyles();

  return (
    <TextField
      multiline
      InputProps={{ classes, disableUnderline: true }}
      {...props}
    />
  );
}

export default function FormContact() {
  const classes = useStyles();
  const [values, setValues] = useState({
    message: "",
    name: "",
    mail: "",
  });
  const [errorMessage, setErrorMessage] = useState();
  const [errorName, setErrorName] = useState();
  const [errorMail, setErrorMail] = useState();
  const [errorInvalidMail, setErrorInvalidMail] = useState();
  const [open, setOpen] = useState(false);

  function handleChange(event, key) {
    

    setValues({ ...values, [key]: event.target.value });
  }

  function isEmpty(input) {
    if (
      input === "" ||
      input.trim().length === 0 ||
      input === null ||
      input === undefined ||
      (Array.isArray(input) && input.length === 0)
    ) {
      return true;
    }
    return false;
  }

  function validateValues(values) {
    var haveError = false;
    const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    if (isEmpty(values.message)) {
      setErrorMessage(true);
      haveError = true;
    } else {
      setErrorMessage(false);
    }

    if (isEmpty(values.name)) {
      setErrorName(true);
      haveError = true;
    } else {
      setErrorName(false);
    }

    if (isEmpty(values.mail)) {
      setErrorMail(true);
      haveError = true;
    } else {
      setErrorMail(false);
    }
    if (!re.test(values.mail)) {
      setErrorInvalidMail(true);
      haveError = true;
    } else {
      setErrorInvalidMail(false);
    }

    return haveError;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const haveError = validateValues(values);

    if (!haveError) {
    
      setValues({
        message: "",
        name: "",
        mail: "",
      });
      setOpen(true)
     
      
      
      api
      .post("/email", values)
      .then((res) => console.log('mensaje enviado'))
      .catch((err) => console.log('error mail: ',err));
    }
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className={classes.container}>
      <Snackbar
          open={open}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={
            5000 
          }
         
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            Mensaje enviado exitosamente, pronto recibirás respuesta al correo que suministraste.
          </Alert>
        </Snackbar>
      <Grid
        container
        direction="row"
        justifycontent="center"
        alignItems="center"
      >
        <Grid item lg={8} md={8} sm={8} xl={8} xs={12}>
          <Grid
            container
            direction="row"
            justifycontent="center"
            alignItems="center"
          >
            <Grid item lg={12} md={12} sm={12} xl={12} xs={12}>
              <FormControl className={classes.message} variant="outlined">
                <FilledTextField
                  error={errorMessage}
                  helperText={
                    errorMessage ? "Este campo no puede ser vacío" : ""
                  }
                  label="Mensaje"
                  InputLabelProps={{
                    shrink: true,
                    className: classes.floatingLabelFocusStyle,
                  }}
                  className={classes.root}
                  onChange={(e) => handleChange(e, "message")}
                  variant="filled"
                  value={values.message}
                  rows={10}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xl={4} xs={12}>
          <Grid
            container
            direction="row"
            justifycontent="center"
            alignItems="center"
          >
            <Grid item lg={12} md={12} sm={12} xl={12} xs={12}>
              <FormControl className={classes.margin}>
                <FilledTextField
                  error={errorName}
                  helperText={errorName ? "Este campo no puede ser vacío" : ""}
                  label="Nombre"
                  InputLabelProps={{
                    shrink: true,
                    className: classes.floatingLabelFocusStyle,
                  }}
                  className={classes.root}
                  onChange={(e) => handleChange(e, "name")}
                  variant="filled"
                  value={values.name}
                />
              </FormControl>
              <FormControl className={classes.margin}>
                <FilledTextField
                  error={errorMail || errorInvalidMail ? true : false}
                  helperText={
                    errorMail
                      ? "Este campo no puede ser vacío"
                      : errorInvalidMail
                      ? "Este correo no es correcto"
                      : null
                  }
                  label="Correo"
                  InputLabelProps={{
                    shrink: true,
                    className: classes.floatingLabelFocusStyle,
                  }}
                  className={classes.root}
                  onChange={(e) => handleChange(e, "mail")}
                  variant="filled"
                  value={values.mail}
                />
              </FormControl>
              <Button
                onClick={(e) => handleSubmit(e)}
                variant="filled"
                className={classes.button}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
