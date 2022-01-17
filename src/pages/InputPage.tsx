import * as React from "react";
import useInput from "@hooks/useInput";

export interface IAppProps {}

export function InputPage(props: IAppProps) {
	const maxLen = (value: string) => value.length <= 10;
	const addressCheck = (value: string) => !value.includes("@");
	const name = useInput("Mr.", maxLen);
	return (
		<div>
			<h1>inputPage</h1>
			<input placeholder="Name" value={name.value} onChange={name.onChange} />
		</div>
	);
}
