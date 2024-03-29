import styled from 'styled-components'
import Photo from 'src/assets/imgs/me7.png'
import useMobile from 'src/hooks/useMobile'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  line-height: 1.5;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.9rem;
    line-height: 1.1;
  }

  img {
    width: 50%;
  }
  .info {
    font-family: 'Pret';
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .photo {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
  }
`
const Pill = styled.span`
  width: 60px;
  display: inline-block;
  margin-right: 5px;
  color: ${({ theme }) => theme.color.deep};
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  .sub {
    color: ${({ theme }) => theme.color.gray5};
    display: inline-block;
    margin-left: 0.4rem;
    font-weight: 100;
    font-size: 0.6rem;
  }
  .sub2 {
    color: ${({ theme }) => theme.color.gray5};
    font-weight: 100;
    margin-left: 0.2rem;
    font-size: 0.8rem;
  }
  .point {
    background-color: ${({ theme }) => theme.color.light};
  }
`

const Profile = () => {
  const { isMobile } = useMobile()
  return (
    <Container>
      <div className="info">
        <Flex>
          <Pill>이름</Pill>
          <div>김다영</div>
        </Flex>
        <Flex>
          <Pill>거주지</Pill>서울 중구 필동 <span className="sub2">(충무로)</span>
        </Flex>
        <Flex>
          <Pill>이메일</Pill>dayoungkim9105@gmail.com
        </Flex>
        <Flex style={{ alignItems: 'flex-start' }}>
          <Pill>학력</Pill>
          <div>
            {isMobile ? (
              // 모바일
              <>
                <div>방송통신대학교 컴퓨터과학</div>
                <div className="sub" style={{ margin: '0 0 0.8rem 0' }}>
                  2021-2023 | 수료
                </div>
                <div>동국대학교 광고홍보학/문예창작학</div>
                <span className="sub" style={{ marginLeft: 0 }}>
                  2011-2017 | 졸업
                </span>
              </>
            ) : (
              // PC
              <>
                <div>
                  방송통신대학교 <span className="point">컴퓨터과학</span>
                  <span className="sub">2021-2023 | 수료</span>
                </div>
                <div>
                  동국대학교 <span className="point">광고홍보학/문예창작학</span>
                  <span className="sub">2011-2017 | 졸업</span>
                </div>
              </>
            )}
          </div>
        </Flex>
      </div>

      <div className="photo">
        <img src={Photo} alt="photo" />
      </div>
    </Container>
  )
}

export default Profile
