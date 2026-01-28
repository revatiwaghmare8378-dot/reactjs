import { useEffect, useOptimistic, useState } from "react";

export default function UseOptimisticHook() {
  const [name, setName] = useState([]);
  const [skills, setSkills] = useState([]);
  const [optimisticsSkills, setOptimisticsSkills] = useOptimistic(skills);

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = async () => {
    try {
      const response = await fetch("http://localhost:3000/skills");
      const data = await response.json();
      setSkills(data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const addSkill = async (event) => {
    if (!name.trim()) return;

    const newSkill = { id: Date.now(), name };
    setOptimisticsSkills((prev) => [...prev, newSkill]);
    try {
      const res = await fetch("http://localhost:3000/skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSkill),
      });

      await delay(5000); // Simulating network delay

      if (!res.ok) throw new Error("Failed");

      setSkills((prev) => [...prev, newSkill]);
      setName("");
    } catch (err) {
      alert("Failed to save skill ❌");
      console.error(err);
    }
  };
  return (
    <div>
      <h1>Use Optimistic Hook</h1>
      <form action={addSkill}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Skill"
        />
        <button>Add</button>
        {/* <button onClick={addSkill}>Add</button> */}
      </form>

      {optimisticsSkills.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
}
