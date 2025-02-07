import { useState } from "react";
import "./App.css";

function App() {
	return (
		<>
			<div>
				<LightBulb />
			</div>
		</>
	);
}

// Here we declare the state in the least common ancestor LCA to send to both the child in order to acces the state variable 
// In react the props are only send from parent to child not up the chain. 

function LightBulb() {
	const [isBulb, setBulb] = useState(false);
	return (
		<>
			<BlubOn isBulbOn={isBulb} />
			<ToggleBulb setBulb={setBulb} />
		</>
	);
}

function BlubOn({ isBulbOn }) {
	return (
		<>
			{isBulbOn ? "Bulb Is On" : "Bulb Is Off"}
			<br />
		</>
	);
}

function ToggleBulb({ setBulb }) {
	return (
		<>
			<button
				onClick={() => {
					setBulb((currentValue) => !currentValue);
				}}
			>
				Toggle Bulb
			</button>
		</>
	);
}

export default App;
