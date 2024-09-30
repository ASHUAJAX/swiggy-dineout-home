import { useEffect, useState } from "react";
import "./App.scss";
import AppRoutes from "./routes/Index";
import countapi from "countapi-js";

function App() {
  const [count, setCount] = useState(0);
  const mydomain = 'https://swiggy-dineout-home.vercel.app'

  useEffect(() => {
    countapi
      .hit(mydomain, "page-visits")
      .then((result) => {
        setCount(result.value);
      });
  }, []);
  console.log("No. of visitors : ",count);
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
