import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { prioridadeType } from 'src/app/shared/enums/prioridadeEnum';
import { Tarefa } from 'src/app/shared/model/Tarefa';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-tarefa-editar',
  templateUrl: './tarefa-editar.component.html',

})
export class TarefaEditarComponent implements OnInit {


  titulo: string = "Editar Tarefa" 
  cadastroForm: FormGroup
  tarefa: Tarefa
  id: any

  tipos = prioridadeType 
  prioridades: any[];


  constructor(private _ActivatedRoute: ActivatedRoute, private servico : TarefaService) {
   }

  ngOnInit(): void {

    this.prioridades = Object.keys(this.tipos).filter(t => !isNaN(Number(t)))

    this.id = this._ActivatedRoute.snapshot.paramMap.get("id")
    console.log(this.id)
    this.obterTarefa()

    this.cadastroForm = new FormGroup({
      titulo: new FormControl(this.tarefa.titulo),
      dataCriacao: new FormControl(this.tarefa.dataCriacao.toISOString().substring(0, 10)),
      dataConclusao: new FormControl(this.tarefa.dataConclusao.toISOString().substring(0, 10)),
      prioridade: new FormControl(this.tarefa.prioridade),
      percentual: new FormControl(this.tarefa.percentual)
    })
  }

  editarTarefa(){
    this.tarefa = Object.assign({}, this.tarefa, this.cadastroForm.value)
    this.servico.editarTarefa(this.tarefa)

  }

  obterTarefa(){
    this.tarefa = this.servico.obterTarefa(this.id)
  }

}
