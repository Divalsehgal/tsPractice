type ListProps<T> = Readonly<{
  items: T[];
  onClick: (value: T) => void;
}>;

const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item,id) => {
        return (
          <div key={id} onClick={() => onClick(item)}/>
        );
      })}
    </div>
  );
};

export default List;
