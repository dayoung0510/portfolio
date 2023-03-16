import styled from 'styled-components'

const Title = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  border: 2px solid #000;
  box-shadow: 4px 4px #000;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.color.gray3};
`
const Content = styled.div`
  font-family: 'Pret';
`

const Personality = () => {
  return (
    <div>
      <Title>만들어내는 것의 즐거움</Title>
      <Content>
        뭔가 만들어내는 것에 즐거움을 가진다. 그래서 에디터, 디자이너를 거쳐 프론트엔드 개발자를
        하게 됐다.
      </Content>
      <Title style={{ marginTop: '1.5rem' }}>그래서 무엇을 만드는가?</Title>
      <Content>
        아름답고 편리한 UI 만드는 것에 관심 많음. 멋진 걸 만들어내고자 하는 마음에 빠르게 변하는
        트렌드가 접목됐다는 게 프론트엔드 개발의 매력으로 다가온다.
      </Content>
      <Title style={{ marginTop: '1.5rem' }}>하면 하지!</Title>
      <Content>
        - 새로운 도전을 두려워하지 않는다. “일단 하자”가 모토. 장단점이 있다고 생각한다. (스윙스) -
        심리와 인문에 관심을 두고, 어떻게 하면 사람들의 삶을 풍요롭고 재미있는 방향으로 이끌 수
        있을지 고민한다. - 다양한 분야에 몸담은 이력 : 융통성이 좋고, 여러 방향으로 생각해보는 것에
        익숙합니다. 커뮤니케이션이 원활합니다.
      </Content>
    </div>
  )
}

export default Personality
