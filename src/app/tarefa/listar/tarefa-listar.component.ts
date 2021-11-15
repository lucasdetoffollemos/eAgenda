import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { prioridadeType } from 'src/app/shared/enums/prioridadeEnum';
import { IHttpTarefaService } from 'src/app/shared/interfaces/IHttpTarefaService';
import { ITarefaService } from 'src/app/shared/interfaces/ITarefaService';
import { Tarefa } from 'src/app/shared/model/Tarefa';
import { TarefaListViewModel } from 'src/app/shared/viewModels/Tarefa/TarefaListViewModel';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-tarefa-listar',
  templateUrl: './tarefa-listar.component.html'
})
export class TarefaListarComponent implements OnInit {

  titulo: string = "Lista Tarefas"
  listaTarefas: TarefaListViewModel[] = []

  constructor(@Inject('IHttpTarefaServiceToken') private servico: IHttpTarefaService) { }

  ngOnInit(): void {
      this.obterLista()
  }

  obterLista() {
      this.servico.obterTarefas().subscribe((tarefas: TarefaListViewModel[])=>{
        this.listaTarefas = tarefas
      })
  }

  convertePrioridade(prioridade: number) : string{

   return prioridadeType[prioridade]

  }

  formatarData(data:Date):string{

    if(data.toString() == ''){
      return ''
    }

    return new Date(data).toLocaleDateString()
  }

}
