import { Button, Card, Popconfirm, Upload, message } from "antd";
import { useDispatch, useSelector } from "react-redux";

import Flex from "components/shared-components/Flex";
import {
  addMultiDragItemsAction,
  deleteAllDragItemsAction,
  deleteSelectedDragItemAction,
} from "redux/actions/DragTables";

const ControlPanel = () => {
  const dispatch = useDispatch();
  const { itemsOnBoard, selectedItemId } = useSelector((state) => state.dragTables);

  const downloadConfiguration = (content, fileName, contentType) => {
    var a = document.createElement("a");
    var file = new Blob([JSON.stringify(content, null, 2)], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  };

  const handleUploadConfiguration = (file) => {
    const key = "uploadFile";
    const reader = new FileReader();
    try {
      reader.onload = (e) => {
        dispatch(addMultiDragItemsAction(JSON.parse(e.target.result)));
        message.success({ content: `${file.name} Загружен успешно!`, key, duration: 2 });
      };
      reader.onerror = (e) => {
        message.error({ content: `Произошла ошибка`, key, duration: 2 });
      };
      reader.readAsText(file);
    } catch (e) {
      message.error({ content: `Произошла ошибка`, key, duration: 2 });
    }

    // Prevent upload
    return false;
  };

  return (
    <>
      <Card title="Параметры элемента"></Card>
      <Card>
        <Flex className="f-w" flexDirection="column" justifyContent="between">
          <Upload beforeUpload={handleUploadConfiguration} accept=".txt" showUploadList={false} className="mb-2">
            <Button type="primary" className="w-100">
              Загрузить расстановку из файла
            </Button>
          </Upload>
          <Button
            type="primary"
            className="mb-2"
            onClick={() => downloadConfiguration(itemsOnBoard, "json.txt", "text/plain")}
            style={{ width: "fit-content" }}
          >
            Сохранить в файл
          </Button>

          <Popconfirm
            title="Удалалить все элементы"
            onConfirm={() => dispatch(deleteAllDragItemsAction())}
            okText="Да"
            cancelText="Нет"
          >
            <Button type="primary" danger className="mb-2" style={{ width: "fit-content" }}>
              Удалить все
            </Button>
          </Popconfirm>
          <Button
            danger
            className="m-100"
            onClick={() => dispatch(deleteSelectedDragItemAction())}
            disabled={!selectedItemId}
            style={{ width: "fit-content" }}
          >
            Удалить элемент
          </Button>
        </Flex>
      </Card>
    </>
  );
};

export default ControlPanel;
