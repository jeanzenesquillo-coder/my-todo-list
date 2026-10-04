import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="app-container">
      <div className="todo-app">
        <h1>Sweet Todo List 🎀</h1>
        <div className="input-group">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Add a new task..."
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul className="todo-list">
          {tasks.map(task => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <span onClick={() => toggleComplete(task.id)}>
                {task.completed ? '✅' : '⬜'} {task.text}
              </span>
              <button className="delete-btn" onClick={() => deleteTask(task.id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="instructions">
        <h3>Paano Gamitin 🎀</h3>
        <ul>
          <li><strong>Mag-add ng task:</strong> I-type ang gusto mong gawin sa box, tapos pindutin ang "Add" o "Enter".</li>
          <li><strong>I-mark as done:</strong> I-click ang mismong task para maglagay ng ✅ at ma-strikethrough.</li>
          <li><strong>I-delete:</strong> I-click ang ❌ sa kanang bahagi ng task para tanggalin ito.</li>
        </ul>
      </div>
    </div>
  );
}

export default App;