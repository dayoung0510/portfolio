import { useState } from 'react'
import styled from 'styled-components'
import AboutSideTab from 'src/components/AboutSideTab'
import Profile from 'src/components/Profile'
import Experiences from 'src/components/Experiences'
import Personality from 'src/components/Personality'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
`
const ContentContainer = styled.div`
  width: 80%;
  min-height: 100%;
  padding: 1rem;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`
export enum Enum {
  인적사항,
  '성격/성향',
  경험,
  기술,
}

export const tabs = [
  { id: 0, name: Enum[0] },
  { id: 1, name: Enum[1] },
  { id: 2, name: Enum[2] },
  { id: 3, name: Enum[3] },
  { id: 4, name: Enum[4] },
]

const About = () => {
  const [tab, setTab] = useState(0)

  const handleTab = (value: number) => {
    setTab(value)
  }

  return (
    <AboutContainer>
      <AboutSideTab tab={tab} handleTab={(value) => handleTab(value)} />
      <ContentContainer>
        {tab === Enum.인적사항 && <Profile />}
        {tab === Enum['성격/성향'] && <Personality />}
        {tab === Enum.경험 && <Experiences />}
        {tab === Enum.기술 && <div>스택입니다~</div>}
      </ContentContainer>
    </AboutContainer>
  )
}

export default About
