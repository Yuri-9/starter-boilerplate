import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";
import "./style.scss";

import DragItem from "./DragItem/index.js";
import Board from "./Board/index.js";

const DragDropBoard = ({ showGrid }) => {
  const [itemsOnBoard, setItemsOnBoard] = useState([]);

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
    <Board
      itemsOnBoard={itemsOnBoard}
      onAddItem={handleAddItem}
      onMoveItem={handleMoveItem}
      className={`drag-drop-board ${showGrid ? "grid" : ""}`}
    >
      {Object.keys(itemsOnBoard).map((key) => {
        const { image, title } = itemsOnBoard[key];
        return (
          <DragItem key={key} item={itemsOnBoard[key]} className="drag-item" hideSourceOnDrag>
            <img src={image} alt={title} className="drag-item_image" />
          </DragItem>
        );
      })}
    </Board>
  );
};
export default DragDropBoard;
