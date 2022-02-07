import React, { FC, useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";

type TitlePageProps = {};

type TitlePageState = {};

const TitlePage: FC<TitlePageProps> = ({}) => {
  const titleUpdater = useTitle("...Loading");

  setTimeout(() => titleUpdater("Home"), 3000);

  return (
    <div>
      <h1>useTitle Test Page</h1>
    </div>
  );
};

export default TitlePage;
