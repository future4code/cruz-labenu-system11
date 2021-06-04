import criarProfessor from "./endpoints/criarProfessor";
import app from "./app";
import criarTurma from "./endpoints/criarTurma";
import criarEstudante from "./endpoints/criarEstudante";

app.put("/professor", criarProfessor)
app.put("/turma", criarTurma)
app.put("/estudante", criarEstudante)
