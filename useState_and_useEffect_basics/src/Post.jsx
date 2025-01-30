const style = {
  width: 380,
  backgroundColor: "white",
  borderColor: "gray",
  borderRadius: 15,
  padding: 10,
  margin: 10,
};

export function PostComponent({ name, subtitle, time, image ,description}) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={image}
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
          <div>{subtitle}</div>
          {time !== undefined ? <div>{time}</div> : null}
        </div>
      </div>
      <div style={{marginTop:10}}>
        {description}
      </div>
    </div>
  );
}
