// function printTodos(todos: string[] | string) {
//   if (typeof todos === "object") {
//     todos.map((todo) => console.log(todo));
//   } else if (typeof todos === "string") {
//     console.log(todos);
//   }
// }

// const todos = ["zk", "khan"];
// printTodos(todos);

function printTodos(todos: string[] | null) {
  if (todos) {
    todos.map((todo) => console.log(todo));
  } else {
    console.log("null value ");
  }
}

const todos = ["zk", "khan"];
// printTodos(todos);
printTodos(null);
