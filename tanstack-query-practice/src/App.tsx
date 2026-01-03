import { useQuery } from "@tanstack/react-query";
import "./App.css";
// queryOptions extracted into separate ts file to be reusable
import createTodoQueryOptions from "./queryOptions/createTodoQueryOptions";

function App() {
  /* useQuery hook is imported from TanstackQuery, takes in 1 primary argument:
  an object which needs 2 properties:
  - A query key used for refetching and caching data, 
  must be unique, needs id to be accurate if variable will change
  - A query function denoted as queryFn: will run whenever run the query with this 
  key, such as your API call (fetch, axios, etc)
  */

  const { data, isPending, refetch, error } = useQuery(
    createTodoQueryOptions()
  );

  if (error) {
    alert("Something went wrong");
  }

  return (
    <main>
      <div>
        {isPending ? (
          <span>Loading...</span>
        ) : (
          JSON.stringify(data.slice(0, 10))
        )}
      </div>
      <button onClick={() => refetch()}>Refetch</button>
    </main>
  );
}

export default App;

/* 
isFetching runs whenever the function is running at all 
isPending runs if there's no cache data 
isLoading runs when query is loading for the very first time 
*/

/* 
To run conditional queries: 
set state using a boolean
pass property enabled set to on to the useQuery hook 
whenever the boolean is true, the query will automatically run
whenever it is false, the query will not automatically run

It would run if forced to, for eaxmple if refetch function fires
But will not automatically run each time React rerenders this component

Use cases:
If there are multiple useQuery hooks in your component but each should 
only be run depending on some state in the component
*/
