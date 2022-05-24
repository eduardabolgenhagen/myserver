const express = require("express");
const app = express();
const port = 3000

app.use(express.json());

const listaUsuarios = [];
const listaPessoas = [
    {
        nome: "Joaquina",
        id: 1
    },
    {
        nome: "Jadina",
        id: 2
    },
    {
        nome: "Jasmin",
        id: 3
    }
];

app.get('/', (req, res) => {
    res.send("Hello world");
});

//pessoas
app.get('/api/pessoas', (req, res) => {
    res.send(listaPessoas);
});

app.post('/api/pessoas', (req, res) => {
    const pessoa = req.body;
    pessoa.id = listaPessoas.length + 1;
    listaPessoas.push(pessoa);
    res.json(pessoa);
});

app.put('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const pessoa = req.body;
    const index = listaPessoas.findIndex(p => p.id == id);
    pessoa.id = id;
    listaPessoas[index] = pessoa;
    res.json(pessoa);
});

app.get('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const pessoa = listaPessoas.find(p => p.id == id);
    res.send(pessoa);
});

app.delete('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const index = listaPessoas.findIndex(p => p.id == id);
    listaPessoas.splice(index, 1);
    res.json(listaPessoas);
});

//usuários
app.get('/api/usuarios', (req, res) => {
    res.send(listaUsuarios);
})

app.post('/api/usuarios', (req, res) => {
    const usuario = req.body;
    usuario.id = listaUsuarios.length + 1;
    listaUsuarios.push(usuario);
    res.json(usuario);
})

app.put('/api/usuarios/:id', (req,res) => {
    const id = req.params.id;
    const usuario = req.body;
    const index = listaUsuarios.findIndex(u => u.id == id);
    usuario.id = id;
    listaUsuarios[index] = usuario;
    res.json(usuario);
})

app.get('/api/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuario = listaUsuarios.find(u=> u.id == id);
    res.send(usuario);
});

app.delete('/api/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const index = listaUsuarios.findIndex(u => u.id == id);
    listaUsuarios.splice(index, 1);
    res.json(listaUsuarios);
});

app.listen(port, () => {
    console.log("Example, app listening at https://localhost: " + port);
});
