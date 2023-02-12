import styled from '@emotion/styled'
import { Outlet } from "react-router-dom"
import Nav from 'components/common/Nav'

const TourLayoutWrap = styled.div`
  display:flex;
  flex-direction:column;
  height:100vh;
`;

const Container = styled.div`
  flex: 1;
  overflow-y:auto;
  // padding-bottom:20px;
`;

const TourLayout = () => {
  return (
    <TourLayoutWrap>
      <Container>
        <Outlet />
      </Container>
      <Nav />
    </TourLayoutWrap>
  )
}

export default TourLayout