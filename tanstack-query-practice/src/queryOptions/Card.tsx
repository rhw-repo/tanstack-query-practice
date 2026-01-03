import { useSuspenseQuery } from "@tanstack/react-query";
import createTodoQueryOptions from "./createTodoQueryOptions";

/* 
useQuery data prop behaves as <specified> | undefined
If data will never be undefined can use instead:
useSuspenseQuery 
Guarantees the query will return something

Use case: often used with React Suspense
Limitation: cannot use conditional querying with useSuspenseQuery
as enabled is not an intristic prop
*/

export default function Card() {
  const { data } = useSuspenseQuery(createTodoQueryOptions());
  return (
    <div className="card">
      <h1 className="card-header">CARD</h1>
      {JSON.stringify(data?.slice(0, 10))}
    </div>
  );
}
