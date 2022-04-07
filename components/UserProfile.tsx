import { User } from "../types";

// UI component for user profile
export default function UserProfile({ user }: {user: User}) {
  console.log(user);
  return (
    <div className="box-center">
      <img
        data-cy="user-avatar"
        src={user.photoURL}
        className="card-img-center"
      />
      <p>
        <i data-cy="user-username">@{user.username}</i>
      </p>
      <h1 data-cy="user-display-name">{user.displayName}</h1>
    </div>
  );
}
