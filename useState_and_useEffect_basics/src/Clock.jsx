import { useEffect, useState } from "react";

function Get_Clock() {
    const [count, setCount] = useState(1);
    const interval = 1000;

    //   function increaseCounter() {
    //     setCount(count + 1);
    //   }
    function increaseCounter() {
        //setCount((currValue) => currValue + 1); // Now this is wrriten in oder to increase the count every time
    }
    // setInterval(increaseCounter, interval);  // this will create many clock as the clock function will run every time the state variable changes and it re-render.

    // so therefore we write it in the use effect block or function

    useEffect(() => {
        setInterval(() => {
            setCount((currValue) => currValue + 1);
        }, interval);
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

    return <div>{count} Seconds on Clock</div>;
}

function Clock() {
    const [timer, setTimer] = useState(true);

    useEffect(() => {
        let clock = setInterval(() => {
            setTimer(currValue=>!currValue)
        }, 5000);
        return () => {
            clearInterval(clock);
        }
    }, []);

    return (
        <div
            style={{
                backgroundColor: "#b2bec3",
                height: "100vh",
            }}
        >
            {timer?<Get_Clock />:"Timer Stop"}
        </div>
    );
}

export default Clock;
