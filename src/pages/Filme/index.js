import { useEffect } from "react";
import { useParams } from "react-router-dom";

import api from '../../services/api';


 function Filme(){
  const { id } = useParams();

  useEffect(() => {
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params:{
          api_key: "19c9e0f6f411f09779144ba99aac702e",
          language: "pt-BR",
        }
      })
    }
    loadFilme();
  }, [])

  return(
    <div>
      <h1>ACESSANDO O FILME: {id}</h1>
    </div>
  )
 }

 export default Filme;