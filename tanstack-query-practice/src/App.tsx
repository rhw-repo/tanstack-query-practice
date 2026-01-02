import { useQuery } from "@tanstack/react-query";
import "./App.css";

function App() {
  /* useQuery imported from TanstackQuery, take in 1 primary argument:
  an object which needs 2 properties:
  A query key used for refectching and caching data, must be unique 
  A query function denoted as queryFn: will run whenevr run the query with this key, such as your API call (fetch, axios, etc)

  */

  const { data } = useQuery({
    queryKey: ["todos"],
    // Do not call the queryFn here just pass it
    queryFn: getTodos,
  });

  return <div>{JSON.stringify(data)}</div>;
}

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
};
export default App;
