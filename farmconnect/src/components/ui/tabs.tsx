import React from 'react';

export function Tabs({ children, className = '', ...props }) {
  return <div className={`fc-tabs ${className}`.trim()} {...props}>{children}</div>;
}

export function TabsList({ children, className = '', ...props }) {
  return <div className={`fc-tabs-list ${className}`.trim()} {...props}>{children}</div>;
}

export function TabsTrigger({ children, className = '', ...props }) {
  return <button className={`fc-tabs-trigger ${className}`.trim()} {...props}>{children}</button>;
}

export function TabsContent({ children, className = '', ...props }) {
  return <div className={`fc-tabs-content ${className}`.trim()} {...props}>{children}</div>;
}

export default Tabs;
