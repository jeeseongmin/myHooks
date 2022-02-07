import React, { useEffect, useState } from "react";

export interface IAppProps {}

export default function Home(props: IAppProps) {
  useEffect(() => {}, []);
  return (
    <div style={{ margin: "2rem" }}>
      <h1>This is Home Page!</h1>
      <p>Let's practice hooks!</p>
      <button type='button'>click!</button>
    </div>
  );
}
