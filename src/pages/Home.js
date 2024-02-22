import React from 'react';
// css-in-js
import styled from 'styled-components';
import MainImage from '../assets/main_cat.jpg';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/question');
    }

    return (
        <Container>
            <Header>😼 예비집사 판별기 😼</Header>
            <Wrapper>
                <Contents>
                    <Title>나에게 맞는 집사는?</Title>
                    <LogoImage>
                        <img src={MainImage} class="rounded-circle" width={350} height={350} alt="메인 고양이"></img>
                    </LogoImage>
                    <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기!💛</Desc>
                    <Button className="btn-danger" style={{ fontFamily: "SimKyungha", marginTop: 20, }} onClick={handleClickButton} >테스트 시작하기</Button>
                </Contents>
            </Wrapper>
        </Container>
    )
}

export default Home;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background: #fffacd;
  flex-direction: column;
`;

const Wrapper = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #FDECF7;
`

const Header = styled.div`
    color: white;
    font-size: 35pt;
    font-family: "SimKyungha";
    height: 10vh;
    width: 100%;
    background: #ff99cc;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 30pt;
    margin-top: 40px;
    font-family: "SimKyungha";
`

const LogoImage = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
`

const Desc = styled.div`
    font-size: 20pt;
    font-family: "SimKyungha";
`