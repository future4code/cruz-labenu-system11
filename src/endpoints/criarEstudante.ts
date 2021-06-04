import app from "../app";
import {Request, Response} from "express";
import {connection} from "../connection";

app.put("/estudante/criar", async (req: Request, res: Response) => {
    try {
        await connection.raw(`
            INSERT INTO Student (nome, email, data_nasc, hobbies)
            VALUES ("${req.body.nome}",
                    "${req.body.email}",
                    "${req.body.data_nasc}",
                    "${req.body.hobbies}")
        `)
        res.status(200).send("Estudante criado com sucesso!")

    } catch (error) {
        res.status(400).send("Verifique se os campos foram preenchidos corretamente.")
    }
})