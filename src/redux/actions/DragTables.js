import {
  ADD_DRAG_ITEM,
  MOVE_DRAG_ITEM,
  SELECT_DRAG_ITEM,
  DELETE_SELECT_DRAG_ITEM,
  DELETE_ALL_DRAG_ITEMS,
  ADD_MULTI_DRAG_ITEMS,
} from "../constants/DragTables";

export function addDragItemAction(item) {
  return {
    type: ADD_DRAG_ITEM,
    payload: item,
  };
}

export function moveDragItemAction({ id, x, y }) {
  return {
    type: MOVE_DRAG_ITEM,
    payload: { id, x, y },
  };
}

export function selectDragItemAction(id) {
  return {
    type: SELECT_DRAG_ITEM,
    payload: id,
  };
}

export function deleteSelectedDragItemAction() {
  return {
    type: DELETE_SELECT_DRAG_ITEM,
  };
}

export function deleteAllDragItemsAction() {
  return {
    type: DELETE_ALL_DRAG_ITEMS,
  };
}

export function addMultiDragItemsAction(items) {
  return {
    type: ADD_MULTI_DRAG_ITEMS,
    payload: items,
  };
}
