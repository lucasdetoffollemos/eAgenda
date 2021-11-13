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
    var tarefa : any;

    this.listaTarefas.some(function (el){
      if(el.id == tarefaId){
        tarefa = el
      }
    })

    return tarefa;
  }
  atualizarTarefa(tarefa: Tarefa): void {
    this.listaTarefas.some(function(el){
      if(el.id == tarefa.id){
        el.titulo = tarefa.titulo
        el.prioridade = tarefa.prioridade
        el.percentual = tarefa.percentual
        el.dataCriacao = tarefa.dataCriacao
        el.dataConclusao = tarefa.dataConclusao
      }
    })
  }


  obterTarefas(): Tarefa[] {
    return this.listaTarefas;
  }
  
  //melhorar esse metodo
  excluirTarefa(tarefaId: number): void {

    var index: number = -1;
    this.listaTarefas.some(function(el, i){
      if(el.id == tarefaId){
        index = i
        
      }
    })

    if(index == -1){
      console.log('Nenhuma tarefa com este id. Id ' + tarefaId)
    }
    else{
      this.listaTarefas.splice(index, 1)
      this.storage.setItem(this.key, JSON.stringify(this.listaTarefas))
    }
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
