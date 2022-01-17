import { useState } from "react";

function useInput(initialValue: string, validator: Function) {
	const [value, setValue] = useState(initialValue);

	const onChange = (e: any) => {
		const {
			target: { value },
		} = e;
		let willUpdate = true;
		if (typeof validator === "function") {
			willUpdate = validator(value);
		}
		if (willUpdate) {
			setValue(value);
		}
	};
	return { value, onChange };
}

export default useInput;
