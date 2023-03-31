import { useState, useContext, useEffect, useRef } from "react";
import appContext from "../context";
function Autocomplete({ valueToShare, function1 }) {
  let { autoApps } = useContext(appContext);
  let [display, setDisplay] = useState(false);
  let [options, setOptions] = useState([]);
  let [search, setSearch] = useState("");
  const wrapperRef = useRef(null);
  useEffect(() => {
    let array = [];
    autoApps.forEach((appartment, i) => {
      if (array.includes(appartment[valueToShare])) {
        return;
      } else {
        array.push(appartment[valueToShare]);
      }
    });

    setOptions(array);
  }, [search]);

  function setValue(dvalue) {
    setSearch(dvalue);
    setDisplay(false);
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [search]);
  function handleClick(event) {
    let { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  }
  return (
    <div ref={wrapperRef} className="flex-container flex-column pos-rel">
      <input
        id="auto"
        onClick={() => {
          setDisplay(!display);
        }}
        placeholder="Type to search"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setSearch("");
        }}
      >
        Reset
      </button>
      {display && (
        <div className="autocontainer w-32">
          {options
            .filter((option) => {
              if (option.toUpperCase().includes(search.toUpperCase())) {
                return option;
              }
            })
            .map((v, i) => {
              return (
                <div
                  className="option p-2 bg-white "
                  key={i}
                  onClick={() => {
                    setValue(v);
                    function1(v);
                  }}
                  tabIndex="0"
                >
                  <span>{v}</span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
export default Autocomplete;
