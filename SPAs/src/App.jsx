import "./App.css";
import {
	BrowserRouter,
	Routes,
	Route,
	Link,
  useNavigate,
  Outlet
} from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Link to="/">Landing Page</Link>
				<br />
				<Link to="/abc">Abc Page</Link>
				<br />
				<Link to="/def">Def Page</Link>
				<br />
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/abc" element={<Abc />} />
						<Route path="/def" element={<Def />} />
						<Route path="/abv" element={<Landing />} />
						<Route path="*" element={<ErrorPage />} />
						// * means none of the above route work then by default this
						component is renders
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

const Layout = () => {
	return (
		<>
			Header <br />This is Layout
			<Outlet />
		</>
	);
};

const ErrorPage = () => {
	return (
		<>
			<div>404 Page Not Found</div>
		</>
	);
};

const Abc = () => {
	return (
		<>
			<h1>Abc Route</h1>
		</>
	);
};
const Def = () => {
	const navigate = useNavigate();
	return (
		<>
			<h1>Def Route</h1>
			<br />
			<button
				onClick={() => {
					navigate("/ ");
				}}
			>
				Back To Home Page
			</button>
		</>
	);
};
const Landing = () => {
	return (
		<>
			<h1>Landing Page</h1>
		</>
	);
};
export default App;
