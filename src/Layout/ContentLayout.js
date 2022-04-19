import React from "react";

function ContentLayout(props) {
  return (
    <div className="content-layout">
      <div>{props.children}</div>
    </div>
  );
}

export default ContentLayout;
