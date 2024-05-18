import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Card, CardContent, Typography, CardMedia } from '@mui/material'
import '../styles.css' // Ensure this import matches the path to your CSS file

const UserDetail = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user data:', error))
  }, [id])

  if (!user) return <Typography>Loading...</Typography>

  return (
    <Card>
      <CardMedia
        component='img'
        sx={{ height: 260, width: 260, objectFit: 'cover' }} // Set fixed height and width
        image={user.image}
        alt={`${user.firstName} ${user.lastName}`}
      />
      <CardContent>
        <Typography variant='h5'>
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant='h5'>Email: {user.email}</Typography>
        <Typography variant='h5'>BirthDate: {user.birthDate}</Typography>
      </CardContent>
    </Card>
  )
}

export default UserDetail
