import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Row, Col, Card, Switch } from "antd";
import { useState } from "react";
import "./style.scss";

import DragDropBoard from "components/shared-components/DragDropBoard";
import ItemsList from "./ItemsList";
import Flex from "components/shared-components/Flex";
import ControlPanel from "./ControlPanel";

const Scheduler = () => {
  const [showGrid, setShowGrid] = useState(false);
  return (
    <DndProvider backend={HTML5Backend}>
      <Row gutter={16} wrap={false}>
        <Col flex="auto">
          <ItemsList />
          <ControlPanel />
        </Col>
        <Col flex="none">
          <Card
            className="drag-drop-card"
            title={
              <Flex mobileFlex={false} justifyContent="between" alignItems="center">
                <h2 style={{ color: "white" }}>Карта заведения</h2>
                <div>
                  <span className="mr-2">Сетка</span>
                  <Switch onChange={() => setShowGrid((prev) => !prev)} checked={showGrid} />
                </div>
              </Flex>
            }
          >
            <DragDropBoard showGrid={showGrid} />
          </Card>
        </Col>
      </Row>
    </DndProvider>
  );
};

export default Scheduler;
