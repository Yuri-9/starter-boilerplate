import { combineReducers } from "redux";
import Auth from "./Auth";
import Theme from "./Theme";
import Users from "./Users";
import DragTables from "./DragTables";

const reducers = combineReducers({
  theme: Theme,
  auth: Auth,
  users: Users,
  dragTables: DragTables,
});

export default reducers;
