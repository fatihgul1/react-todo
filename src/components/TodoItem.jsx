import { useState } from 'react';

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  const save = () => {
    const value = draft.trim();
    if (value) onUpdate(todo.id, { text: value });
    else setDraft(todo.text);
    setEditing(false);
  };

  const cancel = () => {
    setDraft(todo.text);
    setEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') save();
    if (e.key === 'Escape') cancel();
  };

  return (
    <li className={todo.completed ? 'todo-item done' : 'todo-item'}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onUpdate(todo.id, { completed: !todo.completed })}
        aria-label="Tamamlandı"
      />

      {editing ? (
        <input
          className="edit-input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span className="text">{todo.text}</span>
      )}

      <div className="actions">
        {editing ? (
          <>
            <button className="btn small primary" onClick={save}>Kaydet</button>
            <button className="btn small" onClick={cancel}>İptal</button>
          </>
        ) : (
          <>
            <button className="btn small" onClick={() => setEditing(true)}>Düzenle</button>
            <button className="btn small danger" onClick={() => onDelete(todo.id)}>Sil</button>
          </>
        )}
      </div>
    </li>
  );
}
