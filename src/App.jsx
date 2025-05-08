import { useState } from "react";
import Nav from "./components/nav/Nav";
import Homepage from "./pages/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
<Nav></Nav>
    <Homepage></Homepage>
    </>
  );
}

export default App;
