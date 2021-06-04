import {Request, Response} from "express"
import adicionarProfessor from "../data/adicionarProfessor";

export default async function criarProfessor(
    req: Request, res: Response
) {
    try {
        if (!req.body.nome || !req.body.email || !req.body.data_nasc) {
            throw new Error("Por favor, preencha todos os dados.")
        }

        await adicionarProfessor(
            req.body.nome,
            req.body.email,
            req.body.data_nasc,
            req.body.turma_id
        )

        res
            .status(200)
            .send("Professor cadastrado com sucesso !")
    } catch (error) {
        res
            .status(400)
            .send({message: error.message || error.sqlMessage})
    }
}
