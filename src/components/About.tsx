import { useState } from 'react'
import styled from 'styled-components'
import AboutSideTab from 'src/components/AboutSideTab'

const ContentContainer = styled.div`
  padding: 1rem;
`

const About = () => {
  const [tab, setTab] = useState(0)

  const handleTab = (value: number) => {
    setTab(value)
  }

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <AboutSideTab tab={tab} handleTab={(value) => handleTab(value)} />
      <ContentContainer>
        {tab === 0 && <div>인적사항!</div>}
        {tab === 1 && <div>사진~!</div>}
        {tab === 2 && <div>경력!!</div>}
        {tab === 3 && <div>스택입니다~</div>}
        {tab === 4 && <div>성격입니다!!</div>}
      </ContentContainer>
    </div>
  )
}

export default About
