import React from "react";
import CreateTodo from "../components/createTodo";
import todoApi from "../apis/todoApi";
import { useHistory } from "react-router-dom";

const AddTodoPage = () => {
  const [loading, setLoading] = React.useState(false);

  let history = useHistory();
  const onsubmit = async (val) => {
    try {
      setLoading(true);
      const response = await todoApi.todoCreate({
        value: val,
        isDone: false,
        date: new Date(),
      });
      console.log(response.data);
      setLoading(false);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <CreateTodo onsubmit={onsubmit} loading={loading} />
    </div>
  );
};

export default AddTodoPage;
