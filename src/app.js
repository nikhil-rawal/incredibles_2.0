import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
  return (
    <div className="app">
      <h1>Incredibles</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
