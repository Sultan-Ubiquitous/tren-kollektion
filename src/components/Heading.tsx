import React from 'react';

interface HeadingProps {
  text: string;
}

export default function Heading({ text }: HeadingProps) {
  return (
    <h1 className='font-semibold text-5xl p-5 text-fn-color'>{text}</h1>
  );
}