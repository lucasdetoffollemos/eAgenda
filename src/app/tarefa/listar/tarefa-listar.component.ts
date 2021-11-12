import { Component, OnInit } from '@angular/core';
import { prioridadeType } from 'src/app/shared/enums/prioridadeEnum';
import { Tarefa } from 'src/app/shared/model/Tarefa';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-tarefa-listar',
  templateUrl: './tarefa-listar.component.html'
})
export class TarefaListarComponent implements OnInit {

  titulo: string = "Lista Tarefas"
  listaTarefas: Tarefa[] = []

  constructor(private servico : TarefaService) { }

  ngOnInit(): void {
      this.obterLista()
  }

  obterLista() {
      this.listaTarefas = this.servico.obterTarefas()
  }

  convertePrioridade(prioridade: number) : string{

   return prioridadeType[prioridade]

  }

}
