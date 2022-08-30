import React, { useState } from "react";
import { InputsContainer } from "../LoginPage/styled";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import {createRecipe} from '../../services/recipes'
import CircularProgress from '@mui/material/CircularProgress';


const AddRecipesForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { form, onChange, clear } = useForm({
    title: "",
    description: "",
    image: "",
  });
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    createRecipe(form,clear,setIsLoading);
  };

  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"title"}
          value={form.title}
          onChange={onChange}
          label={"Title"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          autoFocus
        />
        <TextField
          name={"description"}
          value={form.description}
          onChange={onChange}
          label={"Description"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          autoFocus
        />
        <TextField
          name={"image"}
          value={form.image}
          onChange={onChange}
          label={"Image"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          autoFocus
        />
        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
          margin="normal"
        >
          {isLoading? <CircularProgress color={"inherit"} size={24}/> : <>Adicionar Receita</>}
        </Button>
      </form>
    </InputsContainer>
  );
};

export default AddRecipesForm;
