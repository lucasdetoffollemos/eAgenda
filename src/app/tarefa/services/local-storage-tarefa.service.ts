import { Injectable } from '@angular/core';
import { ITarefaService } from 'src/app/shared/interfaces/ITarefaService';
import { Tarefa } from 'src/app/shared/model/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageTarefaService implements ITarefaService{

  private storage: Storage
  private key: string = "listaTarefas"
  private listaTarefas:Tarefa[] 

  constructor() {
    this.storage = window.localStorage
    this.obterTarefasLocalStrorage()
   }


  adicionarTarefa(tarefa: Tarefa): void {
    tarefa.id = this.obterId()
    this.listaTarefas.push(tarefa)
    this.storage.setItem(this.key, JSON.stringify(this.listaTarefas))
  }
  obterTarefa(tarefaId: number): Tarefa {
    throw new Error('Method not implemented.');
  }
  atualizarTarefa(tarefa: Tarefa): void {
    throw new Error('Method not implemented.');
  }
  obterTarefas(): Tarefa[] {
    return this.listaTarefas;
  }
  excluirTarefa(tarefaId: number): void {
    throw new Error('Method not implemented.');
  }

  private obterId(): number{
    var tarefa = this.listaTarefas[this.listaTarefas.length - 1]

    if(tarefa === undefined)
      return 1

    return tarefa.id + 1

  }

  private obterTarefasLocalStrorage(){
    var localStorageTarefas = this.storage.getItem(this.key)

    if(localStorageTarefas){
      this.listaTarefas = JSON.parse(localStorageTarefas)
    }

    else{
      this.listaTarefas = []
    }
  }
}
