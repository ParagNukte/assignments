import React, { useState } from "react";
import { sampleTableData } from "../data/mockData"; // Import data from mockData.js

const TransactionTree = () => {
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
      name: `Stage ${item.id}.${index + 1}`,
      originalTaskName: subItem.taskName,
      assignee: subItem.assignee,
      dueDate: subItem.dueDate,
      taskStatus: subItem.taskStatus,
      priority: subItem.priority,
      notes: subItem.notes,
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

    return (
      <div key={item.id} className="w-full text-black">
        <div
          className="flex items-center py-2  hover:bg-gray-100 cursor-pointer"
          onClick={() => hasChildren && toggleExpand(item.id)}
        >
          <div className="w-6">
            {hasChildren ? (
              isExpanded ? (
                <img src="/icons/cheveron-down.svg" alt="" srcset="" />
              ) : (
                <img src="/icons/cheveron-right.svg" alt="" srcset="" />
              )
            ) : (
              <div className="w-4" />
            )}
          </div>

          <div className="flex items-center">
            <span>{item.name}</span>
          </div>

          <div className="ml-auto mr-4">
            <img src="/icons/exclamation-circle-solid.svg" alt="" srcset="" />
          </div>
        </div>

        {hasChildren && isExpanded && (
          <div className="pl-6 border-l border-dashed border-gray-300 ml-3">
            {item.subRows.map((subItem) => (
              <div
                key={subItem.taskId}
                className="flex items-center py-2 px-2 hover:bg-gray-100"
              >
                <div className="w-6"></div>
                <div className="flex items-center">
                  <span>{subItem.name}</span>
                </div>
                <div className="ml-auto mr-4">
                  <img
                    src="/icons/exclamation-circle-solid.svg"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded shadow w-64 text-black">
      <div className="p-2 border-b flex justify-between items-center">
        <span className="font-medium">Transaction Contents</span>
        <div className="flex space-x-1">
          <button className="p-1 text-gray-500 hover:bg-gray-100 rounded">
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
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </button>
          <button className="p-1 text-gray-500 hover:bg-gray-100 rounded">
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
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </button>
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
