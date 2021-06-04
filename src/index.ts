import criarProfessor from "./endpoints/criarProfessor";
import app from "./app";
import criarTurma from "./endpoints/criarTurma2";

app.put("/professor", criarProfessor)
app.put("/turma", criarTurma)
