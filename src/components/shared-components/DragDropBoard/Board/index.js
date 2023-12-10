import { useRef } from "react";
import { useDrop } from "react-dnd";

import { ItemTypes } from "constants/DragDropConstant.js";

const styles = {
  width: 600,
  height: 600,
  border: "1px solid black",
  position: "relative",
};
const Board = ({ onAddItem, onMoveItem, children }) => {
  const ref = useRef();

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.TABLE,
      drop(item, monitor) {
        if (item.isNew) {
          const offset = monitor.getSourceClientOffset();
          const dropTargetContainerXY = ref.current.getBoundingClientRect();
          const x = offset.x - dropTargetContainerXY.x;
          const y = offset.y - dropTargetContainerXY.y;
          onAddItem({ ...item, x, y });
        } else {
          const delta = monitor.getDifferenceFromInitialOffset();
          const x = Math.round(item.x + delta.x);
          const y = Math.round(item.y + delta.y);
          onMoveItem({ ...item, x, y });
        }
      },
    }),
    [onAddItem, onMoveItem]
  );

  return (
    <div
      ref={(elem) => {
        ref.current = elem;
        drop(ref);
      }}
      style={styles}
    >
      {children}
    </div>
  );
};
export default Board;
