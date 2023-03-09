import styled from 'styled-components'
import About from 'src/components/About'
import Works from 'src/components/Works'

export type ContentType = null | 'ABOUT' | 'WORKS'

type Props = {
  open: boolean
  close: () => void
  content: ContentType
}

const TransBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Div = styled.div`
  z-index: 9;
  width: 720px;
  height: calc(100% - 4rem);
  background-color: gray;
  margin: 0 auto;
  margin-top: -2rem;
  overflow: scroll;
  position: relative;

  @media ${({ theme }) => theme.device.mobile} {
    width: calc(100% - 2rem);
    height: calc(100% - 3rem);
    background-color: green;
  }
`

const Modal = ({ open, close, content }: Props) => {
  return (
    <Div style={{ display: open ? 'block' : 'none' }}>
      <button onClick={close}>X</button>
      <div>
        {content === 'ABOUT' && <About />}
        {content === 'WORKS' && <Works />}
      </div>
    </Div>
  )
}

export default Modal
