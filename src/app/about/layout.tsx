import React from "react";

export const metadata = {
  title: "About",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>Header Layout</h2>
      {children}
    </div>
  );
}

export default Layout;
