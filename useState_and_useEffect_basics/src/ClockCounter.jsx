import { useEffect, useState } from "react";

export function Clock() {
  const [count, setCount] = useState(0);
  const interval = 1000;

  //   function increaseCounter() {
  //     setCount(count + 1);
  //   }
  function increaseCounter() {
    setCount((currValue) => currValue + 1); // Now this is wrriten in oder to increase the count every time
  }
  // setInterval(increaseCounter, interval);  // this will create many clock as the clock function will run every time the state variable changes and it re-render.

  // so therefore we write it in the use effect block or function

  useEffect(()=> {
    setInterval(increaseCounter, 1000);
  }, []); // here empty array denotes the dependencies. Now this will mount only one time not everytime when rerendering happens, but it can re-render depending on the dependencies array

//   useEffect(
//     function () {
//       console.log("Count Changes to ", count);
//     },
//     [count]
//   ); // it will re-render everytime when count var changes

  //   setInterval(() => {    //  ALTERNATIVE METHOND OF WRITING INTERVAL FUNCTION USING ARROW FUNCTION
  //     setCount(count + 1);
  //   }, interval);

  return <div>{count}</div>;
}
