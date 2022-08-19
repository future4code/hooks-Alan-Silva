import express, { Request, Response } from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.listen(3003, () => console.log("Servidor disponível em 3003"))

//Exercício 1 - Faça novamente a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para o path “/ping”. Esse endpoint pode responder apenas com uma mensagem “pong”.
app.get("/ping", (req:Request, res:Response) => {          
  res.send("Pong! 🏓")
})

//Exercício 2 - Acesse a API do JSONPlaceholder e observe os endpoints que buscam afazeres (”to dos”). Crie uma variável de tipo para representar cada afazer.
type dataToDo = {
  userId:string,
  id:string,
  title:string,
  completed:boolean
}

//Exercício 3 - Crie um array de afazeres para servir como base de dados da nossa API e utilize a tipagem desenvolvida no exercício anterior.
const user:dataToDo[]= [
  {  
    userId:"U001",
    id:"001",
    title:"Lavar pratos",
    completed:true
  },
  {
    userId:"U002",
    id:"002",
    title:"Limpar a area de estudos",
    completed:false
  },
  {
    userId:"U003",
    id:"003",
    title:"Pausa pra descanso",
    completed:false
  },
  {
    userId:"U004",
    id:"004",
    title:"Estudar",
    completed:true
  }
] 

//Exercício 4 Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo com um único status, ou seja, retorne ou afazeres concluídos ou somente os que ainda estão em andamento.