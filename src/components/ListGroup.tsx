import { Children, ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
  onSelectItem: (item: string) => void;
  listItems: string[];
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
              "list-group-item-" + (selectedIndex === listIndex && "active")
            }
            key={listItem}
            onClick={() => {
              if (enableOnClick) {
                setSelectedIndex(listIndex);
                onSelectItem(listItem);
              }
            }}
          >
            {listItem}
          </li>
        ))}
      </ul>
      {children}
    </>
  );
}

export default ListGroup;
