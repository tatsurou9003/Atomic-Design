import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  // UserCard.jsxのCardタグで囲んだ内側の情報をchildrenで全て受け取る
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 3px;
  border-radius: 8px;
  padding: 16px;
`;
