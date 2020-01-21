import styled from "styled-components";

const Text = styled.p.attrs(props => ({
  case: props.case || "uppercase",
  align: props.align || "unset"
}))`
  color: white;
  font-size: ${props => (props.small ? "small" : "1.2em")};
  text-tranform: ${props => props.case};
  text-align: ${props => props.align};
  font-style: ${props => (props.subtitle ? "italic" : "normal")};
`;

const Title = styled.h2.attrs(props => ({
  size: props.size || "2em",
  case: props.case || "uppercase",
  align: props.align || "unset"
}))`
  color: white;
  font-size: ${props => props.size};
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: ${props => props.case};
  text-align: ${props => props.align};
  margin-bottom: 0px;
`;

const InputText = styled.input`
  padding: 15px;
  border-radius: 26px;
  border: none;
  width: 90%;
  color: black;
  background: white;
  // box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
  //   -9px -9px 16px rgba(255, 255, 255, 0.5);
`;
const Container = styled.div`
  width: 80%;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Icon = styled.img.attrs(props => ({
  background: props.background || "#79d2f2"
}))`
  background: ${props => props.background};
`;
export { Text, Title, Container, InputText, Icon };
