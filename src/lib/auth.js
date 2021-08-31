import api from "../api";
import history from "../helpers/history";

export const LoginUser = (email, password, getErrorBack) => {
  api
    .post("/user/login/", { email, password })
    .then((res) => {
      
      if(res.data.active){
        if(res.data.role === 'user'){
          history.push("/sesiones")
        }else{
          history.push("/dashboard")
        }
        
        window.location.reload();
      } else {
        getErrorBack("Este usuario no ha sido activado.")
      }
    })
    .catch((err) => {
      getErrorBack(err.response.data.error);
    });
};

export const registerUser = (
  first_name,
  last_name,
  birthday,
  email,
  password,
  confirmPassword,
  role,
  active,
  getResponseBack
) => {
  api
    .post("/user/", {
      first_name,
      last_name,
      birthday,
      email,
      password,
      confirmPassword,
      role,
      active
    })
    .then((res) => {
      getResponseBack(true)

    })
    .catch((err) => {
      getResponseBack(false)
    });
};
