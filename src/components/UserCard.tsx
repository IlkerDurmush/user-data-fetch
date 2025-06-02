import type { User } from "../types/User";

interface UserCardProps {
  user: User;
  onClick: () => void;
}

const UserCard = ({ user, onClick }: UserCardProps) => {
  return (
    <div className="user-card" onClick={onClick}>
      <p className="user-name">{user.name}</p>
      <p className="user-email">{user.email}</p>
    </div>
  );
};

export default UserCard;
