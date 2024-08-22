import React, { useState } from "react";
import "./Header.css"; // Assuming you have your other styles here
const userAvatar = require("../assets/user-avatar.png");

const Header = () => {
  const [flow, setFlow] = useState("Student");

  const handleFlowChange = (selectedFlow) => {
    setFlow(selectedFlow);
  };
  

  return (
    <div className="header">
      <div className="dropdown">
        <div className="dropdown-btn" id="dropdownMenuButton">
          {flow} {/* Display the selected flow */}
        </div>
        <div className="dropdown-content" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item" onClick={() => handleFlowChange("Student")}>
            Student
          </div>
          <div className="dropdown-item" onClick={() => handleFlowChange("Coordinator")}>
            Coordinator
          </div>
          <div className="dropdown-item" onClick={() => handleFlowChange("Admin")}>
            Admin
          </div>
        </div>
      </div>
      <div className="user-info">
        <div className="header-user">
          <div className="user-name">Vishal Verma</div>
          <div className="user-year">3rd year</div>
        </div>
        <div className="user-avatar">
          <img src={userAvatar} alt="User Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
