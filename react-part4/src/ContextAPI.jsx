import React, { useContext, useState } from "react";

// There are 3 Steps to use Context API

// 1. Create the context using React.createContext().

// 2. Then declare the Provider, which means wrap the component into ContextName.Provider from where all the values has been send to other component.
// For eg: here Light component is wrap because from there all the values of props are been passed.

// 3. Now extract the state variable value in any component using useContext(ContextName). 


const BulbContext = React.createContext();

function ContextAPI() {
	const [isBulbOn, setBulb] = useState(false);
	return (
		<>
			<div>
				<BulbContext.Provider value={{ isBulbOn: isBulbOn, setBulb: setBulb }}>
					<Light />
				</BulbContext.Provider>
			</div>
		</>
	);
}

const Light = () => {
	return (
		<>
			<LightBulb />
			<ToggleBulb />
		</>
	);
};

const LightBulb = () => {
	const { isBulbOn } = useContext(BulbContext);
	return (
		<>
			{isBulbOn ? "Bulb Is On" : "Bulb Is Off"}
			<br />
		</>
	);
};

const ToggleBulb = () => {
	const { setBulb } = useContext(BulbContext);
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
};

export default ContextAPI;
