import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const onCheck = (ev, id) => {
    let temp = [...todos];
    let index = temp.findIndex((val) => val.id === id);
    if (index !== -1) {
      temp[index]["completed"] = ev.target.checked;
      setTodos([...temp]);
    }
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div data-testid="outer-div">
      {todos.map((todo) => (
        <li key={todo.id}>
          <p>{todo.title}</p>
          <input type="checkbox" checked={todo.completed} onChange={(ev) => onCheck(ev, todo.id)} />
        </li>
      ))}
    </div>
  );
};

export default Todos;
