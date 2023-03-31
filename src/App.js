import Navigation from "./navigationFolder/Navigation";
import ViewList from "./Viewlist";
import AppartmentsForSale from "./AppartmnetsForSale";
import AdminPage from "./pages/AdminPage";
import AppartmentPage from "./pages/AppartmentPage";
import Route from "./navigationFolder/Route";
import { useContext, useEffect } from "react";

import appContext from "./context";
function App() {
  let { fetchAppartments, string } = useContext(appContext);
  useEffect(
    function () {
      fetchAppartments();
    },
    [string]
  );
  return (
    <div className="flex flex-row bg-slate-300 w-full  min-h-screen">
      {" "}
      <div className="flex-4 flex-col bg-cyan-300 pt-6 pl-8 pr-5">
        <Navigation />
      </div>
      <div className="flex-1 pt-6 pl-8 pr-5 bg-cyan-200">
        <Route to="/">
          <AppartmentPage className="bg-slate-300 grid grid-cols-3 gap-1" />
        </Route>
        <Route to="/admin">
          <AdminPage />
        </Route>
        <Route to="/viewlist">
          <ViewList />
        </Route>
        <Route to="/sale">
          <AppartmentsForSale />
        </Route>
      </div>
    </div>
  );
}
export default App;
