import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="topleft">
        <p>DEMO Streaming</p>
      </div>
      <div className="topright">
        <a href={null}>Log in</a>
        <button>Start your free trial</button>
      </div>
      <div className="bottom">
        <a href="javascript:void(0)" onClick={() => window.location.reload()}>
          Popular Titles
        </a>
      </div>
    </div>
  );
}
