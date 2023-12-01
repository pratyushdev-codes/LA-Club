import { Fragment } from "react";

function ListGroup() {
  let items = ["NY", "San", "TOk", "Paris"];
  items = [];

  const getMessage = () => {
    return;
  };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
