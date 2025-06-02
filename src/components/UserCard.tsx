import React from "react";
import type { User } from "../types/User";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <div>
    <h2>
      {user.name} (@{user.username})
    </h2>
    <p>Email: {user.email}</p>
    <p>Phone: {user.phone}</p>
    <p>
      Website:{" "}
      <a href={`https://${user.website}`} target="_blank">
        {user.website}
      </a>
    </p>
    <p>
      Address: {user.address.suite}, {user.address.street}, {user.address.city},{" "}
      {user.address.zipcode}
    </p>
    <p>
      Company: {user.company.name} – "{user.company.catchPhrase}"
    </p>
  </div>
);

export default UserCard;
