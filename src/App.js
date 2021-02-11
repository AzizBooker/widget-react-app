import React,{useState} from "react";
import Accordion from "./components/Accordion";
import Search from './components/Search'
import Dropdown from './components/Dropdown'
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

const options=[
  {
    label:'The Color Red',
    value:'red'
  },
  {
    label:'The Color Green',
    value:'green'
  },
  {
    label:'A Shade of Blue',
    value:'blue'
  }
]

export default () => {
  
  const [selected,setSelected]=useState(options[0])
  return (
    <div>
      
      <Dropdown 
      options={options} 
      selected={selected}
      onSelectedChange={setSelected}
      />
      
    </div>
  );
};