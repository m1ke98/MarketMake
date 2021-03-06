import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background-color: #0b0c10;
  min-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const Body = styled.body`
  align-items: center;
  background: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: calc(100vh - 70px);
`;

export const Image = styled.img`
  height: 40vmin;
  margin-bottom: 16px;
  pointer-events: none;
`;

export const StdLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: #61dafb;
  margin-top: 10px;
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 8px;
  color: #282c34;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  margin: 20px 20px;
  padding: 12px 24px;

  ${props => props.hidden && "hidden"} :focus {
    border: none;
    outline: none;
  }
`;

export const StyledLink = styled(Link)`
  color: #CD5C5C;
  margin: 20px;
  text-decoration: none;
  font-size: 20px;
`;