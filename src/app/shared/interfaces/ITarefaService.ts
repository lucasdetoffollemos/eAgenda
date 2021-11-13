import { Tarefa } from "../model/Tarefa";

export interface ITarefaService{

    adicionarTarefa(tarefa: Tarefa): void

    obterTarefa(tarefaId: number) : Tarefa

    atualizarTarefa(tarefa : Tarefa) : void

    obterTarefas() : Tarefa[]

    excluirTarefa(tarefaId: number): void

}