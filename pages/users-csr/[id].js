import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Details() {
  const { query: { id } } = useRouter();

  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await res.json();
      setUsers(data);
    }  
    fetchApi();  
  }, [id]);  

  return (
    <div>
      <p>Name: {users.name}</p>
      <p>Username: {users.username}</p>
      <p>Email: {users.email}</p>
    </div>
  )
};