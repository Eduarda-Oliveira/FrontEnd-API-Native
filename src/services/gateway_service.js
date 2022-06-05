import axios from "axios";

let host='http://localhost:5000'

const login_service = {
  login: async (login, password) => {
    let response;
    await axios.post(`${host}/user/login`, { login, password }).then((resp) => {
      response = resp;
    }).catch((e)=>{
      throw e;
    });
    return response;
  }
}

export {
  login_service
}
