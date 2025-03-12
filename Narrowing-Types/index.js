// function printTodos(todos: string[] | string) {
//   if (typeof todos === "object") {
//     todos.map((todo) => console.log(todo));
//   } else if (typeof todos === "string") {
//     console.log(todos);
//   }
// }
// const todos = ["zk", "khan"];
// printTodos(todos);
function printTodos(todos) {
    if (todos) {
        todos.map(function (todo) { return console.log(todo); });
    }
    else {
        console.log("null value ");
    }
}
var todos = ["zk", "khan"];
// printTodos(todos);
printTodos(null);
