import { ItemTypes } from "constants/DragDropConstant";
import { useDrag } from "react-dnd";

const DragItem = ({ item, isNew = false, children, className, hideSourceOnDrag = false, onClick = () => {} }) => {
  const { id, x, y, width, height } = item;
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.TABLE,
      item: { ...item, isNew },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, x, y]
  );

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }

  return (
    <div ref={drag} className={className} style={{ left: x, top: y, width, height }} onClick={() => onClick(id)}>
      {children}
    </div>
  );
};

export default DragItem;
