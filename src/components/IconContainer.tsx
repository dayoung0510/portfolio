import styled from 'styled-components'

type props = {
  icon: string
  text: string
  top: number
  right: number
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor:pointer;

  img {
    width:100%;
  }
  
  position:absolute;


  width: 100px;
  width:${({ theme }) => theme.device.mobile} {
    75px;
  }
`
const Text = styled.div`
  font-size: 1.2rem;
  margin-top: 0.2rem;
`

const IconContainer = ({ icon, text, top, right }: props) => {
  return (
    <Div style={{ top: `${top}rem`, right: `${right}rem` }}>
      <img src={icon} alt="icon" /> <Text>{text}</Text>
    </Div>
  )
}

export default IconContainer
