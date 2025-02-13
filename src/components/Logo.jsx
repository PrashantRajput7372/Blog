import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div>
      <h1 className="text-orange-600 text-2xl">
        <b>
          B<span className="text-black text-xl">log</span>
        </b>
      </h1>
    </div>
  );
}

export default Logo;
