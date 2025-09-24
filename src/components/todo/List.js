import { useTodos } from "../../context/TodoContext";
import Item from "./Item";

const List = () => {
  const todos = useTodos();
  return (
    <>
      {todos.map((todo) => {
        return (
            <Item todo={todo} key={todo.id} />
        )
      })}
    </>
  );
};

export default List;
