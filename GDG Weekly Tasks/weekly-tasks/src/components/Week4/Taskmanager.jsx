import React, { useState } from 'react';

function Taskmanager() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editingTask, setEditingTask] = useState(null);
    const [editingText, setEditingText] = useState('');

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { id: Date.now(), text: newTask }]);
            setNewTask('');
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (id) => {
        const task = tasks.find(task => task.id === id);
        setEditingTask(id);
        setEditingText(task.text);
    };

    const saveTask = (id) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, text: editingText } : task)));
        setEditingTask(null);
        setEditingText('');
    };

    return (
        <div className="p-4 max-w-md mx-auto rounded-xl shadow-2xl">
            <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
            <div className="mb-4">
                <input
                    type="text"
                    className="border p-2 w-full"
                    placeholder="Add a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white p-2 mt-2 w-full"
                    onClick={addTask}
                >
                    Add Task
                </button>
            </div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className="flex justify-between items-center mb-2">
                        {editingTask === task.id ? (
                            <>
                                <input
                                    type="text"
                                    className="border p-2 w-full"
                                    value={editingText}
                                    onChange={(e) => setEditingText(e.target.value)}
                                />
                                <button
                                    className="bg-green-500 text-white p-2 ml-2"
                                    onClick={() => saveTask(task.id)}
                                >
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                <span>{task.text}</span>
                                <div>
                                    <button
                                        className="bg-yellow-500 text-white p-2 ml-2"
                                        onClick={() => editTask(task.id)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white p-2 ml-2"
                                        onClick={() => deleteTask(task.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Taskmanager;