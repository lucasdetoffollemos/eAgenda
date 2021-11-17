import { Observable } from "rxjs";
import { TarefaCreateViewModel } from "../viewModels/Tarefa/TarefaCreateTarefaViewModel";
import { TarefaDetailsViewModel } from "../viewModels/Tarefa/TarefaDetailsViewModel";
import { TarefaEditViewModel } from "../viewModels/Tarefa/TarefaEditViewModel";
import { TarefaListViewModel } from "../viewModels/Tarefa/TarefaListViewModel";

export interface IHttpTarefaService{
    adicionarTarefa(tarefa: TarefaCreateViewModel): Observable<TarefaCreateViewModel>

    obterTarefas(): Observable<TarefaListViewModel[]>

    obterTarefa(tarefaId : number): Observable<TarefaDetailsViewModel>

    atualizarTarefa(tarefa : TarefaEditViewModel): Observable<TarefaEditViewModel>

    excluirTarefa(tarefaId: number): Observable<number>
}