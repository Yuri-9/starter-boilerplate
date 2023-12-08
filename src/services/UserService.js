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
    url: `https://jsonplaceholder.typicode.com/users/${user.id}`,
    method: "PUT",
    data: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then(async (res) => {
    await utils.delay(2000);
    return res;
  });
};

export default UserService;
