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
  margin: 0.8rem;
  font-weight: 200;

  .point {
    color: ${({ theme }) => theme.color.deep};
  }
`

const Personality = () => {
  return (
    <div>
      <Title>만들어내는 것의 즐거움</Title>
      <Content>
        저는 어렸을 때부터 <span className="point">무언가를 만들어내는 것</span>에 즐거움을
        느꼈습니다. 그래서 전공으로 광고홍보와 문예창작을 선택했고, 졸업 후에는 매거진 에디터와
        디자이너 직무를 경험했습니다.
      </Content>
      <Title style={{ marginTop: '1.5rem' }}>그래서, 무엇을?</Title>
      <Content>
        하지만 저는 단순히 멋지게 보이는 정적인 결과물을 넘어, 기능적인 측면에서 사용자와의
        상호작용이라는 <span className="point">새로운 축</span>을 채우고 싶은 마음이 들었습니다. 그
        후 프론트엔드 개발이라는 분야를 접해 공부를 시작했습니다.
      </Content>
      <Title style={{ marginTop: '1.5rem' }}>프론트엔드 개발의 매력</Title>
      <Content>
        시시각각 변하는 <span className="point">트렌드</span>를 빠르게 체감하고, 실무에 바로
        적용해보며 <span className="point">즉각적인 피드백</span>을 주고받아 결과물을 발전시켜
        나간다는 것이 제가 느끼는 프론트엔드 개발의 매력입니다.
        <br />
        <br />
        어떻게 하면 사용자를 우리가 의도한 방향으로 자연스럽게 이끌 수 있을까, 이렇게 하면 더 강렬한
        인상을 남길 수 있지 않을까 등{' '}
        <span className="point">유저의 심리를 고려하며 화면을 그려내는 과정</span>이 즐겁게
        느껴집니다.
      </Content>
      <Title style={{ marginTop: '1.5rem' }}>좋아하는 말</Title>
      <Content>
        <span className="point">'하면 하지~'</span>라는 말을 좋아합니다. 이는 '하면 된다!' 보다는 덜
        의기충천하지만, 오히려 더 느긋하고 의연하게 자신감을 드러내는 듯이 느껴집니다. 이런 마음가짐
        덕에 무언가에 처음 도전할 때 두려움이 없는 편이고, 또 새로운 기회의 폭이 넓어질 수 있었다고
        생각합니다.
      </Content>
    </div>
  )
}

export default Personality
