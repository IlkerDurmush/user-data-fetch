/*This component is not required by the job task.
  I think it generally makes the app cleaner.*/

import type { User } from "../types/User";

interface UserDetailsProps {
  user: User;
}

const UserDetails = ({ user }: UserDetailsProps) => {
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <p>Username: @{user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>
        Website:{" "}
        <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
          {user.website}
        </a>
      </p>
      <p>
        Address: {user.address.suite}, {user.address.street},{" "}
        {user.address.city}, {user.address.zipcode}
      </p>
      <p>
        Company: {user.company.name} — "{user.company.catchPhrase}"
      </p>
    </div>
  );
};

export default UserDetails;
