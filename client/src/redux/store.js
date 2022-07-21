import reducer from "../utils/reducers";
import { createStore } from "redux";
//import { createStore} from "redux"

const Store = createStore(reducer)

export default Store;