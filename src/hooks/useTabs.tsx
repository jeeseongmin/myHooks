import React, { FC, useEffect, useState } from "react";

type Tab = {
  tab: string;
  content: string;
};
/**
 * 원하는 항목을 선택함에 따라 요소들이 바뀌도록 하는 hook
 */
const useTabs = (initialTab: number, allTabs: Array<Tab>) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
export default useTabs;
