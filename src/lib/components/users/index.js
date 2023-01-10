import UserCard from './card'
import axios from 'axios'
import { useState, useEffect } from 'react'

const User = () => {
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2').then((response) => {
      setPost(response.data)
    })
  }, [])
  if (!post) return null

  const users = post.data

  return (
    <div className="container px-5 flex flex-col gap-y-6">
      {users.map((u, index) => (
        <div key={index}>
          <UserCard
            firstName={u.first_name}
            lastName={u.last_name}
            email={u.email}
            avatar={u.avatar}
          />
        </div>
      ))}
    </div>
  )
}

export default User
