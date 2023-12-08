import axios from "auth/FetchInterceptor";
import utils from "utils";

const UserService = {};

UserService.getUsers = async function (params) {
  return axios({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    params,
  }).then(async (res) => {
    await utils.delay(3000);
    return res;
  });
};

UserService.getUserById = async function (id) {
  console.log("params", id);
  return axios({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    params: { id },
  });
};

UserService.updateUser = async function (user) {
  return axios({
    url: "/https://jsonplaceholder.typicode.com/users/",
    method: "PUT",
    data: user,
  });
};

export default UserService;
