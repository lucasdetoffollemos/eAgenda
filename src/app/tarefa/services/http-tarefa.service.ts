import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHttpTarefaService } from 'src/app/shared/interfaces/IHttpTarefaService';
import { TarefaCreateViewModel } from 'src/app/shared/viewModels/Tarefa/TarefaCreateTarefaViewModel';
import { TarefaListViewModel } from 'src/app/shared/viewModels/Tarefa/TarefaListViewModel';
import { TarefaEditViewModel } from 'src/app/shared/viewModels/Tarefa/TarefaEditViewModel';
import { TarefaDetailsViewModel } from 'src/app/shared/viewModels/Tarefa/TarefaDetailsViewModel';

@Injectable({
  providedIn: 'root'
})
export class HttpTarefaService implements IHttpTarefaService{

  constructor(private http: HttpClient) { }
  

  apiUrl = "https://localhost:44396/api/tarefa"

  adicionarTarefa(tarefa: TarefaCreateViewModel): Observable<TarefaCreateViewModel> {
    return this.http.post<TarefaCreateViewModel>(this.apiUrl, tarefa)
  }

  obterTarefas(): Observable<TarefaListViewModel[]> {
    return this.http.get<TarefaListViewModel[]>(this.apiUrl)
  }

  obterTarefa(tarefaId: number): Observable<TarefaDetailsViewModel> {

    return this.http.get<TarefaDetailsViewModel>(this.apiUrl+"/"+tarefaId)
  }

  atualizarTarefa(tarefa: TarefaEditViewModel): Observable<TarefaEditViewModel> {
    
    return this.http.put<TarefaEditViewModel>(this.apiUrl + "/" + tarefa.id, tarefa)
  }

  excluirTarefa(tarefaId: number): Observable<number> {
    return this.http.delete<number>(this.apiUrl + "/" + tarefaId)
  }

}
