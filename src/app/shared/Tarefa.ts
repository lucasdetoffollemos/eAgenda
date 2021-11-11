export class Tarefa{
    id:number;
    titulo:string;
    prioridade:number;
    dataCriacao: Date;
    dataConclusao: Date;
    percentual: number;  

    constructor(id: number, titulo: string,  prioridade: number, dataCriacao: Date, dataConclusao: Date, percentual: number) {
        this.id = id;
        this.titulo = titulo;
        this.prioridade = prioridade;
        this.dataCriacao = dataCriacao;
        this.dataConclusao = dataConclusao;
        this.percentual = percentual;
    }
}