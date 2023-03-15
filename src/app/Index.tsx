import { Navigate, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Home from 'src/pages/Home'

const BlackBg = styled.div`
  background-color: ${({ theme }) => theme.color.gray8};
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 0;
  }
`

const ColorBg = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.border.md};
  border-color: #000;
  box-shadow: 8px 8px #000;
  background-color: ${({ theme }) => theme.color.light};
  ${({ theme }) => theme.bg.dot3}
`

const App = () => {
  return (
    <BlackBg>
      <ColorBg>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </ColorBg>
    </BlackBg>
  )
}

export default App
