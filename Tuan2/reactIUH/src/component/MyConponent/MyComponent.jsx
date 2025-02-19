import { useState } from "react";
import DisplayList from "../DisplayList/DisplayList";

export default function MyComponent() {
  const [inforList, setInforList] = useState([
    { id: 1, name: "Hon", age: 25 },
    { id: 2, name: "Hieu", age: 30 },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [show, setShow] = useState(true);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setInforList((prev) => [{ id: Date.now(), name: name, age: age }, ...prev]);
    setName("");
    setAge("");
  };

  const onDelete = (id) => {
    setInforList((prev) => prev.filter((item) => item.id !== id));
  };

  const onClickShow = () => {
    setShow(!show);
  };

  return (
    <>
      Hello World
      <div
        style={{
          color: "red",
          fontWeight: 600,
        }}
      >
        <div>My name is: {name}</div>
        <div>Age: {age}</div>
        <div>Address: IUH</div>

        <form onSubmit={onSubmit}>
          <div>
            Your Name:
            <input type="text" onChange={onChangeName} value={name} required />
          </div>
          <div>
            Your Age:
            <input type="number" onChange={onChangeAge} value={age} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <button type="button" onClick={onClickShow}>
        {show ? "Hide List" : "Show List"}
      </button>
      {show && <DisplayList inforList={inforList} onDelete={onDelete} />}
    </>
  );
}
