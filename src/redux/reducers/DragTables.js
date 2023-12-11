import { v4 as uuid } from "uuid";
import {
  ADD_DRAG_ITEM,
  MOVE_DRAG_ITEM,
  SELECT_DRAG_ITEM,
  DELETE_SELECT_DRAG_ITEM,
  DELETE_ALL_DRAG_ITEMS,
  ADD_MULTI_DRAG_ITEMS,
} from "../constants/DragTables";

const initialState = { itemsOnBoard: {}, selectedItemId: null };

function dragTablesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_DRAG_ITEM: {
      const newItem = { ...payload, id: uuid() };
      return {
        ...state,
        itemsOnBoard: { ...state.itemsOnBoard, [newItem.id]: newItem },
        selectedItemId: newItem.id,
      };
    }
    case MOVE_DRAG_ITEM: {
      const { id, x, y } = payload;
      const currentItem = { ...state.itemsOnBoard[id], x, y };
      return {
        ...state,
        itemsOnBoard: { ...state.itemsOnBoard, [id]: currentItem },
      };
    }
    case SELECT_DRAG_ITEM: {
      const id = payload;

      return {
        ...state,
        itemsOnBoard: { ...state.itemsOnBoard },
        selectedItemId: id,
      };
    }
    case DELETE_SELECT_DRAG_ITEM: {
      const copyItemsOnBoard = { ...state.itemsOnBoard };
      delete copyItemsOnBoard[state.selectedItemId];

      return {
        ...state,
        itemsOnBoard: copyItemsOnBoard,
        selectedItemId: null,
      };
    }
    case DELETE_ALL_DRAG_ITEMS: {
      return {
        ...state,
        itemsOnBoard: {},
        selectedItemId: null,
      };
    }
    case ADD_MULTI_DRAG_ITEMS: {
      return {
        ...state,
        itemsOnBoard: payload,
        selectedItemId: null,
      };
    }

    default: {
      return state;
    }
  }
}

export default dragTablesReducer;
