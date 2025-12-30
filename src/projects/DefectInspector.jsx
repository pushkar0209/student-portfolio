import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScanLine, AlertTriangle, CheckCircle, Camera, Crosshair, Zap } from 'lucide-react';

const DefectInspector = () => {
    const [isScanning, setIsScanning] = useState(false);
    const [defectsFound, setDefectsFound] = useState(false);

    // Placeholder image of a circuit board or industrial surface
    const inspectionImage = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop";

    const startInspection = () => {
        setIsScanning(true);
        setDefectsFound(false);

        setTimeout(() => {
            setIsScanning(false);
            setDefectsFound(true);
        }, 2500); // Scan duration
    };

    return (
        <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Control Panel */}
                <div className="md:w-1/3 glass-panel p-8 rounded-3xl flex flex-col h-full">
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-xl">
                                <ScanLine size={24} />
                            </div>
                            <h2 className="text-2xl font-bold dark:text-white">Defect Inspector</h2>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Industrial computer vision system for real-time surface anomaly detection.
                        </p>
                    </div>

                    <div className="space-y-4 mb-8 flex-1">
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Model</span>
                            <div className="text-lg font-bold dark:text-slate-200">ResNet-50 Custom</div>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Confidence Threshold</span>
                            <div className="text-lg font-bold dark:text-slate-200">94.5%</div>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status</span>
                            <div className="flex items-center gap-2 mt-1">
                                <div className={`w-2 h-2 rounded-full ${isScanning ? 'bg-amber-500 animate-pulse' : 'bg-green-500'}`} />
                                <span className="font-medium dark:text-slate-300">{isScanning ? 'Processing Feed...' : 'System Ready'}</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={startInspection}
                        disabled={isScanning}
                        className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-lg hover:scale-[1.02] transition-transform disabled:opacity-50 flex items-center justify-center gap-2 shadow-xl"
                    >
                        {isScanning ? 'Scanning...' : (
                            <>
                                <Camera size={20} /> Inspect Surface
                            </>
                        )}
                    </button>
                </div>

                {/* Viewport */}
                <div className="md:w-2/3 relative rounded-3xl overflow-hidden shadow-2xl group bg-black">
                    <img
                        src={inspectionImage}
                        alt="Inspection Surface"
                        className={`w-full h-full object-cover transition-opacity duration-300 ${isScanning ? 'opacity-50' : 'opacity-80'}`}
                    />

                    {/* Grid Overlay */}
                    <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/1/12/Grid_transparent.png')] bg-repeat opacity-10 pointer-events-none" />

                    {/* Scanner Line */}
                    {isScanning && (
                        <motion.div
                            initial={{ top: "0%" }}
                            animate={{ top: "100%" }}
                            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                            className="absolute left-0 w-full h-1 bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.8)] z-20"
                        />
                    )}

                    {/* HUD */}
                    <div className="absolute top-6 right-6 flex gap-4">
                        <div className="px-3 py-1 bg-black/50 backdrop-blur-md rounded border border-white/20 text-xs font-mono text-green-400">
                            FPS: 60
                        </div>
                        <div className="px-3 py-1 bg-black/50 backdrop-blur-md rounded border border-white/20 text-xs font-mono text-green-400">
                            <Zap size={10} className="inline mr-1" />
                            LIVE FEED
                        </div>
                    </div>

                    {/* Crosshair */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                        <Crosshair size={100} className="text-white" strokeWidth={0.5} />
                    </div>

                    {/* Detected Defects Overlays */}
                    {defectsFound && !isScanning && (
                        <>
                            <motion.div
                                initial={{ scale: 1.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="absolute top-[30%] left-[40%] w-24 h-24 border-2 border-red-500 bg-red-500/10 rounded-lg flex items-start justify-end p-1 shadow-[0_0_30px_rgba(239,68,68,0.5)]"
                            >
                                <span className="bg-red-600 text-white text-[10px] uppercase font-bold px-1 rounded block">Crack: 98%</span>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 1.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="absolute bottom-[20%] right-[30%] w-16 h-16 border-2 border-red-500 bg-red-500/10 rounded-lg flex items-start justify-end p-1 shadow-[0_0_30px_rgba(239,68,68,0.5)]"
                            >
                                <span className="bg-red-600 text-white text-[10px] uppercase font-bold px-1 rounded block">Rust: 87%</span>
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-6 left-6 right-6 bg-red-500/90 backdrop-blur-xl p-4 rounded-xl text-white flex items-center gap-4"
                            >
                                <AlertTriangle size={32} />
                                <div>
                                    <h4 className="font-bold text-lg">Anomalies Detected</h4>
                                    <p className="opacity-90 text-sm">Automated system flag: Quality Control Review Required.</p>
                                </div>
                            </motion.div>
                        </>
                    )}

                    {!defectsFound && !isScanning && (
                        <div className="absolute bottom-6 left-6 px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/50 rounded-lg backdrop-blur text-sm font-mono flex items-center gap-2">
                            <CheckCircle size={14} /> SYSTEM CALIBRATED
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DefectInspector;
