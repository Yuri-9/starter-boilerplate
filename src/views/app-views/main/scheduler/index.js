import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Row, Col } from "antd";

import ItemsList from "./ItemsList";
import DragDropBoard from "components/shared-components/DragDropBoard";

// import ProductListData from "assets/data/product-list.data.json";

const Scheduler = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Row gutter={16} wrap={false}>
        <Col flex="auto">
          <ItemsList />
        </Col>
        <Col flex="none">
          <DragDropBoard />
        </Col>
      </Row>
    </DndProvider>
  );
};

export default Scheduler;
