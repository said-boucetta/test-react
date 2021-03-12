import { useState } from "react";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [array, setArray] = useState([]);
  const [input, setInput] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input) {
            setArray([...array, { id: uuidv4(), task: input }]);
            setInput("");
          }
        }}
      >
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button>Add</button>
      </form>
      <List data={array} />
    </div>
  );
}

export default App;
