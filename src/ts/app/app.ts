import Composicao from "../classes/conteiner"
import Folha from "../classes/folha"



let objeto1 = new Folha('objeto 1')
let objeto2 = new Folha('objeto 2')
let objeto3 = new Folha('objeto 3')

let composicao = new Composicao()
composicao.adicionar(objeto1)
composicao.adicionar(objeto2)
composicao.adicionar(objeto3)

composicao.executar()
composicao.remover(objeto1)
console.log(composicao.obterObjetos());