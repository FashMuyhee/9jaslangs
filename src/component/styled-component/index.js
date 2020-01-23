import styled from "styled-components";
import colors from "../../helpers/colors";
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

const InputText = styled.input.attrs(props => ({
  borderColor: props.borderColor || "none"
}))`
  padding: 15px;
  border-radius: 26px;
  border: ${props =>
    props.borderColor ? `1px solid ${props.borderColor}` : "none"};
  width: 90%;
  color: black;
  margin-bottom: 15px;
  background: white;
  // box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
  //   -9px -9px 16px rgba(255, 255, 255, 0.5);
  &:focus {
    border: 1px solid ${colors.primary};
  }
`;
const TextArea = styled.textarea.attrs(props => ({
  borderColor: props.borderColor || "none"
}))`
  padding: 15px;
  border-radius: 5px;
  border: ${props =>
    props.borderColor ? `1px solid ${props.borderColor}` : "none"};
  width: 90%;
  color: black;
  margin-bottom: 15px;
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
  background: props.background || "transparent"
}))`
  background: ${props => props.background};
`;

const Avatar = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background: white;
  text-align: center;
  line-height: 3;
  color: ${colors.secondary};
  margin-left: 10px;
  margin-right: 10px;
  @media (min-width: 860px) {
    height: 50px;
    width: 13%;
  }
  @media (min-width: 740px) and (max-width: 860px) {
    height: 50px;
    width: 18%;
  }
`;
export { Text, Title, Container, InputText, TextArea, Icon, Avatar };
