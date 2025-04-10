import { useEffect, useState } from "react";
import { getUsers } from "../api/blogApi";
import PostList from "../components/PostList";

export default function BlogPage() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div>
      <h2>Blog</h2>
      <select value={selectedUser} onChange={e => setSelectedUser(e.target.value)}>
        <option value="">Select a User</option>
        {users.map(user => (
          <option key={user._id} value={user._id}>{user.name}</option>
        ))}
      </select>

      {selectedUser && <PostList userId={selectedUser} />}
    </div>
  );
}
