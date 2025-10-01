// import { useState } from "react";
// import { useDispatchTodos } from "../../context/TodoContext";
// const Form = ({ createTodo }) => {
//   const [enteredTodo, setEnteredTodo] = useState("");
//   const dispatch = useDispatchTodos();

//   const addTodo = (e) => {
//     e.preventDefault();

//     const newTodo = {
//       id: Math.floor(Math.random() * 1e5),
//       content: enteredTodo,
//       editing: false
//     };

//     dispatch({ type: 'todo/add', todo: newTodo, editing: false });

//     setEnteredTodo("");
//   };
//   return (
//     <div>
//       <form onSubmit={addTodo}>
//         <input
//           type="text"
//           value={enteredTodo}
//           onChange={(e) => setEnteredTodo(e.target.value)}
//         />
//         <button>追加</button>
//       </form>
//     </div>
//   );
// };

// export default Form;

import { useState } from "react";
import { useDispatchTodos } from "../../context/TodoContext";
import { HStack, Input, Button } from "@chakra-ui/react";
import todoApi from "../../api/todo";

const Form = () => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const dispatch = useDispatchTodos();

  const addTodo = (e) => {
    e.preventDefault();

    if (!enteredTodo.trim()) return; // 空文字チェック         

    // const newTodo = {
    //   id: Math.floor(Math.random() * 1e5),
    //   content: enteredTodo,
    //   editing: false,
    // };
    const newTodo = {
      id: Math.floor(Math.random() * 1e5).toString(),
      content: enteredTodo,
      editing: false
    };

    todoApi.post(newTodo).then(newTodo => {
      dispatch({ type: "todo/add", todo: newTodo });
      setEnteredTodo("");
    })

  };

  return (
    <form onSubmit={addTodo}>
      <HStack spacing={3}>
        <Input
          placeholder="新しいTodoを入力"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
          size="md"
          variant="outline"
        />
        <Button type="submit" colorScheme="teal">
          追加
        </Button>
      </HStack>
    </form>
  );
};

export default Form;


