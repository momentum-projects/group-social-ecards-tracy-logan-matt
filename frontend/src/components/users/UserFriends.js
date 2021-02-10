import { Link, Redirect } from 'react-router-dom'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'

const UserFriends = ({ token, user, profileUsername, allUsers, setAllUsers, pathUsername }) => {
  // function handleUpdate () {
  //   setIsUpdatingProfile(true)
  // }

  if (!token) {
    return <Redirect to='/' />
  }

  return (
    <div className='flex'>
      {user.friends && (
        <div className='create-card-header flex-col'>{pathUsername}'s Friends
          {allUsers.map(other => (
            <div key={other.pk}>
              {(user.friends.includes(other.username)) && (
                <ListGroup other={other} className='my-list-group flex'>

                  <ListGroupItem>
                    <Link className='card-title' to={`/user/${other.username}`}>
                      <div style={{ color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className='user-card-profile' style={{ borderRadius: '80px', justifyContent: 'center', alignItems: 'center', color: 'white', backgroundColor: 'black', backgroundImage: `url(${other.avatar})` }} />
                        <div>{other.username}</div>
                      </div>
                    </Link>
                  </ListGroupItem>
                </ListGroup>

              )}
            </div>
          ))}
        </div>
      )}

    </div>

  )
}

export default UserFriends
