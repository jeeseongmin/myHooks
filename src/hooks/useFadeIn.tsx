import { useState } from "react";

function useFadeIn(initialValue: string, func: Function) {
  const [val, setVal] = useState(initialValue);

  const onChange = (e: any) => {};
  return { val, onChange };
}

export default useFadeIn;
