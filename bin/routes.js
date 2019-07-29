const express = require("express");
const app = express();
const controller = require("./Controller")

app.get("/", (req, res) => {
  res.send("Bienvenido a retos del saber");
});

app.get("/estudiantes", (req, res) => {
  let estudiantes = [
    { name1: "Ana", name2: "Maria", lastName1: "Burgos", lastName2: "Acosta", age:  22, identidificacion: '1067956685', grad: 3, id_grupos: 48,id_asignaturas: 12 }

  ];
  res.send(estudiantes);
});

app.get("/grupos", (req, res) => {
  let grupos = [
    { name: "aprendices", codigo: 5568 }

  ];
  res.send(grupos);
});

app.get("/asignaturas", (req, res) => {
    let asignaturas = [
        {codigo: 4356, name: "informatica", descripcion: "texto",id_estudiantes: 87}

    ];
    res.send(asignaturas);
});

app.get("/temas", (req, res) => {
    let temas = [
        {codigo: 4356, titulo: "texto", descripcion: "texto", conceptos: "textos",id_estudiantes: 85,id_asignaturas:63}

    ];
    res.send(temas);
});

app.get("/preguntas", (req, res) => {
    let preguntas = [
        {codigo: 4356, numero_preguntas: 4, enunciado: "texto",id_temas: 16 }

    ];
    res.send(preguntas);
});

app.get("/respuestas", (req, res) => {
    let respuestas = [
        {respuesta_correcta: "correcta", respuesta_incorrecta: "correcta", cantidad_respuesta: 4,id_preguntas: 63,id_puntos: 57}

    ];
    res.send(respuestas);
});

app.get("/puntos", (req, res) => {
    let puntos = [
        {puntos_positivos: "gano", puntos_negativos: "perdio", cantidad_de_puntos: 5}

    ];
    res.send(puntos);
});

app.get("/estudiantes/grupos/:id_grupo", (req, res)=>{
    let id = req.params.id_grupo
    console.log(id);
    res.send('ok')
});

app.post("/grupos", (req, res)=>{
    console.log(req)
    let { grupo} = req.body; //destruct ...[] ...Object
})

app.get("/temas/asignaturas/:id_asignatura", (req, res)=>{
    let id = req.params.id_asignatura
    console.log(id);
    res.send('informaticas')
});

exports.app = app;