import React from "react";

interface InputProps {
  secretWord: string;
}

const Input = ({ secretWord }: InputProps) => {
  return <div data-test="component-input" />;
};

export default Input;
