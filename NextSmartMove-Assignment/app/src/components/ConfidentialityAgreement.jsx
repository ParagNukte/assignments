import React, { useState } from "react";
import { ChevronDown, ChevronUp, MoreHorizontal, File } from "lucide-react";

const ConfidentialityAgreement = ({ document, versions }) => {
  const [selectedVersion, setSelectedVersion] = useState(
    versions[0]?.key || null
  );

  if (!document || !versions || versions.length === 0) {
    return <div className="text-gray-500">No document versions available</div>;
  }

  return (
    <div className="w-full border rounded-md shadow-sm bg-white">
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded">
            <File className="text-blue-600 w-5 h-5" />
          </div>
          <div>
            <h2 className="font-semibold text-lg">{document.title}</h2>
            <p className="text-sm text-gray-500">
              V.{document.currentVersion} | (Current Version)
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-1">
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-1">
            <ChevronUp className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b">
        <button className="px-4 py-3 text-gray-500 flex items-center gap-1">
          <span>Detail</span>
        </button>
        <button className="px-4 py-3 text-blue-500 border-b-2 border-blue-500 font-medium flex items-center gap-1">
          <span>Versions</span>
        </button>
        <button className="px-4 py-3 text-gray-500 flex items-center gap-1">
          <span>Processes</span>
        </button>
        <button className="px-4 py-3 text-gray-500 flex items-center gap-1">
          <span>Notes</span>
        </button>
        <button className="px-4 py-3 text-gray-500 flex items-center gap-1">
          <span>Authorization</span>
        </button>
      </div>

      {/* Registration Title */}
      <div className="p-4 bg-gray-50">
        <h3 className="font-medium">4 Registration</h3>
      </div>

      {/* Versions List */}
      <div className="divide-y">
        {versions.map((version) => (
          <div
            key={version.key}
            className={`p-4 hover:bg-gray-50 transition-colors ${
              selectedVersion === version.key ? "bg-gray-50" : ""
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <div className="mt-1">
                  {version.type === "word" ? (
                    <div className="bg-blue-100 p-1 rounded">
                      <File className="text-blue-600 w-6 h-6" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                      {version.avatar ? (
                        <img
                          src={version.avatar}
                          alt={version.updatedBy}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500 font-bold">
                          {version.updatedBy
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-medium">
                    V. {version.version}{" "}
                    {version.isCurrent && "(Current Version)"}
                  </h4>
                  <p className="text-gray-700">{version.updatedBy}</p>
                  <div className="text-gray-400 text-sm">
                    <p>Last Updater: {version.updaterUsername}</p>
                    <p>
                      Last Update Date: {version.updateDate} /{" "}
                      {version.updateTime}
                    </p>
                  </div>
                  {version.notes && (
                    <div className="mt-2">
                      <p className="font-medium">Not:</p>
                      <p className="text-gray-600">{version.notes}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {version.fileSize && (
                  <span className="text-gray-400 text-sm">
                    {version.fileSize}
                  </span>
                )}
                {version.type === "word" && (
                  <File className="text-blue-600 w-5 h-5" />
                )}
                <button className="p-1">
                  <MoreHorizontal className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample usage with mock data
const DocumentVersionViewerDemo = ({ agreementData }) => {
  const documentData = {
    title: "Confidentiality Agreement",
    currentVersion: "1.4",
    status: "Completed",
  };

  const versionsData = [
    {
      key: "v1.4",
      version: "1.4",
      isCurrent: true,
      type: "word",
      updatedBy: "Fatma Gözde Kardeş",
      updaterUsername: "fgkardes",
      updateDate: "02.07.2022",
      updateTime: "23:40",
      notes: "loaded while loading document",
      fileSize: "95,7 Kb",
    },
    {
      key: "v1.3",
      version: "1.3",
      isCurrent: false,
      type: "user",
      updatedBy: "Fatma Gözde Kardeş",
      updaterUsername: "fgkardes",
      updateDate: "02.07.2022",
      updateTime: "23:40",
      fileSize: "95,7 Kb",
    },
  ];

  return (
    <ConfidentialityAgreement document={documentData} versions={versionsData} />
  );
};

export default DocumentVersionViewerDemo;
