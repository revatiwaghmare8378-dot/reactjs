function InlineStyles(params) {
  const cardStyle = {
    width: "200px",
    border: "1px solid #f0e8e8ff",
    boxShadow: "1px 2px 3px 0px #767171ff",
    margin: "10px",
  };
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        display: "flex", // Flexbox layout
        // justifyContent: "center", // Horizontally center
        alignItems: "center", // Vertically center
        height: "auto", // Full viewport height
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "red" }}>Inline Style in React JS</h1>
      <div
        style={{
          display: "flex", // Flexbox layout
          flexWrap: "wrap", // Allows items to move to the next line, creating a multi-line layout
          //   justifyContent: "space-between", // Horizontally center
          //   alignItems: "center", // Vertically center
          //   flexDirection: "row",
        }}
      >
        <div style={cardStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatYBHitxoZnekWXcOXi5b9JJ40lu2yKeZag&s"
            alt="Image not Found"
            style={{ width: "200px" }}
          />
          <div style={{ padding: "5px" }}>
            <h4 style={{ color: "#000000ff" }}>Jack Sparrow</h4>
            <p style={{ color: "#000000ff" }}>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatYBHitxoZnekWXcOXi5b9JJ40lu2yKeZag&s"
            alt="Image not Found"
            style={{ width: "200px" }}
          />
          <div style={{ padding: "5px" }}>
            <h4 style={{ color: "#000000ff" }}>Jack Sparrow</h4>
            <p style={{ color: "#000000ff" }}>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatYBHitxoZnekWXcOXi5b9JJ40lu2yKeZag&s"
            alt="Image not Found"
            style={{ width: "200px" }}
          />
          <div style={{ padding: "5px" }}>
            <h4 style={{ color: "#000000ff" }}>Jack Sparrow</h4>
            <p style={{ color: "#000000ff" }}>Software Developer</p>
          </div>
        </div>{" "}
        <div style={cardStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatYBHitxoZnekWXcOXi5b9JJ40lu2yKeZag&s"
            alt="Image not Found"
            style={{ width: "200px" }}
          />
          <div style={{ padding: "5px" }}>
            <h4 style={{ color: "#000000ff" }}>Jack Sparrow</h4>
            <p style={{ color: "#000000ff" }}>Software Developer</p>
          </div>
        </div>{" "}
        <div style={cardStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatYBHitxoZnekWXcOXi5b9JJ40lu2yKeZag&s"
            alt="Image not Found"
            style={{ width: "200px" }}
          />
          <div style={{ padding: "5px" }}>
            <h4 style={{ color: "#000000ff" }}>Jack Sparrow</h4>
            <p style={{ color: "#000000ff" }}>Software Developer</p>
          </div>
        </div>{" "}
        <div style={cardStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatYBHitxoZnekWXcOXi5b9JJ40lu2yKeZag&s"
            alt="Image not Found"
            style={{ width: "200px" }}
          />
          <div style={{ padding: "5px" }}>
            <h4 style={{ color: "#000000ff" }}>Jack Sparrow</h4>
            <p style={{ color: "#000000ff" }}>Software Developer</p>
          </div>
        </div>{" "}
        <div style={cardStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatYBHitxoZnekWXcOXi5b9JJ40lu2yKeZag&s"
            alt="Image not Found"
            style={{ width: "200px" }}
          />
          <div style={{ padding: "5px" }}>
            <h4 style={{ color: "#000000ff" }}>Jack Sparrow</h4>
            <p style={{ color: "#000000ff" }}>Software Developer</p>
          </div>
        </div>{" "}
        <div style={cardStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatYBHitxoZnekWXcOXi5b9JJ40lu2yKeZag&s"
            alt="Image not Found"
            style={{ width: "200px" }}
          />
          <div style={{ padding: "5px" }}>
            <h4 style={{ color: "#000000ff" }}>Jack Sparrow</h4>
            <p style={{ color: "#000000ff" }}>Software Developer</p>
          </div>
        </div>{" "}
        <div style={cardStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatYBHitxoZnekWXcOXi5b9JJ40lu2yKeZag&s"
            alt="Image not Found"
            style={{ width: "200px" }}
          />
          <div style={{ padding: "5px" }}>
            <h4 style={{ color: "#000000ff" }}>Jack Sparrow</h4>
            <p style={{ color: "#000000ff" }}>Software Developer</p>
          </div>
        </div>{" "}
        <div style={cardStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatYBHitxoZnekWXcOXi5b9JJ40lu2yKeZag&s"
            alt="Image not Found"
            style={{ width: "200px" }}
          />
          <div style={{ padding: "5px" }}>
            <h4 style={{ color: "#000000ff" }}>Jack Sparrow</h4>
            <p style={{ color: "#000000ff" }}>Software Developer</p>
          </div>
        </div>{" "}
        <div style={cardStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatYBHitxoZnekWXcOXi5b9JJ40lu2yKeZag&s"
            alt="Image not Found"
            style={{ width: "200px" }}
          />
          <div style={{ padding: "5px" }}>
            <h4 style={{ color: "#000000ff" }}>Jack Sparrow</h4>
            <p style={{ color: "#000000ff" }}>Software Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InlineStyles;
