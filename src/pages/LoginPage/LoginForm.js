import React, { useState } from "react"
import { InputsContainer } from "./styled"
import TextField from "@mui/material/TextField"
import { Button } from "@mui/material"
import useForm from "../../hooks/useForm"
import { login } from "../../services/user"
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const LoginForm = ({setRightButtonText}) => {
 
  const { form, onChange, clear } = useForm({ email: "", password: "" })
  const navigate = useNavigate()
  const [isLoading,setIsLoading] = useState(false)
  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form,clear,navigate,setRightButtonText,setIsLoading)
  }
  
  return (

      
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
            <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin="normal"
            required
            type={"email"}
            />
            <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Password"}
            variant={"outlined"}
            fullWidth
            margin="normal"
            required
            type={"password"}
            />
            <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            margin="normal"
            >
            {isLoading ? <CircularProgress color={"inherit"}/> : <>Fazer Login</>}
            </Button>
            </form>
            
        </InputsContainer>
            
  )
}

export default LoginForm
