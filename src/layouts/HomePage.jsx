import React from "react";
import { Link } from "react-router-dom";
import todoApi from "../apis/todoApi";

const HomePage = () => {
  const [todoList, setTodoList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchdata = async () => {
    try {
      setLoading(true);
      const response = await todoApi.todoList();
      setTodoList(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    fetchdata();
    return () => {
      todoApi.source.cancel();
    };
  }, []);

  const deleteTodo = async (id) => {
    try {
      const response = await todoApi.todoDelete(id);
      console.log(response.data);
      fetchdata();
    } catch (error) {
      console.log(error);
    }
  };

  const taskDone = async (id, value, isDone) => {
    try {
      const response = await todoApi.todoUpdate(id, {
        value: value,
        isDone: !isDone,
        date: new Date(),
      });
      fetchdata();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        todoList.map((data) => {
          return (
            <div key={data._id} style={list_style}>
              <div style={{ padding: "5px" }}>{data.value}</div>
              <div style={list_style}>
                <div
                  onClick={() => {
                    taskDone(data._id, data.value, data.isDone);
                  }}
                >
                  {data.isDone ? "Done" : "Undone"}
                </div>
                <Link to={`edit-todo/${data._id}`}>Edit</Link>
                <div
                  onClick={() => {
                    setLoading(true);
                    deleteTodo(data._id);
                    setLoading(false);
                  }}
                >
                  Delete
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default HomePage;

const list_style = {
  width: "50%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-around",
  padding: "5px",
};
