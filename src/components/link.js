import React from 'react';

const Link = (props) => {
  return (
    // <a {...props} href={props.to} target="_blank" rel="noopener noreferrer">{props.text}</a>
    <a {...props} href={props.to} target={props.target}>{props.text}</a>
  );
}

export default Link;
