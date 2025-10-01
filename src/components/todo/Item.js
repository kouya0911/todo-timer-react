import { useState } from "react";
import {
  StackDivider,
  VStack,
  HStack,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { useDispatchTodos } from "../../context/TodoContext";
import { VscCheck } from "react-icons/vsc";
import todoApi from "../../api/todo";

const Item = ({ todo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const dispatch = useDispatchTodos();

  const changeContent = (e) => setEditingContent(e.target.value);

  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing };
    todoApi.patch(newTodo).then(newTodo => {
      dispatch({ type: "todo/update", todo: newTodo });
    });
  };

  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      editing: !todo.editing,
      content: editingContent,
    };
    todoApi.patch(newTodo).then(newTodo => {
      dispatch({ type: "todo/update", todo: newTodo });
    })
  };

  const complete = (todo) => {
    todoApi.delete(todo).then(() => {
      dispatch({ type: "todo/delete", todo });
    })
  };

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      borderWidth="1px"
      borderRadius="md"
      p={4}
      spacing={3}
      align="start"
    >
      <HStack spacing={3}>
        <IconButton
          aria-label="complete"
          icon={<VscCheck />}
          colorScheme="teal"
          onClick={() => complete(todo)}
        />
        <form onSubmit={confirmContent} style={{ display: "inline" }}>
          {todo.editing ? (
            <Input
              value={editingContent}
              onChange={changeContent}
              size="sm"
              variant="outline"
              width="auto"
            />
          ) : (
            <Text onDoubleClick={toggleEditMode}>{todo.content}</Text>
          )}
        </form>
      </HStack>
    </VStack>
  );
};

export default Item;

