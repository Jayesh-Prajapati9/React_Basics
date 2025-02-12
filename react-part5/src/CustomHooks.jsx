import { useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

function CustomHooks() {
	const [post, setPost] = useState(1);
	const { value, loading } = useFetch(
		"https://jsonplaceholder.typicode.com/todos/" + post
	);

	return (
		<>
			<button
				onClick={() => {
					setPost(1);
				}}
			>
				For Post 1
			</button>
			<br />
			<br />
			<button
				onClick={() => {
					setPost(2);
				}}
			>
				For Post 2
			</button>
			<br />
			<br />
			<button
				onClick={() => {
					setPost(3);
				}}
			>
				For Post 3
			</button>
			<br />
			<br />
			<br />
			<br />
			{loading ? "Wait for response" : JSON.stringify(value)}
		</>
	);
}

export default CustomHooks;
