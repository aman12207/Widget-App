import React,{useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search"
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Selectpath from "./components/Route";
import Header from "./components/Header"

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected,setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Selectpath path="/">
        <Accordion items={items} />
      </Selectpath>

      <Selectpath path="/dropdown">
        <Dropdown 
        label="Select a Color"
        selected={selected}
        onChangeSelected={setSelected}
        options={options} 
        />
      </Selectpath>

      <Selectpath path="/search">
        <Search/>
      </Selectpath>
      
      <Selectpath path="/translate">
        <Translate/>
      </Selectpath>
    </div>
  );
};
export default App;
