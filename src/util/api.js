import axios from "axios";

axios.defaults.baseURL =
  "https://ea854e33-4dc7-4e40-9fa9-025f2e5c8d68.mock.pstmn.io/";

function getApi(url) {
  return axios({
    method: "get",
    url,
  });
}
function postApi(url, data) {
  return axios({
    method: "post",
    url,
    data,
  });
}

export { getApi, postApi };
