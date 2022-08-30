import React from "react";
import { LogoImage, ScreenContainer } from "./styled";
import logo from "../../assets/logo.png";
import SignUpForm from "./SignUpForm";
import useUnProtectedPage from '../../hooks/useUnProtectedPage';

const SignUpPage = ({setRightButtonText}) => {
  useUnProtectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <SignUpForm setRightButtonText={setRightButtonText} />
    </ScreenContainer>
  );
};

export default SignUpPage;
