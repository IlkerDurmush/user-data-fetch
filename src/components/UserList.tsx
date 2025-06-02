import type { User } from "../types/User";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[];
  onUserSelect: (user: User) => void;
}

const UserList = ({ users, onUserSelect }: UserListProps) => {
  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onClick={() => onUserSelect(user)}
        />
      ))}
    </div>
  );
};

export default UserList;
