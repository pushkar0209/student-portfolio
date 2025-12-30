import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Sparkles, Trash2, Check, Clock, AlertTriangle, Briefcase, User } from 'lucide-react';

const TaskManager = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Finish project report", category: "Uncategorized", priority: "Medium", completed: false },
        { id: 2, text: "Buy groceries", category: "Uncategorized", priority: "Low", completed: false },
        { id: 3, text: "Prepare for client meeting", category: "Uncategorized", priority: "High", completed: false },
    ]);
    const [newTask, setNewTask] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const addTask = (e) => {
        e.preventDefault();
        if (!newTask.trim()) return;
        setTasks([...tasks, {
            id: Date.now(),
            text: newTask,
            category: "Uncategorized",
            priority: "Medium",
            completed: false
        }]);
        setNewTask("");
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    const aiCategorize = () => {
        setIsAnalyzing(true);
        setTimeout(() => {
            setTasks(tasks.map(t => {
                const text = t.text.toLowerCase();
                let category = "Personal";
                let priority = "Low";

                if (text.includes("project") || text.includes("meeting") || text.includes("report") || text.includes("client")) {
                    category = "Work";
                    priority = "High";
                } else if (text.includes("urgent") || text.includes("deadline")) {
                    priority = "Critical";
                }

                return { ...t, category, priority };
            }));
            setIsAnalyzing(false);
        }, 1500);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6 md:p-10 glass-panel rounded-3xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold mb-2 dark:text-white">AI Task Manager</h2>
                    <p className="text-slate-500 dark:text-slate-400">Manage tasks with intelligent categorization</p>
                </div>
                <button
                    onClick={aiCategorize}
                    disabled={isAnalyzing}
                    className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform disabled:opacity-50"
                >
                    {isAnalyzing ? (
                        <>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1 }}
                            >
                                <Sparkles size={18} />
                            </motion.div>
                            Analyzing...
                        </>
                    ) : (
                        <>
                            <Sparkles size={18} />
                            AI Optimize
                        </>
                    )}
                </button>
            </div>

            <form onSubmit={addTask} className="relative mb-8">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task..."
                    className="w-full pl-6 pr-14 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border-none focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white placeholder:text-slate-400"
                />
                <button
                    type="submit"
                    className="absolute right-2 top-2 p-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
                >
                    <Plus size={24} />
                </button>
            </form>

            <div className="space-y-3">
                <AnimatePresence>
                    {tasks.map(task => (
                        <motion.div
                            key={task.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className={`p-4 rounded-xl flex items-center justify-between group transition-all ${
                                task.completed
                                    ? 'bg-slate-50 dark:bg-slate-900/30 opacity-60'
                                    : 'bg-white dark:bg-slate-800/80 shadow-sm hover:shadow-md'
                            }`}
                        >
                            <div className="flex items-center gap-4 flex-1">
                                <button
                                    onClick={() => toggleComplete(task.id)}
                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                        task.completed
                                            ? 'bg-green-500 border-green-500 text-white'
                                            : 'border-slate-300 dark:border-slate-600 hover:border-primary'
                                    }`}
                                >
                                    {task.completed && <Check size={14} />}
                                </button>
                                <div>
                                    <span className={`text-lg dark:text-slate-200 block ${task.completed ? 'line-through' : ''}`}>
                                        {task.text}
                                    </span>
                                    <div className="flex gap-2 mt-1">
                                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded flex items-center gap-1 ${
                                            task.category === 'Work' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
                                            task.category === 'Personal' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' :
                                            'bg-slate-100 text-slate-500 dark:bg-slate-700/50 dark:text-slate-400'
                                        }`}>
                                            {task.category === 'Work' && <Briefcase size={10} />}
                                            {task.category === 'Personal' && <User size={10} />}
                                            {task.category}
                                        </span>
                                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded flex items-center gap-1 ${
                                            task.priority === 'Critical' ? 'bg-red-100 text-red-600' :
                                            task.priority === 'High' ? 'bg-orange-100 text-orange-600' :
                                            task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                                            'bg-green-100 text-green-600'
                                        }`}>
                                            {task.priority === 'Critical' && <AlertTriangle size={10} />}
                                            {task.priority === 'High' && <Clock size={10} />}
                                            {task.priority}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => deleteTask(task.id)}
                                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                            >
                                <Trash2 size={18} />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
                {tasks.length === 0 && (
                    <div className="text-center py-10 text-slate-400">
                        No tasks yet. Add one above!
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskManager;
