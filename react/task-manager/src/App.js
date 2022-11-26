import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import { useState } from "react";
import Rating from "./Rating";
import Names from "./Names";
import FormDemo from "./FormDemo";
function App() {
  const [ratingValue, setRatingValue] = useState(0);

  const [items, setItem] = useState(["Apple", "Samsung", "HTC", "Nokia"]);

  //function that will delete an Item
  function deleteItem(itemName) {
    //need to implement the function
    let newItems = [];
    for (const item of items) {
      if (itemName != item) {
        newItems.push(item);
      }
    }
    setItem(newItems);
  }

  return (
    <div className="App">
      {/* <Names items={items} deleteItem={deleteItem} /> */}

      {/* <Rating ratingChanged={setRatingValue}/>

      <h1>{ratingValue}</h1> */}

      <FormDemo/>
    </div>
  );
}

export default App;
