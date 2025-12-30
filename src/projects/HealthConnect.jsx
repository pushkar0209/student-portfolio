import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, Stethoscope, Activity, Thermometer, Brain, AlertCircle } from 'lucide-react';

const HealthConnect = () => {
    const [symptoms, setSymptoms] = useState({
        fever: false,
        cough: false,
        headache: false,
        fatigue: false,
        nausea: false,
        difficultyBreathing: false
    });
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState(null);

    const handleToggle = (key) => {
        setSymptoms(prev => ({ ...prev, [key]: !prev[key] }));
        setResult(null);
    };

    const analyzeSymptoms = () => {
        setAnalyzing(true);
        setTimeout(() => {
            const count = Object.values(symptoms).filter(Boolean).length;
            let diagnosis = {
                color: "text-green-500",
                bg: "bg-green-100 dark:bg-green-900/30",
                title: "Low Risk",
                desc: "Your symptoms appear mild. Ensure you stay hydrated and get rest.",
                action: "Monitor for 24 hours"
            };

            if (symptoms.difficultyBreathing || count >= 5) {
                diagnosis = {
                    color: "text-red-500",
                    bg: "bg-red-100 dark:bg-red-900/30",
                    title: "Urgent Attention Needed",
                    desc: "Based on the combination of symptoms, immediate medical attention is recommended.",
                    action: "Contact a doctor immediately"
                };
            } else if (count >= 3) {
                diagnosis = {
                    color: "text-orange-500",
                    bg: "bg-orange-100 dark:bg-orange-900/30",
                    title: "Moderate Risk",
                    desc: "You may have a viral infection. Monitor your temperature.",
                    action: "Schedule a tele-consultation"
                };
            }

            setResult(diagnosis);
            setAnalyzing(false);
        }, 2000);
    };

    return (
        <div className="w-full max-w-5xl mx-auto p-8 glass-panel rounded-3xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -ml-32 -mb-32" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-500 flex items-center justify-center">
                            <HeartPulse size={24} />
                        </div>
                        <h2 className="text-3xl font-bold dark:text-white">Symptom Checker</h2>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 mb-8">
                        Select the symptoms you are currently experiencing for an AI-powered preliminary assessment.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {[
                            { key: 'fever', label: 'Fever / Chills', icon: Thermometer },
                            { key: 'cough', label: 'Persistent Cough', icon: Stethoscope },
                            { key: 'headache', label: 'Severe Headache', icon: Brain },
                            { key: 'fatigue', label: 'Fatigue / Weakness', icon: Activity },
                            { key: 'nausea', label: 'Nausea / Vomiting', icon: AlertCircle },
                            { key: 'difficultyBreathing', label: 'Dyspnea', icon: HeartPulse }
                        ].map((item) => (
                            <button
                                key={item.key}
                                onClick={() => handleToggle(item.key)}
                                className={`p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3 ${symptoms[item.key]
                                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                                        : 'border-slate-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-900/50 text-slate-600 dark:text-slate-400'
                                    }`}
                            >
                                <item.icon size={20} className={symptoms[item.key] ? 'text-red-500' : 'text-slate-400'} />
                                <span className="font-semibold">{item.label}</span>
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={analyzeSymptoms}
                        disabled={analyzing}
                        className="w-full py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-red-500/25 hover:scale-[1.02] transition-transform disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {analyzing ? (
                            <>
                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity }}>
                                    <Activity size={24} />
                                </motion.div>
                                Processing Health Data...
                            </>
                        ) : (
                            "Analyze Symptoms"
                        )}
                    </button>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-100 dark:border-white/5 flex items-center justify-center min-h-[400px]">
                    {!result && !analyzing && (
                        <div className="text-center opacity-50">
                            <div className="w-64 h-64 mx-auto mb-6 rounded-full border-4 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center">
                                <Stethoscope size={64} className="text-slate-300 dark:text-slate-600" />
                            </div>
                            <p className="text-xl font-medium">Waiting for input...</p>
                        </div>
                    )}

                    {analyzing && (
                        <div className="text-center">
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="w-48 h-48 mx-auto bg-red-500/10 rounded-full flex items-center justify-center mb-6"
                            >
                                <div className="w-32 h-32 bg-red-500/20 rounded-full flex items-center justify-center">
                                    <HeartPulse size={48} className="text-red-500" />
                                </div>
                            </motion.div>
                            <h3 className="text-xl font-bold dark:text-white">AI is analyzing patterns</h3>
                            <p className="text-slate-500 mt-2">Comparing with medical database...</p>
                        </div>
                    )}

                    {result && (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center w-full"
                        >
                            <div className={`w-24 h-24 mx-auto rounded-full ${result.bg} ${result.color} flex items-center justify-center mb-6`}>
                                <Activity size={40} />
                            </div>
                            <h3 className={`text-3xl font-bold mb-2 ${result.color}`}>{result.title}</h3>
                            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
                                {result.desc}
                            </p>

                            <div className="bg-white dark:bg-black/20 p-4 rounded-xl border border-slate-100 dark:border-white/5 inline-block w-full">
                                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">Recommended Action</span>
                                <span className="text-xl font-bold dark:text-white">{result.action}</span>
                            </div>

                            <p className="mt-8 text-xs text-slate-400 max-w-xs mx-auto">
                                * This is a demo. Do not use for actual medical advice.
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HealthConnect;
