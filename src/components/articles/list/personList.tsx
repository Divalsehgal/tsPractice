import { Name } from "../../Person.types";
type PersonListProps = {
  nameList: Name[];
  styles: React.CSSProperties;
};
export function PersonList(props: PersonListProps) {
  return (
    <div style={props?.styles}>
      {props.nameList.map((n, i) => {
        return (
          <div key={`${n?.firstName}-${i}`}>
            <p>{n.firstName}</p>
            <h5>{n.lastName}</h5>
          </div>
        );
      })}
    </div>
  );
}

