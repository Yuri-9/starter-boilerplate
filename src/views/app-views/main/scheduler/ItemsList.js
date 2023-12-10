import React from "react";
import { Card, Tabs } from "antd";
import DragItem from "components/shared-components/DragDropBoard/DragItem";
import { dragTablesList } from "./dragElementsData";

const { TabPane } = Tabs;

const styles = {
  container: {
    display: "flex",
    overflowY: "auto",
    gap: "20px",
    padding: "10px 0",
  },
  card: {
    height: "fit-content",
    flex: "0 0 120px",
    overflow: "hidden",
  },
  imageContainer: {
    height: "120px",
    backgroundColor: "black",
    borderRadius: "10px",
    cursor: "move",
  },
  drag_item: {
    height: "100%",
    width: "fit-content",
    margin: "0 auto",
  },
  image: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
  },
  title: {
    width: "100%",
    height: "",
    textAlign: "center",
  },
};

const renderDragTableList = () => (
  <div style={styles.container} className="container">
    {dragTablesList.map(({ id, title, image }) => (
      <div style={styles.card} key={id}>
        <div style={styles.imageContainer}>
          <DragItem id={id} title={title} typeId={id} isNew style={styles.drag_item}>
            <img src={image} alt={title} style={styles.image} height={120} />
          </DragItem>
        </div>
        <p style={styles.title}>{title}</p>
      </div>
    ))}
  </div>
);

const ItemsList = () => (
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

export default ItemsList;
