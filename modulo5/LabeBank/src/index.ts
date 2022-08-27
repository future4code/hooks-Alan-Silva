import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { users,User } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/users', (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const name = req.query.name as string

    if (!name) {
      errorCode = 422
      throw new Error("Falta o parâmetro de busca!");
    }

    const user = users.find((u) => {
      return u.name.toLowerCase() === name.toLowerCase()
    })
    

    if (!user) {
      errorCode = 404
      throw new Error("Usuário não encontrado");
    }

    res.status(200).send(user)
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})






















import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
});