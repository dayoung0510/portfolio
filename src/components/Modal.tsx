import styled from 'styled-components'
import About from 'src/components/About'
import Works from 'src/components/Works'

export type ContentType = null | 'ABOUT' | 'WORKS'

type Props = {
  open: boolean
  close: () => void
  content: ContentType
}

const Div = styled.div`
  z-index: 9;
  width: 720px;
  height: calc(100% - 4rem);
  background-color: ${({ theme }) => theme.color.beige};
  margin: 0 auto;
  margin-top: -2rem;
  position: relative;
  ${({ theme }) => theme.border.md}
  ${({ theme }) => theme.border.boxShdow}

  overflow: auto;

  @media ${({ theme }) => theme.device.mobile} {
    width: calc(100% - 2rem);
    height: calc(100% - 3rem);
  }
`

const TopContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 4px solid ${({ theme }) => theme.color.gray9};
`
const XBtn = styled.button`
  ${({ theme }) => theme.border.sm};
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.color.main};
`

const Hr = styled.hr`
  border: 0;
  max-width: 100%;
  box-sizing: border-box;

  color: ${({ theme }) => theme.color.beige2};
  background-image: linear-gradient(
    -45deg,
    transparent,
    transparent 25%,
    currentColor 25%,
    currentColor 50%,
    transparent 50%,
    transparent 75%,
    currentColor 75%
  );
  background-size: 7px 7px;
  margin: 0;
  width: 100%;
  text-align: center;

  &:after {
    content: attr(data-content);
    color: ${({ theme }) => theme.color.gray9};
    display: inline-flex;
    align-items: center;
    height: 100%;
    ${({ theme }) => theme.border.text}
  }
`

const ContentContainer = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;

  position: absolute;
  top: 2rem;
  width: 100%;
  height: calc(100% - 2rem);
  padding: 1rem;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    -webkit-overflow-scrolling: touch;
    width: 20px;
    height: 20px;
  }
  &::-webkit-scrollbar:vertical {
    width: 20px;
    height: 20px;
    -webkit-overflow-scrolling: touch;
  }
  &::-webkit-scrollbar-thumb {
    border-top: 4px solid ${({ theme }) => theme.color.gray9};
    border-bottom: 4px solid ${({ theme }) => theme.color.gray9};
    border-left: 4px solid ${({ theme }) => theme.color.gray9};
    background: ${({ theme }) => theme.color.gray5};
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.color.gray3};
    border: 4px solid ${({ theme }) => theme.color.gray9};
    border-right: 0;
  }
  ::-webkit-scrollbar-button {
    display: block;
    background-color: ${({ theme }) => theme.color.gray3};
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: center;
    border-left: 4px solid ${({ theme }) => theme.color.gray9};
  }

  ::-webkit-scrollbar-button:vertical:start:increment {
    background-image: url('src/assets/icons/up.png');
  }
  ::-webkit-scrollbar-button:vertical:start:decrement {
    display: none;
  }
  ::-webkit-scrollbar-button:vertical:end:increment {
    display: none;
  }
  ::-webkit-scrollbar-button:vertical:end:decrement {
    background-image: url('src/assets/icons/down.png');
  }
`

const Topbar = ({ content, close }: Partial<Props>) => {
  return (
    <TopContainer>
      <Hr data-content={content}></Hr>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '0.5rem',
          transform: 'translate(0, -50%)',
        }}
      >
        <XBtn type="button" onClick={close} />
      </div>
    </TopContainer>
  )
}

const Modal = ({ open, close, content }: Props) => {
  return (
    <Div style={{ display: open ? 'block' : 'none' }}>
      <Topbar content={content} close={close} />
      <ContentContainer>
        {content === 'ABOUT' && <About />}
        {content === 'WORKS' && <Works />}
      </ContentContainer>
    </Div>
  )
}

export default Modal
