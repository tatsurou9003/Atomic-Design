import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

// 配列にオブジェクトを10コ設定
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `Tacchan${val}`,
    image:
      "https://images.unsplash.com/photo-1678736424589-29540f17cffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80",
    email: "test@test.com",
    phone: "000-1111-2222",
    company: {
      name: "OrenoCompany",
    },
    website: "https://google.com",
  };
});

// map関数の第一引数は配列の要素自体を表すのでpropsとして各要素の情報をUserCardコンポーネントに渡している
export const Users = () => {
  return (
    <SContainer>
      <SearchInput />
      <SUserArea>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
