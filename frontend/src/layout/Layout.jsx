import React from "react";
function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <div>{children}</div>
    </div>
  );
}

export default Layout;
