import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  margin: 3px;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const Categoryitem = ({ item }) => {
  return (
    <Wrapper>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop now</Button>
        </Info>
      </Link>
    </Wrapper>
  );
};

export default Categoryitem;
