import { useEffect, useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { FILTERS } from '../interfaces/todo';

const STORAGE_KEY = 'todos';

function loadTodos() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function newId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export default function Home() {
  const [todos, setTodos] = useState(loadTodos);
  const [filter, setFilter] = useState('all');

  // Her değişiklikte LocalStorage'a kaydet
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch {
      /* depolama kapalıysa sessizce geç */
    }
  }, [todos]);

  // EKLE
  const addTodo = (text) => {
    const todo = { id: newId(), text, completed: false, createdAt: new Date().toISOString() };
    setTodos([todo, ...todos]);
  };

  // GÜNCELLE (metin düzenleme veya tamamlandı işareti)
  const updateTodo = (id, changes) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, ...changes } : t)));
  };

  // SİL
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const visible = todos.filter((t) => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <main className="container">
      <h1>Görev Listesi</h1>
      <p className="subtitle">{remaining} görev yapılmayı bekliyor</p>

      <TodoForm onAdd={addTodo} />

      <div className="filters">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={filter === f.key ? 'filter active' : 'filter'}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* LİSTELE */}
      <TodoList todos={visible} onUpdate={updateTodo} onDelete={deleteTodo} />
    </main>
  );
}
