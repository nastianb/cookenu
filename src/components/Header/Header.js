import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { StyledToolBar } from "./styled";
import { goToRecipesList, goToLoginPage } from "../../routes/cordinator";
import { useNavigate } from "react-router-dom";

const Header = ({rightButtonText,setRightButtonText}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  const logout = () => {
    localStorage.removeItem("token");
  };
  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLoginPage(navigate);
    }else{
      goToLoginPage(navigate);
    }
  };
  return (
    <AppBar position="static">
      <StyledToolBar>
        <Button color="inherit" onClick={() => goToRecipesList(navigate)}>
         Cookenu
        </Button>
        <Button color="inherit" onClick={() => rightButtonAction()}>
          {rightButtonText}
        </Button>
      </StyledToolBar>
    </AppBar>
  );
};
export default Header;
