import express, {Request, Response} from 'express';
import cors from "cors"


const app = express()

app.use(express.json())
app.use(cors())
//- Exercício 1 Faça a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para a URL base da API. Esse endpoint pode responder apenas com um status ou mensagem fixa.
app.get("/exercicio1", ( request:Request, response:Response) => {
    response.send("Hello from Express")
})

//Exercício 2 Acesse a API do JSONPlaceholder e observe os endpoints que buscam usuários. No seu projeto, crie uma variável de tipo para representar esse recurso. Eles devem possuir as seguintes propriedades: - id, name, phone, email, website
type dataUser = {
    id: string,
    name: string,
    phone: string,
    email: string,
    website: string
}

//Exercício 3 Crie um array de usuários para servir como base de dados da nossa API. Insira nele quantos objetos quiser, fique à vontade para explorar sua criatividade 😉Não se esqueça de fazer a tipagem correta desse array.
const user : dataUser [] = [
  {
  id:"001",
  name:"Alan",
  phone:"99999999",
  email:"alan@gmail.com",
  website:"https://www.alan.com.br"
  },
  {
  id:"002",
  name:"Felipidiz",
  phone:"44444444",
  email:"felipediz@gmail.com",
  website:"https://www.felipediz.com.br"
  },
  {
    id:"003",
    name:"Arthur",
    phone:"55555555",
    email:"arthur@gmail.com",
    website:"https://www.arthur.com.br"
  },
  {
    id:"004",
    name:"pegueiga",
    phone:"33333333",
    email:"pegueiga@gmail.com",
    website:"https://www.pegueiga.com.br"
  }
]
//Exercício 4 Construa um endpoint que retorne os usuários criados no exercício anterior. Use o JSONPlaceholder como exemplo para o nome da rota e formato da resposta.
app.get("/user", (req: Request, res: Response) => {
  res.send(user)
})

// Exercício 5 Acesse a API do JSONPlaceholder e observe os endpoints que buscam posts. No seu projeto, crie uma variável de tipo para representar esse recurso. Eles devem possuir as seguintes propriedades:id, title, body, userId
type DataPost = {
  id: string,
  title: string,
  body: string,
  userId: string
}

// Exercício 6
//Crie um array de posts para incrementar a base de dados da nossa API. Você acha melhor criá-los dentro ou fora do array de usuários?Criando dentro do array percebo que o código fica mais legível
const post: DataPost []=[
  {
    id:"P001",
    title:"Alguem sabe onde vende HQ da Dark Horse ?",
    body:"Pincipalmente do predator ",
    userId:"001"
  },
  {
    id:"P002",
    title:"Vagas para Devs",
    body:"Vaga de estagio, Vagas para frontend, Vagas Para backend",
    userId:"002"
  }
]

// Exercício 7 Construa um endpoint que retorne os posts criados no exercício anterior.
app.post("/posts", (req: Request, res: Response) => {
  res.send(post)
})

// Exercício 8 Construa um endpoint que retorne os posts de um usuário em particular.

// app.get("/user/posts", (request: Request, response: Response) => {
//   const postsId = request.query.id
//   if (!postsId){
//     response.status(400).send("Requer um Id")
//   }
//   const posts = user.map((user) => user.title).flat(1)
  
//   let usuario
//   user.forEach(user => {
//     if(user.id === user){
//       usuario = user.usuario
//     }
//   })

// })

app.listen(3003, () => {
    console.log("server is running in http://localhost:3003")
})