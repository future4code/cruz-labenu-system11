import {Request, Response} from "express"
import adicionarTurma from "../data/adicionarTurma";

export default async function criarTurma(
    req: Request, res: Response
) {
    try {
        if (!req.body.nome || !req.body.data_inicio || !req.body.data_final || !req.body.modulo) {
            throw new Error("Por favor, preencha todos os dados.")
        }

        if (req.body.modulo > 7) {
            throw new Error("Por favor, verifique módulo.")
        }

        await adicionarTurma(
            req.body.nome,
            req.body.data_inicio,
            req.body.data_final,
            req.body.modulo
        )

        res
            .status(200)
            .send("Turma criada com sucesso!")
    } catch (error) {
        res
            .status(400)
            .send({message: error.message || error.sqlMessage})
    }
}