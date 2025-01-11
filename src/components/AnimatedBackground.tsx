import React from 'react';

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-transparent dark:from-purple-900/30 dark:to-transparent" />
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          >
            <div className="text-purple-200/10 dark:text-purple-700/10 text-[2rem] transform rotate-12">
              {['</', '{}', '()', '=>', '[]', '&&', '||', '++', '=='][Math.floor(Math.random() * 9)]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}