import "./DisplayComponent.css";

export default function DisplayComponent(props) {
  const { infor, onDelete } = props;

  return (
    <>
      <div className={infor.age < 18 ? "red" : "blue"}>
        <div>User name is: {infor.name}</div>
        <div>User Age: {infor.age}</div>
      </div>

      <button type="button" onClick={() => onDelete(infor.id)}>
        Delete
      </button>
      <hr />
    </>
  );
}
