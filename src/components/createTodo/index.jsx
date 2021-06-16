import React from "react";
import { useParams } from "react-router-dom";

const CreateTodo = ({ val, onsubmit, loading = false }) => {
  const [value, setValue] = React.useState("");
  let { id } = useParams();

  React.useEffect(() => {
    setValue(val ? val : "");
  }, [val]);
  const addTodo = () => {
    if (id) {
      onsubmit(value, id);
    } else onsubmit(value);
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={addTodo} disabled={loading}>
        {loading ? "Loading..." : "Add TODO"}
      </button>
    </div>
  );
};

export default CreateTodo;
