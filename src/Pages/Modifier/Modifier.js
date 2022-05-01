import React from "react";
import "./Modifier.css";
import FormModifier from "../../Components/FormModifier/FormModifier";

const Modifier = () => {
  return (
    <div className="main-m">
      <div className="box-m">
        <div className="title-m"></div>
        <div>
          <FormModifier />
        </div>
      </div>
    </div>
  );
};

export default Modifier;
