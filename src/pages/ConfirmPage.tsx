import React, { FC, useEffect, useState } from "react";

type ConfirmPageProps = {};

type ConfirmPageState = {};

const useConfirm = (message: string, callback: Function) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    // if (confirm(message)) {
    //   callback(0);
    // }
    callback(0);
  };
  return confirmAction;
};
const ConfirmPage: FC<ConfirmPageProps> = ({}) => {
  const deleteWorld = () => console.log("Deleting the World");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld);
  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default ConfirmPage;
