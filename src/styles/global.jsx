import styled from "styled-components";

export const GoogleLoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: ${props => props.theme === "dark" ? "#f1f5f9" : "#1e293b"};
  font-family: "Vazirmatn";
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
  border: 2px solid ${props => props.theme === "dark" ? "#e2e8f0" : "#475569"};
  border-radius: 32px;
  padding: 12px 24px;
  cursor: pointer;
  transition: background-color ease 0.3s, color ease-in-out 0.2s;

  &:hover {
    background: ${props => props.theme === "dark" ? "#e2e8f0" : "#475569"};
    color: ${props => props.theme === "dark" ? "#1e293b" : "#f1f5f9"};
  }
`;