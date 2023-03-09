import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SiGithub, SiBlogger } from 'react-icons/si'

const Div = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.color.beige2};
  ${({ theme }) => theme.border.md};
  ${({ theme }) => theme.dot.gray};
`

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.gray9};
    ${({ theme }) => theme.border.text};
  }
`

const Decoration = styled.div`
  display: flex;
  gap: 0.2rem;

  div {
    width: 1rem;
    height: 1rem;
    ${({ theme }) => theme.border.sm};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.gray5};
  }
`

const LinkText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`

const TopBar = () => {
  return (
    <Div>
      <LinkContainer>
        <Link to="https://thefirstperson.tistory.com/" target="_blank">
          <LinkText>
            <SiBlogger />
            Blog
          </LinkText>
        </Link>
        <Link to="https://github.com/dayoung0510" target="_blank">
          <LinkText>
            <SiGithub />
            Github
          </LinkText>
        </Link>
      </LinkContainer>

      <Decoration>
        <div />
        <div />
        <div />
      </Decoration>
    </Div>
  )
}

export default TopBar
