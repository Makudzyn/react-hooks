import axios from "axios";
import useRequest from "./hooks/useRequest.js";

function App() {
  const [todos, loading, error] = useRequest(fetchTodos);
  function fetchTodos() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`);
  }

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>An error has occurred.</h1>

  return (
    <>
        {todos && todos.map(todo =>
          <div key={todo.id} style={{padding: 30, border: "2px solid black"}}>
            {todo.id}.
            {todo.title}
          </div>
        )}
    </>
  )
}

export default App
