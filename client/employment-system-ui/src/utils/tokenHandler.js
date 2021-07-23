import empployeesApi from "../api/employeesApi";

const tokenHandler = (token) => {
  if (token) {
    empployeesApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete empployeesApi.defaults.headers.common["Authorization"];
  }
};

export default tokenHandler;
