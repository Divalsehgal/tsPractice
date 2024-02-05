import {PersonList} from "./personList"
function index() {
  const nameList = [
    {
      firstName: "John",
      lastName: "lenon",
    },
    {
      firstName: "Jane",
      lastName: "sing",
    },
    {
      firstName: "Mary",
      lastName: "janess",
    },
  ];
  return (
    <div>
      <PersonList
        styles={{
          border: "1px solid gray",
          padding: "0.5rem",
          display: "flex",
        }}
        nameList={nameList}
      />


    </div>
  );
}

export default index;
