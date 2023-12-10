import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";

import DragItem from "./DragItem/index.js";
import Board from "./Board/index.js";
import { Card } from "antd";

const itemStyles = {
  position: "absolute",
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  cursor: "move",
  top: 0,
  left: 0,
};

const DragDropBoard = () => {
  const [itemsOnBoard, setItemsOnBoard] = useState({
    a: { id: "a", x: 80, y: 20, typeId: "aNew", title: "Drag A" },
    b: { id: "b", x: 20, y: 180, typeId: "bNew", title: "Drag B" },
    c: { id: "b", x: 20, y: 280, typeId: "bNew", title: "Drag C" },
  });

  const [newItems, setNewItems] = useState([
    { typeId: "aNew", x: 30, y: 20, title: "Drag D " },
    { typeId: "bNew", x: 100, y: 120, title: "Drag E " },
    { typeId: "cNew", x: 140, y: 220, title: "Drag F " },
  ]);

  console.log("itemsOnBoard", itemsOnBoard);

  const handleMoveItem = useCallback(
    ({ id, x, y }) => {
      setItemsOnBoard((prev) => {
        const currentItem = { ...prev[id], x, y };
        return { ...prev, [id]: currentItem };
      });
    },
    [setItemsOnBoard]
  );

  const handleAddItem = useCallback((item) => {
    const newItem = { ...item, id: uuid() };
    setItemsOnBoard((prev) => ({ ...prev, [newItem.id]: newItem }));
  }, []);

  return (
    <Card title="Карта заведения">
      <Board itemsOnBoard={itemsOnBoard} onAddItem={handleAddItem} onMoveItem={handleMoveItem}>
        {Object.keys(itemsOnBoard).map((key) => {
          const { x, y, typeId, title } = itemsOnBoard[key];
          return (
            <DragItem key={key} id={key} x={x} y={y} typeId={typeId} style={itemStyles}>
              {title}
            </DragItem>
          );
        })}
      </Board>
    </Card>
  );
};
export default DragDropBoard;
