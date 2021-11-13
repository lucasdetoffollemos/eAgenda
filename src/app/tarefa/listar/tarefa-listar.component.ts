import { Component, Inject, OnInit } from '@angular/core';
import { prioridadeType } from 'src/app/shared/enums/prioridadeEnum';
import { ITarefaService } from 'src/app/shared/interfaces/ITarefaService';
import { Tarefa } from 'src/app/shared/model/Tarefa';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-tarefa-listar',
  templateUrl: './tarefa-listar.component.html'
})
export class TarefaListarComponent implements OnInit {

  titulo: string = "Lista Tarefas"
  listaTarefas: Tarefa[] = []

  constructor(@Inject('ITarefaServiceToken') private servico: ITarefaService) { }

  ngOnInit(): void {
      this.obterLista()
  }

  obterLista() {
      this.listaTarefas = this.servico.obterTarefas()
  }

  convertePrioridade(prioridade: number) : string{

   return prioridadeType[prioridade]

  }

  formatarData(data:Date):string{
    return new Date(data).toLocaleDateString()
  }

}
