'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

type RobotContextType = {
  isRobotActive: boolean;
  toggleRobot: () => void;
};

const RobotContext = createContext<RobotContextType | undefined>(undefined);

export function RobotProvider({ children }: { children: React.ReactNode }) {
  const [isRobotActive, setIsRobotActive] = useState(true);

  // Load state from local storage on mount
  useEffect(() => {
    const storedState = localStorage.getItem('us_software_robot_active');
    if (storedState !== null) {
      setIsRobotActive(storedState === 'true');
    }
  }, []);

  const toggleRobot = () => {
    setIsRobotActive((prev) => {
      const newState = !prev;
      localStorage.setItem('us_software_robot_active', String(newState));
      return newState;
    });
  };

  return (
    <RobotContext.Provider value={{ isRobotActive, toggleRobot }}>
      {children}
    </RobotContext.Provider>
  );
}

export function useRobot() {
  const context = useContext(RobotContext);
  if (context === undefined) {
    throw new Error('useRobot must be used within a RobotProvider');
  }
  return context;
}
