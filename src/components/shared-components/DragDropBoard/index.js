import { useCallback } from "react";
import "./style.scss";

import DragItem from "./DragItem/index.js";
import Board from "./Board/index.js";
import { useDispatch, useSelector } from "react-redux";
import { addDragItemAction, moveDragItemAction, selectDragItemAction } from "redux/actions/DragTables";

const DragDropBoard = ({ showGrid }) => {
  const dispatch = useDispatch();
  const { itemsOnBoard, selectedItemId } = useSelector((state) => state.dragTables);

  const handleMoveItem = useCallback(
    ({ id, x, y }) => {
      dispatch(moveDragItemAction({ id, x, y }));
    },
    [dispatch]
  );

  const handleAddItem = useCallback(
    (item) => {
      dispatch(addDragItemAction(item));
    },
    [dispatch]
  );
  const handleSelectDragItem = useCallback(
    (id) => {
      dispatch(selectDragItemAction(id));
    },
    [dispatch]
  );

  return (
    <Board
      itemsOnBoard={itemsOnBoard}
      onAddItem={handleAddItem}
      onMoveItem={handleMoveItem}
      className={`drag-drop-board ${showGrid ? "grid" : ""}`}
    >
      {Object.keys(itemsOnBoard).map((key) => {
        const { id, image, title } = itemsOnBoard[key];
        return (
          <DragItem
            key={key}
            item={itemsOnBoard[key]}
            className={`drag-item ${id === selectedItemId ? "active" : ""}`}
            hideSourceOnDrag
            onClick={handleSelectDragItem}
          >
            <img src={image} alt={title} className="drag-item_image" />
          </DragItem>
        );
      })}
    </Board>
  );
};
export default DragDropBoard;
