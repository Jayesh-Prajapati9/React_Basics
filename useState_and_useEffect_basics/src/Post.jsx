const style = {
  width: 380,
  backgroundColor: "white",
  borderColor: "gray",
  borderRadius: 15,
  padding: 10,
  margin: 10,
};

export function PostComponent(props) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={props.image}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            marginTop: 5,
            marginRight: 5,
          }}
        />
        <div style={{ gap: 2 }}>
          <b style={{ fontSize: 25 }}>{name}</b>
          <div>{props.subtitle}</div>
          {props.time !== undefined ? <div>{props.time}</div> : null}
        </div>
      </div>
      <div style={{marginTop:10}}>
        {props.description}
      </div>
    </div>
  );
}
