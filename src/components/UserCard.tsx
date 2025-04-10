interface UserCardProps {
	user: {
		name: {
			first: string;
			last: string;
		};
		email: string;
		picture: {
			medium: string;
		};
		location: {
			country: string;
		};
	};
}

function UserCard({ user }: UserCardProps) {
	return (
		<div>
			<img src={user.picture.medium} alt={user.name.first} />
			<h2>
				<strong>
					{user.name.first} {user.name.last}
				</strong>
			</h2>
			<p>Email: {user.email} </p>
			<p>Pays: {user.location.country} </p>
		</div>
	);
}

export default UserCard;
