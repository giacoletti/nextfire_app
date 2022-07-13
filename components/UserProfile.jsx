// UI component for user profile
export default function UserProfile({ user }) {
  return (
    <div className="box-center">
      <img
        data-cy="user-avatar"
        src={user.photoURL || '/avatar.png'}
        className="card-img-center"
      />
      <p>
        <i data-cy="user-username">@{user.username}</i>
      </p>
      <h1 data-cy="user-display-name">{user.displayName || 'Anonymous User'}</h1>
    </div>
  );
}
