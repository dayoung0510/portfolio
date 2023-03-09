import { useState } from 'react'
import TopBar from 'src/components/TopBar'
import Folder from 'src/assets/icons/folder.png'
import Idcard from 'src/assets/icons/idcard.png'
import Icon from 'src/components/Icon'
import Modal from 'src/components/Modal'
import { ContentType } from 'src/components/Modal'

const Home = () => {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState<ContentType>(null)

  const handleOpen = (value: ContentType) => {
    setContent(value)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <TopBar />
      <Icon icon={Idcard} text="about" top={6} right={2} onClick={() => handleOpen('ABOUT')} />
      <Icon icon={Folder} text="works" top={13} right={2} onClick={() => handleOpen('WORKS')} />

      <Modal open={open} close={handleClose} content={content} />
    </>
  )
}

export default Home
