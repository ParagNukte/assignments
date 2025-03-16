import React, { useState } from "react";

import Logo from "../../public/icons/Muamelat logo.svg";
import DashboardIcon from "../../public/icons/chart-simple.svg";
import TransactionIcon from "../../public/icons/file-lines.svg";
import DocumentsIcon from "../../public/icons/folder-3.svg";
import EmailIcon from "../../public/icons/envelope.svg";
import ReportsIcon from "../../public/icons/file.svg";
import ManagementIcon from "../../public/icons/sliders.svg";
import CalibrationIcon from "../../public/icons/calender-days-2.svg";
// import ProfileIcon from '../../public/icons/profile.svg';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: DashboardIcon },
    { name: "Presentation", icon: TransactionIcon },
    { name: "Documents", icon: DocumentsIcon },
    { name: "E-Mails", icon: EmailIcon },
    { name: "Reports", icon: ReportsIcon },
    { name: "Management", icon: ManagementIcon },
    { name: "Calibration", icon: CalibrationIcon },
  ];

  return (
    <>
      <div className="flex flex-col h-full overflow-y-scroll text-black ">
        <div className="flex justify-center p-2 border-blue-800">
          <div className="flex items-center justify-center w-full py-4 ">
            <img src={Logo} alt="Mumbisoft" className="h-8" />
          </div>
        </div>

        <div className="flex-1 py-4 ">
          <ul className="space-y-4 list-none ">
            {menuItems.map((item, index) => (
              <li key={index} className="">
                <button
                  onClick={() => setActiveItem(item.name)}
                  className={`
                      flex flex-col items-center justify-center w-full p-2 rounded-md transition-colors
                      ${
                        activeItem === item.name
                          ? "bg-blue-700"
                          : "hover:bg-blue-800"
                      }
                    `}
                >
                  <div className="flex items-center justify-center mb-1">
                    <img src={item.icon} alt={item.name} className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-center">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 border-t border-blue-800">
          <button className="flex items-center justify-center w-full">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              {/* <img src={ProfileIcon} alt="Profile" className="w-full h-full object-cover" /> */}
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
