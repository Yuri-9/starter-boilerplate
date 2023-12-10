import { useRef } from "react";
import { useDrop } from "react-dnd";

import { ItemTypes } from "constants/DragDropConstant.js";

const Board = ({ onAddItem, onMoveItem, children, className }) => {
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
      className={className}
    >
      {children}
    </div>
  );
};
export default Board;
