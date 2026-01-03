import { Suspense } from "react";
import "./App.css";
import Card from "./Card";
// queryOptions extracted into separate ts file to be reusable

function App() {
  /* useQuery hook is imported from TanstackQuery, takes in 1 primary argument:
  an object which needs 2 properties:
  - A query key used for refetching and caching data, 
  must be unique, needs id to be accurate if variable will change
  - A query function denoted as queryFn: will run whenever run the query with this 
  key, such as your API call (fetch, axios, etc)
  */

  return (
    <main>
      {/* if suspense query not yet resolved render fallback */}
      <Suspense fallback={<>Loading...</>}>
        <Card />
      </Suspense>
    </main>
  );
}

export default App;

/* TypeScript note: 
React Query property data has type any, TS cannot catch error
Workaround = Specify  type in query function 
See type for Todos in createQueryOptions.ts

More complex apps may use helpers such as Zod to perform
runtime validation for you types 
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
