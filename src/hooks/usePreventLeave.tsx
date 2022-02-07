import { useState } from "react";

function usePreventLeave(initialValue: string, func: Function) {
  const [val, setVal] = useState(initialValue);

  const onChange = (e: any) => {};
  return { val, onChange };
}

export default usePreventLeave;
