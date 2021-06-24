import React from "react";

export default function SideBar() {
  const [active, setActive] = React.useState("faire");
  return (
    <div className="siderbar">
      <ul type="none">
        <li
          className={active == "faire" && "active-menu"}
          onClick={() => setActive("faire")}
        >
          A faire{" "}
        </li>
        <li
          className={active == "taches" && "active-menu"}
          onClick={() => setActive("taches")}
        >
          Mes taches{" "}
        </li>
        <li
          className={active == "finished" && "active-menu"}
          onClick={() => setActive("finished")}
        >
          Taches terminées{" "}
        </li>
      </ul>
    </div>
  );
}
