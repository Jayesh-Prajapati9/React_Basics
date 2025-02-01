import { useState } from "react";

import { PostComponent } from "./Post";


function App() {
  return (

    <div style={{ backgroundColor: "#b2bec3", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PostComponent
          name={"100xDevs"}
          subtitle={"25,000 Follwers"}
          time={"2m"}
          image={
            "https://plus.unsplash.com/premium_photo-1736782964993-911e37d4657e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          description={
            "Want to know how they won big ? Check out how these folks won $6000 in prizepool"
          }
        ></PostComponent>
        <PostComponent
          name={"John"}
          subtitle={"9,000 Follwers"}
          time={"20m"}
          image={
            "https://plus.unsplash.com/premium_photo-1736782964993-911e37d4657e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          description={"Follow me for more content on Web dev."}
        ></PostComponent>
        <PostComponent
          name={"Raman"}
          subtitle={"Promoted"}
          image={
            "https://plus.unsplash.com/premium_photo-1736782964993-911e37d4657e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          description={"Hey check this latest docs of React native"}
        ></PostComponent>
      </div>
      <ToggleButtonMessage />
    </div>
  )
}

function ToggleButtonMessage() {
  const [isVisible, setVisible] = useState(true);
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    gap: 15,
  };
  return (
    <div style={style}>
      <button
        type="button"
        onClick={() => {
          setVisible(!isVisible);
        }}
      >
        Add new post
      </button>
      <div>{!isVisible ? <div>Your post has been added</div> : null}</div>
    </div>
  );
}

export default App;
