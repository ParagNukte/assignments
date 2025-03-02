// src/component/RightSidebar.js
import React from "react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import ArtistTabContent from "./ArtistTabContent";
function RightSidebar() {
  return (
    <div className="overflow-y-auto h-[600px] flex flex-col justify-start space-x-2">
      <Tabs>
        <Tab label="Artists">
          <ArtistTabContent />
        </Tab>
        <Tab label="Photographers">
          <h2 className="text-2xl font-bold mb-4">Photographers Tab Content</h2>
          <p>This is the content of Photographers tab.</p>
        </Tab>
      </Tabs>
    </div>
  );
}

export default RightSidebar;
