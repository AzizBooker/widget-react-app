import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend javascript framework",
  },
  {
    title: "Why use react ?",
    content: "React is a favorite JS libary among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use react by using components",
  },
];

export default () => {
    
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};