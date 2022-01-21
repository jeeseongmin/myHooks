import { useEffect } from "react";

/**
 * 요소의 바깥쪽을 클릭하면 반응하는 hook
 * @param ref
 * @param callback
 */
const useClickOutside = (ref: any, callback: (e?: any) => void) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(e);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
export default useClickOutside;
