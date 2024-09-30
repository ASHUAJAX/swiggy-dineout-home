import { useEffect, useState } from "react";
import "./App.scss";
import AppRoutes from "./routes/Index";

function App() {
  const [count, setCount] = useState(0);
  const myDomain = 'swiggy-dineout-home.vercel.app';

  useEffect(() => {
    // HitCounter API call
    fetch(`https://api.hitcounter.me/hit/${myDomain}/page-visits`)
      .then((response) => response.json())
      .then((data) => {
        setCount(data.hits); // Assuming the API returns hits in this format
      })
      .catch((error) => {
        console.error("Error fetching visit count:", error);
      });
  }, []);

  console.log("No. of visitors:", count);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
