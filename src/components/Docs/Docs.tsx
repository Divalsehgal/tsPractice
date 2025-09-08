import React, { useState } from "react";
import UnionExample from "./components/UnionExample";
import IntersectionExample from "./components/IntersectionExample";
import MappedExample from "./components/MappedExample";
import GenericsExample from "./components/GenericsExample";

const Docs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("interface");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabChange("union")}>Union</button>
        <button onClick={() => handleTabChange("intersection")}>
          Intersection
        </button>
        <button onClick={() => handleTabChange("mapped")}>Mapped Types</button>
        <button onClick={() => handleTabChange("generics")}>Generics</button>
      </div>

      <div>
        {activeTab === "union" && <UnionExample />}
        {activeTab === "intersection" && <IntersectionExample />}
        {activeTab === "mapped" && <MappedExample />}
        {activeTab === "generics" && <GenericsExample />}
      </div>
    </div>
  );
};

export default Docs;
