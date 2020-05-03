import React, { useState, useEffect } from "react";
import axios from "axios";

const Fib = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [tindex, setIndex] = useState("");

  const fetchValues = async () => {
    const tvalues = await axios.get("/api/values/current");

    setValues(tvalues.data);
  };

  const fectchIndexes = async () => {
    const indexes = await axios.get("/api/values/all");
    setSeenIndexes(indexes.data);
  };

  const renderSeenIndexes = () => {
    return seenIndexes.map(({ number }) => number).join(", ");
  };

  const renderValues = () => {
    const entries = [];

    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {values[key]}
        </div>
      );
    }

    return entries;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("/api/values", {
      index: tindex,
    });

    setIndex("");
  };

  useEffect(() => {
    fetchValues();
    fectchIndexes();
  }, [tindex]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input
          value={tindex}
          onChange={(event) => setIndex(event.target.value)}
        />
        <button>Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {renderSeenIndexes()}

      <h3>Calculated values:</h3>
      {renderValues()}
    </div>
  );
};

export default Fib;
