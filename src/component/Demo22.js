import React from "react";

let m = [
  { name: "Sachin", branch: "csds" },
  { name: "Satyam", branch: "csds" },
  { name: "Arun", branch: "csds" },
  { name: "Naman", branch: "Iot" },
  { name: "Pranjal", branch: "csai" },
];

export default function Demo22() {
  return (
    <>
      {m.map((obj) => {
        return (
          <p style={{ color: "white" }}>
            Welcome {obj.name} your branch is {obj.branch}.
          </p>
        );
      })}
    </>
  );
}
