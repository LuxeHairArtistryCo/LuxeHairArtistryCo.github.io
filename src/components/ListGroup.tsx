import { ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
  onSelectItem: (item: string) => void;
  listItems: any[];
  enableOnClick: boolean;
}

function ListGroup({
  children,
  listItems,
  enableOnClick,
  onSelectItem,
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <ul className="list-group">
        {listItems.map((listItem, listIndex) => (
          <li
            className={
              "list-group-item-" +
              (enableOnClick && selectedIndex === listIndex && "active")
            }
            key={listItem.name}
            onClick={() => {
              if (enableOnClick) {
                setSelectedIndex(listIndex);
                onSelectItem(listItem);
              }
            }}
          ></li>
        ))}
      </ul>
      {children}
    </>
  );
}

export default ListGroup;
