import app from "../app";
import {Request, Response} from "express";
import {connection} from "../connection";

app.put("/turma/criar", async (req: Request, res: Response) => {
    try {
        await connection.raw(`
            INSERT INTO Class (nome, data_de_inicio, data_de_encerramento, professores, modulo)
            VALUES ("${req.body.nome}",
                    "${req.body.data_de_inicio}",
                    "${req.body.data_de_encerramento}",
                    "${req.body.professores}",
                    "${req.body.modulo}")
        `)
        res.status(200).send("Turma criada com sucesso!")

    } catch (error) {
        res.status(400).send("Verifique se os campos foram preenchidos corretamente.")
    }
})