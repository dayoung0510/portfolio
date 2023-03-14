import styled from 'styled-components'

const Container = styled.div`
  width: 150px;
  height: 100%;
  border-right: 4px solid ${({ theme }) => theme.color.gray9};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
`

const Button = styled.button<{ isCurrent: boolean }>`
  font-family: 'Dung';
  text-align: left;
  font-size: 1rem;
  padding: 0.25rem;

  color: ${(props) => (props.isCurrent ? props.theme.color.gray : 'inherit')};
  background-color: ${(props) => (props.isCurrent ? props.theme.color.gray7 : 'transparent')};
  border: ${(props) => (props.isCurrent ? `1px dashed` : 'none')};
`

type Props = {
  tab: number
  handleTab: (value: number) => void
}

const tabs = [
  { id: 0, name: '인적사항' },
  { id: 1, name: '사진' },
  { id: 2, name: '경력' },
  { id: 3, name: '스택' },
  { id: 4, name: '성격' },
]

const AboutSideTab = ({ tab, handleTab }: Props) => {
  console.log(tab)
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
