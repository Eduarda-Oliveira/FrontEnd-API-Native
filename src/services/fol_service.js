import axios from "axios";

const host = 'http://127.0.0.1:8080'
const modelRoute = `${host}/fol`

const FolService = {
  findAll: async function () {
    let resp, msg;
    await axios.get(`${modelRoute}/findAll`).then(
      ({data}) => {
      if (!data){
        msg = {error: "Não há fols para exibir"}
        resp = {msg}
      }
      if (data.length > 0) {
        resp = {data}
      } 
    }
  ).catch(
    (e => {
      console.log(`Deu ruim: ${e}`)
    })
  )
  return resp
  },

  findByKeyword: async function (params) {
    let resp, msg;
    await axios.post(`${modelRoute}/findByKeyword`, params).then(
      ({data}) => {
      if (!data){
        msg = {error: "Não há fols para exibir"}
        resp = {msg}
      }
      if (data.length > 0) {
        resp = {data}
      } 
    }
  ).catch(
    (e => {
      console.log(`Deu ruim: ${e}`)
    })
  )
  return resp 
  }
}

export default FolService;