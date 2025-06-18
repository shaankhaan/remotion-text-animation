import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import React from 'react';

const letters = 'Testing'.split('');

export const TestingAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        fontSize: 120,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        backgroundColor: '#0d1117',
        color: '#61dafb',
      }}
    >
      {letters.map((letter, i) => {
        const delay = i * 5;
        const progress = spring({
          frame: frame - delay,
          fps,
          config: {
            damping: 8,
            stiffness: 100,
          },
        });

        const rotate = interpolate(progress, [0, 1], [90, 0]);
        const scale = interpolate(progress, [0, 1], [2, 1]);
        const y = interpolate(progress, [0, 1], [-100, 0]);

        return (
          <span
            key={i}
            style={{
              transform: `translateY(${y}px) rotate(${rotate}deg) scale(${scale})`,
              display: 'inline-block',
              margin: '0 4px',
              opacity: progress,
            }}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
};
