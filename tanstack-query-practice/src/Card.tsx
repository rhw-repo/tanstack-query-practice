import { useSuspenseQuery } from "@tanstack/react-query";
import createTodoQueryOptions from "./queryOptions/createTodoQueryOptions";

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
  const prettyPrint = data
    ? data
        .slice(0, 10)
        .map((item) =>
          // Stringify with indentation
          JSON.stringify(item, null, 2).replace(/\\n/g, " ")
        )
        // Blank line between items
        .join("\n\n")
    : "";

  return (
    <div className="card">
      <h1 className="card__header">CARD</h1>
      <pre className="card__body">{prettyPrint}</pre>
    </div>
  );
}
