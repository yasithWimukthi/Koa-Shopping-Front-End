import react from 'react';
import { render} from 'react-dom';
import App from "./app";

render(
  <App />,
  document.getElementById('root')
);

// createRoot(document.getElementById('root')).render(
//   <App />
// );