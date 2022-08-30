import axios from "axios";
import { BASE_URL } from '../constants/urls'

  export const createRecipe = (body,clear,setIsLoading) => {
    const token = localStorage.getItem("token");
    setIsLoading(true)
    axios.post(`${BASE_URL}/recipe`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        alert(res.data.message);
        clear();
        setIsLoading(false)
      })

      .cath((err) => {
        alert(err.data.message);
        setIsLoading(false)
      });
  };