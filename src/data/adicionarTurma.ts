import {connection} from "../connection";

export default async function adicionarTurma(
    nome: string,
    data_inicio: Date,
    data_final: Date,
    modulo: Number
) {
    await connection.insert ({
        nome,
        data_inicio,
        data_final,
        modulo
    }).into('Class')
}