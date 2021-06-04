import {connection} from "../connection";

export default async function idadeEstudante(req: any, res: any) {
    try {
        const result = await connection.raw(`
            SELECT TIMESTAMPDIFF(YEAR, Estudante.data_nasc, CURDATE()) AS age
            FROM Estudante
            WHERE id = "${req.params.id}"
        `)

        res
            .status(200)
            .send(result[0][0])

    } catch (error) {
        res.status(400)
            .send({message: error.message || error.sqlMessage})
    }
}