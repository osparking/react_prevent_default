import React, { useState } from "react";

const INITIAL_LIST = ["리액트 학습", "자바스크립트", "리액트-부트스트랩"];

const ListWithAddItem = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState(INITIAL_LIST);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (value.trim() !== "") {
      setList(list.concat(value));
    }
    setValue("");
    event.preventDefault();
  };
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          style={{ marginLeft: "40px" }}
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ListWithAddItem;
