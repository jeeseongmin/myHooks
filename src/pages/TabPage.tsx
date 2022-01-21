import React, { useState } from "react";
import useTabs from "@hooks/useTabs";

export interface IAppProps {}

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
  {
    tab: "Section 3",
    content: "I'm the content of the Section 3",
  },
];

export function TabPage(props: IAppProps) {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <p>{currentItem.tab}</p>
    </div>
  );
}
