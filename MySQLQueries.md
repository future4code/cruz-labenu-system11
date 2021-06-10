### Tabela de Turma

```mysql
CREATE TABLE Class
(
    id          INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome        VARCHAR(255) NOT NULL,
    data_inicio DATE         NOT NULL,
    data_final  DATE         NOT NULL,
    modulo      INT          NOT NULL
);
```

### Tabela Hobbies

```mysql
CREATE TABLE Hobbies
(
    id   INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL
);
```

### Tabela de Estudante

```mysql
CREATE TABLE Estudante
(
    id        INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome      VARCHAR(255) NOT NULL,
    email     VARCHAR(255) NOT NULL,
    data_nasc DATE         NOT NULL,
    turma_id  INT          NOT NULL,
    FOREIGN KEY (turma_id) REFERENCES Class (id)
);
```

### Tabela de Hobbies do Estudante

```mysql
CREATE TABLE Estudante_Hobbies
(
    estudante_id INT NOT NULL,
    hobbie_id    INT NOT NULL,
    FOREIGN KEY (estudante_id) REFERENCES Estudante (id),
    FOREIGN KEY (hobbie_id) REFERENCES Hobbies (id)
);
```

### Tabela Especialidades

```mysql
CREATE TABLE Especialidades
(
    ID   INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome ENUM ("REACT",
        "REDUX",
        "CSS",
        "TESTES",
        "TYPESCRIPT",
        "P.O.O",
        "BACKEND")
);
```

### Tabela dos Professores

```mysql
CREATE TABLE Teacher
(
    id        INT PRIMARY KEY AUTO_INCREMENT,
    nome      VARCHAR(255) NOT NULL,
    email     VARCHAR(255) NOT NULL,
    data_nasc DATE         NOT NULL,
    turma_id  INT          NOT NULL DEFAULT 0,
    FOREIGN KEY (turma_id) REFERENCES Class (id)
);
```

### Tabela Especialidades dos Professores

```mysql
CREATE TABLE Especialidades_Professor
(
    teacher_id       INT NOT NULL,
    especialidade_id INT NOT NULL,
    FOREIGN KEY (teacher_id) REFERENCES Teacher (id),
    FOREIGN KEY (especialidade_id) REFERENCES Especialidades (id)
);
```