import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/shared/Tarefa';

@Component({
  selector: 'app-tarefa-listar',
  templateUrl: './tarefa-listar.component.html'
})
export class TarefaListarComponent implements OnInit {

  titulo: string = "Lista Tarefas"
  listaTarefas: Tarefa[] = []

  constructor() { }

  ngOnInit(): void {
      this.obterLista()
  }

  obterLista() {
      this.listaTarefas.push(new Tarefa(1, "Tarefa", 1, new Date(2013, 5, 9), new Date(2013, 10, 9), 50))
      this.listaTarefas.push(new Tarefa(1, "Tarefa", 2, new Date(2013, 5, 9), new Date(2013, 10, 9), 50))
      this.listaTarefas.push(new Tarefa(1, "Tarefa", 3, new Date(2013, 5, 9), new Date(2013, 10, 9), 50))
      this.listaTarefas.push(new Tarefa(1, "Tarefa", 4, new Date(2013, 5, 9), new Date(2013, 10, 9), 50))
      this.listaTarefas.push(new Tarefa(1, "Tarefa", 5, new Date(2013, 5, 9), new Date(2013, 10, 9), 50))
  }

  convertePrioridade(prioridade: number) : string{

    if(prioridade == 0)
      return "Baixa"

    if(prioridade == 1)
      return "Normal"

    if(prioridade == 2)
      return "Alta"

    return "Indefinido"

  }

}
