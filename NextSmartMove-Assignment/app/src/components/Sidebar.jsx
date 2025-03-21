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
    <div className="flex flex-col h-full bg-white border-r border-gray-200 shadow-sm">
      <div className="flex justify-center p-4 border-b border-gray-200">
        <div className="flex items-center justify-center w-full py-2">
          <img src={Logo} alt="Mumbisoft" className="h-8" />
        </div>
      </div>

      <div className="flex-1 py-6 overflow-y-auto">
        <ul className="space-y-2 px-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => setActiveItem(item.name)}
                className={`
                  flex flex-col items-center justify-center w-full p-3 rounded-lg transition-all duration-200
                  ${
                    activeItem === item.name
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                <div className="flex items-center justify-center mb-2">
                  <img 
                    src={item.icon} 
                    alt={item.name} 
                    className={`w-5 h-5 ${activeItem === item.name ? "brightness-200" : ""}`} 
                  />
                </div>
                <span className="text-xs font-medium">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center justify-center w-full p-2 rounded-lg hover:bg-gray-100">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {/* User avatar placeholder */}
            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;