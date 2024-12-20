import { useState } from "react";
import ListWithAddItem from "./components/ListWithAddItem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ListWithAddItem />
      </div>
    </>
  );
}

export default App;
