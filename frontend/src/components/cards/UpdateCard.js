import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
// import CardContent from './CardContent'
import PhotoSearch from './createUpdate/PhotoSearch'
import CardForm from './createUpdate/CardForm'

const UpdateCard = ({ token, handleDone, pk, isUpdating, setIsUpdating, card }) => {
  const [backgroundColor, setBackgroundColor] = useState(card.background)
  const [border, setBorder] = useState(card.border)
  const [font, setFont] = useState(card.font)
  const [title, setTitle] = useState(card.title)
  const [message, setMessage] = useState(card.message)
  const [backgroundImage, setBackgroundImage] = useState(card.image_front)

  if (!token) {
    return <Redirect to='/login' />
  }

  return (
    <>
      <div className='flex card-detail-all card-detail-header'>
        <Link onClick={() => setIsUpdating(false)} className='general-link' to='/cards'>Return to Cards List</Link>
      </div>
      <div className='flex'>

        <CardForm
          token={token} pk={pk} isUpdating={isUpdating} handleDone={handleDone} setBackgroundColor={setBackgroundColor} setBorder={setBorder} setFont={setFont} setTitle={setTitle} setMessage={setMessage} setBackgroundImage={setBackgroundImage}
          backgroundColor={backgroundColor} font={font} border={border} backgroundImage={backgroundImage} title={title} message={message}
        />
      </div>
      {/* <CardContent backgroundColor={backgroundColor} border={border} font={font} backgroundImage={backgroundImage} title={title} message={message} /> */}
      <PhotoSearch token={token} setBackgroundImage={setBackgroundImage} />
    </>
  )
}

export default UpdateCard