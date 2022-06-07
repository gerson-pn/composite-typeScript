import Componente from "../interface/componente";
import Folha from "./folha";

export default class Conteiner implements Componente {
    private objetos: Componente[]
    constructor() {
        this.objetos = []
    }
    public adicionar(objeto: Componente): void {
        this.objetos.push(objeto)
    }
    public remover(objeto: Componente): void {
        let alvo = objeto as Folha
        for (let index = 0; index < this.objetos.length; index++) {
            let folha = this.objetos[index] as Folha
            if (folha.obterIdentificador() == alvo.obterIdentificador()) {
                let posicao = this.objetos.indexOf(folha)
                this.objetos.splice(posicao, 1)
                break
            }
        }
    }
    public obterObjetos() {
        return this.objetos
    }
    executar(): void {
        this.objetos.forEach(objeto => {
            objeto.executar()
        })
    }
}

