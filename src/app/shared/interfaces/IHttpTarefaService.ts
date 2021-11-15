import { Observable } from "rxjs";
import { TarefaCreateViewModel } from "../viewModels/Tarefa/TarefaCreateTarefaViewModel";
import { TarefaListViewModel } from "../viewModels/Tarefa/TarefaListViewModel";

export interface IHttpTarefaService{
    adicionarTarefa(tarefa: TarefaCreateViewModel): Observable<TarefaCreateViewModel>

    obterTarefas(): Observable<TarefaListViewModel[]>
}