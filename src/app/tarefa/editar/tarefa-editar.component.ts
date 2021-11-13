import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { prioridadeType } from 'src/app/shared/enums/prioridadeEnum';
import { ITarefaService } from 'src/app/shared/interfaces/ITarefaService';
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


  constructor(private router:Router, private _ActivatedRoute: ActivatedRoute, @Inject('ITarefaServiceToken') private servico: ITarefaService) {
   }

  ngOnInit(): void {

    this.prioridades = Object.keys(this.tipos).filter(t => !isNaN(Number(t)))

    this.id = this._ActivatedRoute.snapshot.paramMap.get("id")
    console.log(this.id)
    this.obterTarefa()

    this.cadastroForm = new FormGroup({
      titulo: new FormControl(this.tarefa.titulo),
      dataCriacao: new FormControl(this.tarefa.dataCriacao),
      dataConclusao: new FormControl(this.tarefa.dataConclusao),
      prioridade: new FormControl(this.tarefa.prioridade),
      percentual: new FormControl(this.tarefa.percentual)
    })
  }

  editarTarefa(){
    this.tarefa = Object.assign({}, this.tarefa, this.cadastroForm.value)
    this.servico.atualizarTarefa(this.tarefa)

    this.router.navigate(['tarefa/listar'])

  }

  obterTarefa(){
    this.tarefa = this.servico.obterTarefa(this.id)
  }

  cancelar(){
    this.router.navigate(['tarefa/listar'])
  }

}
