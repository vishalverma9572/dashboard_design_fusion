import React, { useState, useEffect, useRef } from "react";
import "./Main-content-container.css";
import NoticeCard from "./NoticeCard";
import Card1 from "./Card1";
import { IoIosSchool } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { MdLocalHotel } from "react-icons/md";
import { FaFirstAid } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import { FaEdit } from "react-icons/fa";


const announcements = [
  { id: 1, title: "Announcement 1", description: "Description of Announcement 1" },
  { id: 2, title: "Announcement 2", description: "Description of Announcement 2" },
  { id: 3, title: "Announcement 3", description: "Description of Announcement 3" },
];

const notifications = [
  { id: 1, title: "Notification 1", description: "Description of Notification 1" },
  { id: 2, title: "Notification 2", description: "Description of Notification 2" },
  { id: 3, title: "Notification 3", description: "Description of Notification 3" },
];
const Modules=["Academic","Program & Curriculum", "Mess Management", "Visitor's Hostel","HealthCare Centre","ScholarShip Portal","Complaint System","Placement Cell","Department Portal","GymKhana" ,"Hostel Management", "Other Academic Procedure" ]

const MainPagecontainer = () => {
  const [data, setData] = useState({ announcements, notifications });
  const [flow, setFlow] = useState("Announcement");
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    let scrollTimeout;

    const handleScroll = () => {
      // Pause the animation when the user scrolls
      container.classList.add("paused");
      
      // Clear the timeout if the user continues scrolling
      clearTimeout(scrollTimeout);

      // Resume the animation after 2 seconds of no scrolling
      scrollTimeout = setTimeout(() => {
        container.classList.remove("paused");
      }, 2000);
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleFlowChange = (selectedFlow) => {
    setFlow(selectedFlow);
  };

  return (
    <div className="main-page-container" id="modules">
      <div className="left-side">
        <h3>MODULES</h3>
        <div className="card-container">
            {/* add cards from Modules text */}
            <Card1 key="Academic" title="Academic" icon={<IoIosSchool/>} />
            <Card1 key="Program & Curriculum" title="Program & Curriculum" icon={<FaBook/>} />
            <Card1 key="Mess Management" title="Mess Management" icon={<GiKnifeFork/>} />
            <Card1 key="Visitor's Hostel" title="Visitor's Hostel" icon={<MdLocalHotel/>} />
            <Card1 key="HealthCare Centre" title="HealthCare Centre" icon={<FaFirstAid/>}/>
            <Card1 key="ScholarShip Portal" title="ScholarShip Portal" icon={<PiStudentFill/>} />
            <Card1 key="Complaint System" title="Complaint System" icon={<BsGraphUpArrow/>} />
            <Card1 key="Placement Cell" title="Placement Cell" icon={<BsCurrencyBitcoin/>} />
            <Card1 key="Department Portal" title="Department Portal" icon={<ImOffice/>} />
            <Card1 key="GymKhana" title="GymKhana" icon={<FaEdit/>} />
            <Card1 key="Hostel Management" title="Hostel Management" icon={<MdLocalHotel/>} />
            <Card1 key="Other Academic Procedure" title="Other Academic Procedure" icon={<IoIosSchool/>} />
        </div>
      </div>
      <div className="right-side">
        <div className="dropdown-container">
          <div className="dropdown">
            <div className="dropdown-btn" id="dropdownMenuButton">
              {flow}
            </div>
            <div className="dropdown-content" aria-labelledby="dropdownMenuButton">
              <div className="dropdown-item" onClick={() => handleFlowChange("Notification")}>
                Notifications
              </div>
              <div className="dropdown-item" onClick={() => handleFlowChange("Announcement")}>
                Announcement
              </div>
            </div>
          </div>
          <div className="indicator">
            {data.announcements.length > 0 && (
              <span className="dot" id="announcement-dot"></span>
            )}
            {data.notifications.length > 0 && (
              <span className="dot" id="notification-dot"></span>
            )}
          </div>
        </div>
        <div ref={containerRef} className={`content-container ${flow === "Announcement" ? "animatecontainer" : ""}`}>
          {flow === "Announcement" &&
            data.announcements.map((item) => (
              <NoticeCard key={item.id} title={item.title} content={item.description} />
            ))}
          {flow === "Notification" &&
            data.notifications.map((item) => (
              <div key={item.id} className="content-item">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainPagecontainer;
