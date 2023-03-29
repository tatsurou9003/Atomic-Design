import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";
import { useContext } from "react";

export const Top = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("/users");
  };

  return (
    <SContainer>
      <h2>Top Page</h2>
      <SecondaryButton onClick={onClickAdmin}>Administrator</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>Genaral User</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
