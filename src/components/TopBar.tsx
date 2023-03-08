import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Div = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.color.beige};
  ${({ theme }) => theme.border.md};
  ${({ theme }) => theme.dot.beige};
`

const LinkItem = styled.div`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.gray9};
    margin: 0 1rem;
  }
`

const Decoration = styled.div`
  display: flex;
  gap: 0.2rem;

  div {
    width: 1rem;
    height: 1rem;
    ${({ theme }) => theme.border.md};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.beige2};
  }
`

const TopBar = () => {
  return (
    <Div>
      <LinkItem>
        <Link to="https://thefirstperson.tistory.com/" target="_blank">
          Blog
        </Link>
        <Link to="https://github.com/dayoung0510" target="_blank">
          Github
        </Link>
      </LinkItem>

      <Decoration>
        <div />
        <div />
        <div />
      </Decoration>
    </Div>
  )
}

export default TopBar
