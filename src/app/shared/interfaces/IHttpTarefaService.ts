import { Observable } from "rxjs";
import { TarefaCreateViewModel } from "../viewModels/Tarefa/TarefaCreateTarefaViewModel";

export interface IHttpTarefaService{
    adicionarTarefa(tarefa: TarefaCreateViewModel): Observable<TarefaCreateViewModel>
}