import axios from "axios";

const API_BASE_URL = "https://todo-agonzalesbm.azurewebsites.net";

class ToDoServiceAPI {
  getTasks = () => {
    return axios.get(API_BASE_URL + "/");
  };

  getTaskById = (id) => {
    return axios.get(API_BASE_URL + "/" + id);
  };

  saveTask = (task) => {
    return axios.post(API_BASE_URL, task);
  };

  updateTask = (task, id) => {
    return axios.put(API_BASE_URL + "/" + id, task);
  };

  deleteTask = (id) => {
    return axios.delete(API_BASE_URL + "/" + id);
  };
}

export default new ToDoServiceAPI();
