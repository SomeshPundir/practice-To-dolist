import { useState } from "react";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState([]);
const removeTask=(index)=>{
const updatedList=[...listItems]
updatedList.splice(index,1);
setListItems(updatedList);
}
console.log(listItems)

  function handleSubmit(e) {
    e.preventDefault();
    const data= inputValue;
    setListItems([...listItems, { text: data, isDone: false }]);
    setInputValue('');
  }

  function handleChange(event) {
    const data = event.target.value;
    console.log(inputValue);
    setInputValue(data);
  }

  const toggleDone = (index) => {
    const updatedList = [...listItems];
    updatedList[index].isDone = !updatedList[index].isDone;
    setListItems(updatedList);
  }
  return (
    <>
      <h1>to do list </h1>
      <ul>
      <li className="liborder">add to do</li>
        {listItems.map((item, index) =>(
          <div className="wrapper" key={index}>
          <li className={`liborder ${item.isDone ? "completed" : ""}`} key={index}>{item.text}</li>
<button onClick={()=>{removeTask(index)}}>remove</button>
<button onClick={()=>{toggleDone(index)}}>{item.isDone?'undergoing':'completed'}</button>
          </div>
        ))}
      </ul>

      <form
        action="submit"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          value={inputValue}
          onChange={(event) => {
            handleChange(event);
          }}
          type="text"
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
