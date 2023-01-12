const cursos = [
    {
        id: 1,
        nome: 'Herles',
        conteudo:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        foto:'https://robohash.org/julia' 

    },
    {
        id: 2,
        nome: 'Julia',
        conteudo:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        foto:'https://robohash.org/Herles' 

    },
    {
        id: 3,
        nome: 'Camila',
        conteudo:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        foto:'https://robohash.org/Sabrina' 


    },
    {
        id: 4,
        nome: 'Camila',
        conteudo:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        foto:'https://robohash.org/Camila' 


    }
]

const secao = document.querySelector(".cursosweb")
const botao = document.querySelector('.btn')

botao.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})
//console.log(todosCursos)
const todosCursos = cursos.map((curso) => {
  return `<div>
        <p>Nome: ${curso.nome}</p>
        <p>Conteudo: ${curso.conteudo}</p>
        <img src="${curso.foto}">
    </div>`;
});
secao.innerHTML = todosCursos