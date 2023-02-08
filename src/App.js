import "./styles.css";
import { useEffect, useState } from "react";
import Parent from "./Parent";
export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [s, setS] = useState("");
  const hi = (e, data) => {
    console.log(e);
    console.log(data);
    setIsLoading(!isLoading);
    setS(e.target.value);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input value={s} onChange={(e) => hi(e, "dhdh")} />
      <button
        className={`btn ${isLoading ? `isloading` : null}`}
        onClick={(e) => hi(e, "hjdhjd")}
      >
        hellloooooo
      </button>
      <Parent hiParent={hi} propLoad={isLoading} />
    </div>
  );
}
