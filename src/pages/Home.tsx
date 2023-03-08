import TopBar from 'src/components/TopBar'
import Folder from 'src/assets/icons/folder.png'
import Idcard from 'src/assets/icons/idcard.png'
import Icon from 'src/components/IconContainer'

const Home = () => {
  return (
    <>
      <TopBar />
      <Icon icon={Idcard} text="about" top={6} right={2} />
      <Icon icon={Folder} text="works" top={14} right={2} />
    </>
  )
}

export default Home
