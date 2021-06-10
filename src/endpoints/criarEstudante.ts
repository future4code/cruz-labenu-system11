import {Request, Response} from "express";
import adicionarEstudante from "../data/adicionarEstudante";

export default async function criarEstudante(
    req: Request, res: Response
) {
    try {
        await adicionarEstudante(
            req.body.nome,
            req.body.email,
            req.body.data_nasc,
            req.body.turma_id
        )

        res.status(200)
            .send("Estudante criado com sucesso!")
    } catch (error) {
        res
            .status(400)
            .send({message: error.message || error.sqlMessage})
    }
}