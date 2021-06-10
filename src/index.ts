import criarProfessor from "./endpoints/criarProfessor";
import app from "./app";
import criarTurma from "./endpoints/criarTurma";
import criarEstudante from "./endpoints/criarEstudante";
import idadeEstudante from "./endpoints/idadeEstudante";

app.put("/professor", criarProfessor)
app.put("/turma", criarTurma)
app.put("/estudante", criarEstudante)
app.get("/estudante", idadeEstudante)