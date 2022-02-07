import { useState, useEffect } from "react";

const useTitle = (initialTitle: string) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle: any = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  // hooks를 사용한 componentWillMount 의 예시
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default useTitle;
