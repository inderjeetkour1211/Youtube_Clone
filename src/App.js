import Header from "./Components/Header";
import Body from "./Components/Body";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./Utiles/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      },
    ],
  },
  ]);

function App() {
  return (
  <Provider store={Store}>
      <div>
      <Header />
      <RouterProvider router ={appRouter}/>

      {/*       
     Head
     
     Body
      -- sidebar 
         * Menuitems
      -- Main Container
         * Button List
         * videoContainer section 
              * Videocard
     
     */}
    </div> 
  </Provider>
  );
}

export default App;
