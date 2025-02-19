import DisplayComponent from "../DisplayComponent/DisplayComponent";

export default function DisplayList(props) {
  const { inforList, onDelete } = props;

  return (
    <>
      {inforList.map((infor) => (
        <DisplayComponent infor={infor} key={infor.id} onDelete={onDelete} />
      ))}
    </>
  );
}
