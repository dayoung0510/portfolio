import { Navigate, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Home from 'src/pages/Home'

const BlackBg = styled.div`
  background-color: ${({ theme }) => theme.color.gray9};
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 1rem;
  }
`

const ColorBg = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.border.md};
  border-color: #000;
  background-color: ${({ theme }) => theme.color.light};

  max-width: 1000px;
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
