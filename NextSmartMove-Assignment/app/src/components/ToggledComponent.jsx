import React, { useState } from "react";
import { sampleTableData } from "../data/mockData"; // Import data from mockData.js
import ToggleButton from "./ToggleButton"; // Import the ToggleButton component

const TransactionTree = ({ isHeaderToggleVisible, onToggle }) => {
  // Transform the data to use stage-based naming convention
  const transformedData = sampleTableData.map((item) => ({
    id: item.id,
    name: `Stage ${item.id}`,
    originalPhase: item.phase,
    status: item.status,
    document: item.document,
    responsibleParty: item.responsibleParty,
    updateDate: item.updateDate,
    subRows: item.subRows.map((subItem, index) => ({
      taskId: subItem.taskId,
      name: `${item.id}.${index + 1} Stage `,
      originalTaskName: subItem.taskName,
      assignee: subItem.assignee,
      dueDate: subItem.dueDate,
      taskStatus: subItem.taskStatus,
      priority: subItem.priority,
      notes: subItem.notes,
      // Add a document property to each subItem based on the taskName
      document:
        subItem.notes && subItem.notes.includes("pdf") ? "document.pdf" : "",
    })),
  }));

  // State to track expanded items
  const [expandedItems, setExpandedItems] = useState({});

  // Toggle expanded state for an item
  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Render tree item
  const renderTreeItem = (item) => {
    const hasChildren = item.subRows && item.subRows.length > 0;
    const isExpanded = expandedItems[item.id];
    const hasDocument = item.document && item.document.length > 0;

    return (
      <div key={item.id} className="w-full text-black">
        <div
          className="flex items-center py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => hasChildren && toggleExpand(item.id)}
        >
          <div className="w-2 mx-2">
            {hasChildren ? (
              isExpanded ? (
                <img src="/icons/chevron-down.svg" alt="Expanded" />
              ) : (
                <img src="/icons/chevron-right.svg" alt="Collapsed" />
              )
            ) : (
              <div className="w-4" />
            )}
          </div>

          <div className="flex items-center">
            <div className="mr-2">
              <img src="/icons/folder.svg" alt="Folder" />
            </div>
            <span className="flex-grow">{item.name}</span>
          </div>

          <div className="ml-auto flex items-center">
            {hasDocument && (
              <div className="mr-2">
                <img src="/icons/plus-circle-solid.svg" alt="Add" />
              </div>
            )}
            <div className="mr-4">
              <img src="/icons/exclamation-circle-solid.svg" alt="Alert" />
            </div>
          </div>
        </div>

        {hasChildren && isExpanded && (
          <div className="pl-6 border-l border-dashed border-gray-300 ml-3">
            {item.subRows.map((subItem) => {
              const hasSubDocument =
                subItem.document && subItem.document.length > 0;

              return (
                <div
                  key={subItem.taskId}
                  className="flex items-center py-2 px-2 hover:bg-gray-100"
                >
                  <div className="w-6"></div>
                  <div className="flex items-center">
                    <div className="mr-2">
                      {hasSubDocument ? (
                        <img src="/icons/file.svg" alt="Document" />
                      ) : (
                        <img src="/icons/folder.svg" alt="Folder" />
                      )}
                    </div>
                    <span className="flex-grow">{subItem.name}</span>
                  </div>

                  <div className="ml-auto flex items-center">
                    {hasSubDocument && (
                      <div className="mr-2">
                        <img src="/icons/plus.svg" alt="Add" />
                      </div>
                    )}
                    <div className="mr-2">
                      <img
                        src="/icons/exclamation-circle-solid.svg"
                        alt="Alert"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded shadow w-64 text-black">
      <div className="p-2 border-b flex justify-between items-center h-16 ">
        <span className="font-medium">Transaction Contents</span>
        <div className="flex space-x-1">
          {/* Render ToggleButton in TransactionTree only when it's not visible in header */}
          {!isHeaderToggleVisible && (
            <ToggleButton
              isActive={!isHeaderToggleVisible}
              onClick={onToggle}
            />
          )}
        </div>
      </div>

      <div className="flex justify-between p-2 bg-gray-50 border-b">
        <div className="flex space-x-2">
          <div className="w-6 text-center">12</div>
          <div className="w-6 text-center">23</div>
          <div className="w-12 text-center">1235</div>
        </div>
        <button className="text-gray-500">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="21" y1="10" x2="3" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="21" y1="18" x2="3" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="text-xs text-gray-500 px-4 py-2 border-b">
        Priority: OnceDirection/Nested Items
      </div>

      <div className="max-h-96 overflow-y-auto">
        {transformedData.map((item) => renderTreeItem(item))}
      </div>
    </div>
  );
};

export default TransactionTree;
