import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Link
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import '../styles.css' // Ensure this import matches the path to your CSS file

const UserList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('https://dummyjson.com/users')
      .then(response => setUsers(response.data.users))
      .catch(error => console.error('Error fetching user data:', error))
  }, [])

  return (
    <Grid container spacing={2}>
      {users.map(user => (
        <Grid item xs={12} sm={6} md={4} key={user.id}>
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
              <Link component={RouterLink} to={`/user/${user.id}`}>
                <Typography variant='body2' color='primary'>
                  View Details
                </Typography>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default UserList
