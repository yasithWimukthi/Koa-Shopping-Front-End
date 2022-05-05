import react from 'react';
import {render} from 'react-dom';
import App from "./app";
import {Provider} from "react-redux";
import store from "./src/redux/store";

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// createRoot(document.getElementById('root')).render(
//   <App />
// );