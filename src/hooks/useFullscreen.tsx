import { useState } from "react";

function useFullscreen(initialValue: string, func: Function) {
  const [val, setVal] = useState(initialValue);

  const onChange = (e: any) => {};
  return { val, onChange };
}

export default useFullscreen;
