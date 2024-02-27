const usuarios: { nome: string, idade: number, status: boolean }[] = [{
    nome: "Guido",
    idade: 32,
    status: true,
},
{
    nome: "Dani",
    idade: 30,
    status: true,
},
{
    nome: "João",
    idade: 40,
    status: false,
},
{
    nome: "Guilherme",
    idade: 29,
    status: true,
},
{
    nome: "Ana",
    idade: 18,
    status: false,
},
{
    nome: "José",
    idade: 28,
    status: false,
}]

const filtrarUsuarios = (nome: string): { nome: string, idade: number, status: boolean }[] => {
    const usuariosFiltrados = usuarios.filter(usuario => usuario.nome.includes(nome));
    return usuariosFiltrados
}

const resultado = filtrarUsuarios('Jo')
console.log(resultado);
