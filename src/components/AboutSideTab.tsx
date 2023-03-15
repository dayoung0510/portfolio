import styled from 'styled-components'
import { tabs } from 'src/components/About'

const Container = styled.div`
  width: 20%;
  min-height: 100%;
  border-right: 4px solid ${({ theme }) => theme.color.gray9};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: auto;
    min-height: auto;
    flex-direction: row;
    border-right: 0;
    border-bottom: 4px solid ${({ theme }) => theme.color.gray9};
    overflow-x: auto;
  }
`

const Button = styled.button<{ isCurrent: boolean }>`
  font-family: 'Dung';
  text-align: left;
  font-size: 1rem;
  padding: 0.25rem;
  white-space: nowrap;

  color: ${(props) => (props.isCurrent ? props.theme.color.gray : 'inherit')};
  background-color: ${(props) => (props.isCurrent ? props.theme.color.gray7 : 'transparent')};
  border: ${(props) => (props.isCurrent ? `1px dashed` : 'none')};
`

type Props = {
  tab: number
  handleTab: (value: number) => void
}

const AboutSideTab = ({ tab, handleTab }: Props) => {
  return (
    <Container>
      {tabs.map((item) => (
        <Button
          type="button"
          key={item.id}
          isCurrent={item.id === tab}
          onClick={() => handleTab(item.id)}
        >
          {item.name}
        </Button>
      ))}
    </Container>
  )
}

export default AboutSideTab
