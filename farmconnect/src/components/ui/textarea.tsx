import React from 'react';

export function Textarea(props) {
  return <textarea className={`fc-textarea ${props.className || ''}`.trim()} {...props} />;
}

export default Textarea;
