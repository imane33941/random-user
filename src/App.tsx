import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

const FirstUser = {
	name: {
		first: "Elliot",
		last: "Hansen",
	},
	email: "elliot.hansen@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/61.jpg",
	},
	location: {
		country: "United Kingdom",
	},
};

function App() {
	const [user, setUser] = useState(FirstUser);

	const getUser = () => {
		fetch("https://randomuser.me/api/")
			.then((res) => res.json())
			.then((data) => {
				setUser(data.results[0]);
			});
	};

	return (
		<div className="app">
			<UserCard user={user} />
			<button type="button" onClick={getUser}>
				Get user
			</button>
		</div>
	);
}

export default App;
