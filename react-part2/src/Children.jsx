import { useState } from "react";

import "./App.css";

function Children() {
    return (
        <>
            <div style={{ display: "flex" }}>
          <Card children={"Helloo"}></Card>
          
          {/* This is another way to give the children value */}
          {/* We use Card component like an Wrapper for Webpage and can give different value to the card component. */}

          <Card>
            <div>
              Enter Your Name 
              <br />    
              <input type="text"/>
          </div>
          </Card>
            </div>
        </>
    );
}

function Card({ children }) {
    const style = {
        backgroundColor: "#636e72",
        display: "flex",
        margin: 10,
        padding: 10 ,
        borderRadius: 10,
    };

    return <div style={style}>{children}</div>;
}

export default Children;
