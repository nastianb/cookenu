import React from "react";
import { LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled";
import logo from "../../assets/logo.png";
import { Button } from "@mui/material";
import LoginForm from "./LoginForm";
import { goToSignUp } from '../../routes/cordinator';
import { useNavigate } from 'react-router-dom';
import useProtectedPage from '../../hooks/useUnProtectedPage';

const LoginPage = ({setRightButtonText}) => {
  useProtectedPage()
  const navigate =useNavigate()
  return (
    <ScreenContainer>
      <LogoImage src={logo} alt="logo" />
      <LoginForm setRightButtonText={setRightButtonText}/>
      <SignUpButtonContainer>
        <Button 
        onClick={()=>goToSignUp(navigate)}
        type={"submit"} 
        fullWidth 
        variant={"text"} 
        color={"primary"}>
          Nao possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
