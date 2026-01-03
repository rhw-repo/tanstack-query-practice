import { useQuery } from "@tanstack/react-query";
import "./App.css";

function App() {
  /* useQuery hook is imported from TanstackQuery, takes in 1 primary argument:
  an object which needs 2 properties:
  A query key used for refetching and caching data, must be unique 
  A query function denoted as queryFn: will run whenever run the query with this 
  key, such as your API call (fetch, axios, etc)
  */

  const { data, isPending, refetch } = useQuery({
    // query will be cached using it's queryKey
    queryKey: ["todos"],
    // queryFn is not called by this hook, just pass it
    queryFn: getTodos,
  });

  return (
    <main>
      <div>
        {isPending ? (
          <span>Loading...</span>
        ) : (
          JSON.stringify(data.slice(0, 10))
        )}
      </div>
      // Already
      <button onClick={() => refetch()}>Refetch</button>
    </main>
  );
}

const getTodos = async () => {
  /* Simulate a slow fetch and be able to view template 
  rendered when isPending is true */
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
};

export default App;

/* 
isFetching runs whenever the function is running at all 
isPending runs if there's no cache data 
isLoading runs when query is loading for the very first time 
*/
