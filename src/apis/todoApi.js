import axios from "axios";

const todoList = () => axios.get("https://todo-test-app-21.herokuapp.com/todoList");

const todoShow = (slug) => axios.get(`https://todo-test-app-21.herokuapp.com/todoList/${slug}`);

const todoCreate = (payload) => axios.post("https://todo-test-app-21.herokuapp.com/todoList/", payload);

const todoUpdate = ( slug, payload ) => axios.put(`https://todo-test-app-21.herokuapp.com/todoList/${slug}`, payload);

const todoDelete = ( slug, payload ) => axios.delete(`https://todo-test-app-21.herokuapp.com/todoList/${slug}`, payload);
const source = axios.CancelToken.source()

const todoApi = {
  todoList,
  todoShow,
  todoCreate,
  todoUpdate,
  todoDelete,
  source
};

export default todoApi;