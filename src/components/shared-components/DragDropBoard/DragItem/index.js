import { ItemTypes } from "constants/DragDropConstant";
import { useDrag } from "react-dnd";

const DragItem = ({ id, x = 0, y = 0, title, typeId, isNew = false, children, style }) => {
  const [, drag] = useDrag(
    () => ({
      type: ItemTypes.TABLE,
      item: { id, x, y, typeId, title, isNew },
    }),
    [id, x, y]
  );

  return (
    <div ref={drag} style={{ ...style, left: x, top: y }}>
      {children}
    </div>
  );
};

export default DragItem;
