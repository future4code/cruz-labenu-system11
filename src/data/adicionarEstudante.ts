import {connection} from "../connection";

export default async function adicionarEstudante(
    nome: string,
    email: string,
    data_nasc: Date,
    turma_id: Number
) {
    await connection.insert({
        nome,
        email,
        data_nasc,
        turma_id
    }).into("Estudante")
}