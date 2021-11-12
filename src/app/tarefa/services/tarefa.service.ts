import { Injectable } from '@angular/core';
import { Tarefa } from 'src/app/shared/model/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }


  adicionarTarefa(tarefa: Tarefa){
    console.log(tarefa)
  }

  editarTarefa(tarefa: Tarefa){
    console.log(tarefa)
  }

  obterTarefa(tarefaId:string) : Tarefa{
    var tarefa = new Tarefa(1, "Tarefa 1", 1, new Date('2013/5/9'), new Date('2013/10/9'), 70);

    return tarefa;
  }
  
  obterTarefas() : Tarefa[] {

    var listaTarefas : Tarefa[] = []

    listaTarefas.push(new Tarefa(1, "Tarefa", 1, new Date(2013, 5, 9), new Date(2013, 10, 9), 50))
    listaTarefas.push(new Tarefa(1, "Tarefa", 2, new Date(2013, 5, 9), new Date(2013, 10, 9), 50))
    listaTarefas.push(new Tarefa(1, "Tarefa", 1, new Date(2013, 5, 9), new Date(2013, 10, 9), 50))
    listaTarefas.push(new Tarefa(1, "Tarefa", 0, new Date(2013, 5, 9), new Date(2013, 10, 9), 50))
    listaTarefas.push(new Tarefa(1, "Tarefa", 1, new Date(2013, 5, 9), new Date(2013, 10, 9), 50))

    return listaTarefas
}
}
