import { Card, Tabs } from "antd";
import "./style.scss";

import DragItem from "components/shared-components/DragDropBoard/DragItem";
import { dragTablesList } from "../dragElementsData";

const { TabPane } = Tabs;

const ItemsList = () => {
  const renderDragTableList = () => (
    <div className="drag-list_container">
      {dragTablesList.map((item) => (
        <div className="card" key={item.typeId}>
          <div className="image-container">
            <DragItem item={item} isNew className="drag_item">
              <img src={item.image} alt={item.title} className="image" height={120} />
            </DragItem>
          </div>
          <p className="title">{item.title}</p>
        </div>
      ))}
    </div>
  );

  return (
    <Card>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Новые столы" key="1">
          {renderDragTableList()}
        </TabPane>
        <TabPane tab="Новые элементы" key="2">
          {renderDragTableList()}
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default ItemsList;
