import React, { useState } from 'react';
import { motion } from 'motion/react';

interface FeatureToggleProps {
  label: string;
  description: string;
  defaultEnabled?: boolean;
}

export const FeatureToggle = ({ label, description, defaultEnabled = false }: FeatureToggleProps) => {
  const [enabled, setEnabled] = useState(defaultEnabled);

  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
      <div className="pr-4">
        <h4 className="font-medium text-slate-200">{label}</h4>
        <p className="text-sm text-slate-500 mt-1">{description}</p>
      </div>
      
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 ${
          enabled ? 'bg-gradient-to-r from-cyan-500 to-emerald-500' : 'bg-slate-700'
        }`}
      >
        <motion.div
          initial={false}
          animate={{ x: enabled ? 24 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute top-1 left-0 w-4 h-4 rounded-full bg-white shadow-sm"
        />
      </button>
    </div>
  );
};
