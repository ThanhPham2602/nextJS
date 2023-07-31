import Introduce from "./component/introduce";
import RegisterCourse from "./component/RegisterCourse";
import React from "react";

export default function Page() {
  return (
    <section
      style={{
        margin: "0 auto",
        maxWidth: "1440px",
        backgroundColor: "#ECF4FF",
      }}
    >
      <Introduce />
      <RegisterCourse />
    </section>
  );
}
