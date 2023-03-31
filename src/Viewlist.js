import axios from "axios";
import { useState, useEffect, useContext } from "react";
import appContext from "./context";
function ViewList() {
  let { fetchViews, views, deleteView } = useContext(appContext);
  useEffect(() => {
    fetchViews();
  }, []);

  return (
    <div>
      <table>
        <tbody>
          <tr className="[&>*]:p-5 border-b-5 border-indigo-500">
            <th>Number:</th>
            <th>Address:</th>
            <th>Size:</th>
            <th>Price:</th>
            <th>Condition: </th>
            <th>Price:</th>
          </tr>
          {views.map((view, i) => {
            console.log(view.city);
            return (
              <tr key={i} className="[&>*]:p-5 border-b-2 border-indigo-500 ">
                <td>{i + 1}</td>
                <td className="text-indigo-700">
                  {view.zipcode} {view.city}
                </td>
                <td>{view.size}</td>
                <td>{view.price}</td>
                <td>{view.condition}</td>
                <td>{view.type}</td>
                <td>
                  <button
                    className="bg-purple-700 p-2 text-white hover:bg-red-700"
                    onClick={() => {
                      deleteView(view.id);
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ViewList;
