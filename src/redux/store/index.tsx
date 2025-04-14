import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "../reducers/modal";
export default configureStore({
  reducer: {
    modal: ModalReducer,
  },
});
