import { queryOptions } from "@tanstack/react-query";

/* Utility allows for type saftey and intellisense
 auto-complete options versus manually typing out objects */

export default function createTodoQueryOptions() {
  return queryOptions({
    // query will be cached using it's queryKey, needs id for accuracy if values will change
    queryKey: ["todos" /*id*/],
    // queryFn is not called by this hook, pass in function definition not a call
    queryFn: /*() =>*/ getTodos /*(id)*/,
  });
}

const getTodos = async (/*id: number*/): Promise<Todo[]> => {
  /* Simulate a slow fetch and be able to view template 
  rendered when isPending is true */
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${1}`
  );
  return await response.json();
};

type Todo = {
  useId: number;
  id: number;
  title: string;
  completed: boolean;
};
