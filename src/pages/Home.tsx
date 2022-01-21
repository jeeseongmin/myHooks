import React, { useEffect, useState } from "react";

export interface IAppProps {}

export default function Home(props: IAppProps) {
  useEffect(() => {}, []);
  return (
    <div>
      <button type='button'>click!</button>
    </div>
  );
}
