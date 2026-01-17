import { useState } from "react";

const CollageInfo = ({ data }) => {
  const [hoverCard, setHoverCard] = useState(false);
  const [hoverItemIndex, setHoverItemIndex] = useState(null);

  const listItems = [
    { label: "City", value: data.city },
    { label: "Website", value: data.website },
  ];

  const getListItemStyle = (index) => ({
    background: hoverItemIndex === index ? "#d1e7dd" : "#ffffff",
    margin: "10px 0",
    padding: "12px 15px",
    borderRadius: "10px",
    boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
    color: "#495057",
    fontSize: "1rem",
    transition: "background 0.3s",
  });

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "20px auto",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: hoverCard
          ? "0 15px 30px rgba(0,0,0,0.3)"
          : "0 10px 20px rgba(0,0,0,0.2)",
        background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        transition: "transform 0.3s, box-shadow 0.3s",
        transform: hoverCard ? "scale(1.03)" : "scale(1)",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHoverCard(true)}
      onMouseLeave={() => setHoverCard(false)}
    >
      <h1
        style={{
          color: "#343a40",
          marginBottom: "20px",
          textAlign: "center",
          fontSize: "1.8rem",
          letterSpacing: "1px",
        }}
      >
        Name: {data.name}
      </h1>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {listItems.map((item, index) => (
          <li
            key={index}
            style={getListItemStyle(index)}
            onMouseEnter={() => setHoverItemIndex(index)}
            onMouseLeave={() => setHoverItemIndex(null)}
          >
            <h3 style={{ margin: 0 }}>
              {item.label}: {item.value}
            </h3>
          </li>
        ))}

        {/* Students Section */}
        <li style={{ marginTop: "20px" }}>
          <h3 style={{ marginBottom: "10px", color: "#343a40" }}>Students:</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {data.students.map((student, index) => (
              <li
                key={index}
                style={{
                  background: "#ffeb3b",
                  margin: "8px 0",
                  padding: "12px 18px",
                  borderRadius: "12px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
                  fontSize: "1rem",
                  fontWeight: "500",
                  color: "#212121",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#ff9800";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(255,152,0,0.7), 0 0 40px rgba(255,152,0,0.5)";
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ffeb3b";
                  e.currentTarget.style.color = "#212121";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0,0,0,0.15)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <strong>{student.name}</strong> | Age: {student.age} | Email:{" "}
                {student.email}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default CollageInfo;
