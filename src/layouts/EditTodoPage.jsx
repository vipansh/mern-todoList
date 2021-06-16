import React from "react";
import { useHistory, useParams } from "react-router-dom";
import todoApi from "../apis/todoApi";
import CreateTodo from "../components/createTodo";
const EditTodoPage = () => {
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState("");
  let history = useHistory();
  let { id } = useParams();

  const onSubmit = async (val, id) => {
    try {
      console.log(id);
      setLoading(true);
      const response = await todoApi.todoUpdate(id, {
        value: val,
        isDone: false,
        date: new Date(),
      });
      console.log(response.data);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    (async () => {
      try {
        const response = await todoApi.todoShow(id);
        setValue(response.data.value);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  return (
    <div>
      <CreateTodo val={value} onsubmit={onSubmit} loading={loading} />
    </div>
  );
};

export default EditTodoPage;
