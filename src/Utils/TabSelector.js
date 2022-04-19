import React from "react";

function TabSelector({ setSelectedTab, item, selectedTab, children }) {
  const changeTab = (e) => {
    e.preventDefault();
    const target = e.target.dataset.tab;
    if (typeof target !== "string") {
      return;
    }
    setSelectedTab(target);
  };
  return (
    <a
      href="#tab"
      key={item}
      style={{
        flexGrow: 1,
        display: "block",
        padding: "1rem",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "20px",
        color: selectedTab === item ? "#3a4649" : "#8f95a3",
        background: selectedTab === item ? "#fcfcfc" : "#fff",
      }}
      onClick={changeTab}
      data-tab={item}
    >
      {children}
    </a>
  );
}

export default TabSelector;
