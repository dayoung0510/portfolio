import styled from 'styled-components'
import User from 'src/assets/icons/user.png'
import TopBar from 'src/components/TopBar'

const Home = () => {
  return (
    <>
      <TopBar />
      <img src={User} alt="icon" />
    </>
  )
}

export default Home
