import React from 'react';

export function Table({ children, className = '', ...props }) {
  return <table className={`fc-table ${className}`.trim()} {...props}>{children}</table>;
}

export function TableHeader({ children, className = '', ...props }) {
  return <thead className={`fc-table-header ${className}`.trim()} {...props}>{children}</thead>;
}

export function TableBody({ children, className = '', ...props }) {
  return <tbody className={`fc-table-body ${className}`.trim()} {...props}>{children}</tbody>;
}

export function TableRow({ children, className = '', ...props }) {
  return <tr className={`fc-table-row ${className}`.trim()} {...props}>{children}</tr>;
}

export function TableHead({ children, className = '', ...props }) {
  return <th className={`fc-table-head ${className}`.trim()} {...props}>{children}</th>;
}

export function TableCell({ children, className = '', ...props }) {
  return <td className={`fc-table-cell ${className}`.trim()} {...props}>{children}</td>;
}

export default Table;
