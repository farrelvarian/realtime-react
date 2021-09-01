
import Router from "./configs/router/router";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "../src/configs/redux/store";

function App() {

  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
