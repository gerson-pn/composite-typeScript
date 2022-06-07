import Componente from "../interface/componente"


export default class Folha implements Componente {
    private identificador: string
    constructor(identificador: string) {
        this.identificador = identificador
    }
    public obterIdentificador() {
        return this.identificador
    }
    executar(): void {
        console.log(`Este é o objeto folha com identificador: ${this.identificador}`)
    }
}

