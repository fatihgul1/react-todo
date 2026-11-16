import TodoItem from './TodoItem';

export default function TodoList({ todos, onUpdate, onDelete }) {
  if (todos.length === 0) {
    return <p className="empty">Gösterilecek görev yok.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </ul>
  );
}
