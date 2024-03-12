import styled from "styled-components";

// export const GlobalStyle = createGlobalStyle`
//     :root {
//         --main-bg-color: aliceblue;
//         --black: rgba(44, 44, 44, 0);
//         --text-color:var(--black);
//         --header-font-weight: 700;
//         --orange: orange;
//     }
// `;

const SimpleButton = styled.button`
  background-color: var(--orange);
`;

const LargeButton = styled(SimpleButton)`
  font-size: 30px;
`;

const ReactBtn = (props) => {
  console.log("props", props);
  // className이 포함됨
  // return <button>{props.children}</button>
  return <button className={props.className}>{props.children}</button>;
};

// 다른 컴포넌트를 감쌀 떄 주의점
// 만약 일반적인 comp를 감싼다면, 추가 조치가 필요함
const ReactLargeBtn = styled(ReactBtn)`
  font-size: 40px;
`;

const PrimaryButton = styled.button`
  background-color: ${props=>props.primary ? 'white' : 'orange'};
  color: ${props=>props.primary ? 'orange' : 'white'};
`;
  // background-color: 
  // ${function (props) {
  //   console.log("props", props);
// 
  //   if (props.primary) {
  //     return "white";
  //   } else {
  //     return "black";
  //   }
  // }};
  

function App() {
  return (
    <div>
      {/* 이록원 */}
      <h4>최강 1조</h4>
      <p>우리팀 짱짱맨</p>

      {/* 강민기 */}
      <h4>Hello</h4>
      <p>안녕하세요</p>

      {/* 권지호 */}
      <h4>다들 하이루~</h4>
      <p>방가방가 햄토리펀치 ^^* 퍽</p>

      {/* 오지수 */}
      <h4>hello</h4>
      <p>팀프로젝트 화이팅!!!</p>
      <p>안녕하세요</p>
      <SimpleButton>SimpleButton</SimpleButton>
      <LargeButton>SimpleButton</LargeButton>
      <ReactBtn>ReactBtn</ReactBtn>
      <ReactLargeBtn>ReactLargeBtn</ReactLargeBtn>
      <PrimaryButton >Normal</PrimaryButton>
      <PrimaryButton primary>Normal</PrimaryButton>

      {/* 정원비 */}
      <h4>1조 스파이</h4>
      <p>안녕하세요</p>

      {/* 하기성 */}
      <h4>1조1조1조</h4>
      <p>키키ㅣㅋ키키키ㅣ키키키키</p>
    </div>
  );
}

export default App;
