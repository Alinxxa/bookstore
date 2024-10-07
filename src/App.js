import Container from "./components/Container";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}
export default App;
