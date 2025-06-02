import React from "react";
import type { User } from "../types/User";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => (
  <div>
    {users.map((user) => (
      <UserCard key={user.id} user={user} />
    ))}
  </div>
);

export default UserList;
