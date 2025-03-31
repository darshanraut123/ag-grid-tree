import React from "react";
import Card from "../card/card";
import "./filter-tabs.css";

const tabs = [
  {
    id: 1,
    label: "All Deals",
    count: 13,
    icon: "swap_horiz", // Material UI icon name
    active: false,
  },
  {
    id: 2,
    label: "Inbound Deals",
    count: 13,
    icon: "arrow_back",
    active: true, // Highlighted
  },
  {
    id: 3,
    label: "Outbound Deals",
    count: 0,
    icon: "arrow_forward",
    active: false,
  },
  {
    id: 4,
    label: "Paired Deals",
    count: 0,
    icon: "sync_alt",
    active: false,
  },
  {
    id: 5,
    label: "PairedX Deals",
    count: 0,
    icon: "close",
    active: false,
  },
];

export default function FilterTabs() {
  const [activeTabId, setActiveTabId] = React.useState(1);

  return (
    <div className="cards_container">
      {tabs.map((tab) => (
        <Card
          data={tab}
          activeTabId={activeTabId}
          setActiveTabId={setActiveTabId}
          key={tab.id}
        />
      ))}
    </div>
  );
}
