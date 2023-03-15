import styled from 'styled-components'
import Photo from 'src/assets/imgs/me2.png'

const Container = styled.div`
  width: 100%;
  img {
    width: 75%;
  }
`

const Identity = () => {
  return (
    <Container>
      <div>김다영</div>
      <div>서울 중구</div>
      <div>dayoungkim9105@gmail.com</div>
      <div>동국대 광고홍보학, 문예창작학 / 방송대 컴퓨터과학</div>

      <img src={Photo} alt="photo" />
    </Container>
  )
}

export default Identity
