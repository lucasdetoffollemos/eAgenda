import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { prioridadeType } from 'src/app/shared/enums/prioridadeEnum';
import { IHttpTarefaService } from 'src/app/shared/interfaces/IHttpTarefaService';
import { ITarefaService } from 'src/app/shared/interfaces/ITarefaService';
import { Tarefa } from 'src/app/shared/model/Tarefa';
import { TarefaDetailsViewModel } from 'src/app/shared/viewModels/Tarefa/TarefaDetailsViewModel';
import { TarefaEditViewModel } from 'src/app/shared/viewModels/Tarefa/TarefaEditViewModel';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-tarefa-editar',
  templateUrl: './tarefa-editar.component.html',

})
export class TarefaEditarComponent implements OnInit {


  titulo: string = "Editar Tarefa" 
  cadastroForm: FormGroup
  tarefa: TarefaEditViewModel
  id: any

  tipos = prioridadeType 
  prioridades: any[];


  constructor(private router:Router, private _ActivatedRoute: ActivatedRoute, @Inject('IHttpTarefaServiceToken') private servico: IHttpTarefaService) {
   }

  ngOnInit(): void {

    this.prioridades = Object.keys(this.tipos).filter(t => !isNaN(Number(t)))

    this.id = this._ActivatedRoute.snapshot.paramMap.get("id")
    
  
    this.cadastroForm = new FormGroup({
      titulo: new FormControl(),
      dataCriacao: new FormControl(),
      dataConclusao: new FormControl(),
      prioridade: new FormControl(),
      percentual: new FormControl()
    })

    this.carregarTarefa();
  }


  carregarTarefa(){
    this.servico.obterTarefa(this.id).subscribe((tarefa : TarefaDetailsViewModel) => {
      this.carregarFormulario(tarefa)
    })
  }

  editarTarefa(){
    this.tarefa = Object.assign({}, this.tarefa, this.cadastroForm.value)
    this.tarefa.id = this.id
    this.servico.atualizarTarefa(this.tarefa).subscribe(() => {
      this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(()=>{
        this.router.navigate(['tarefa/listar'])
      }).catch(erro => erro)
    })

    

  }

  cancelar(){
    this.router.navigate(['tarefa/listar'])
  }

  carregarFormulario(tarefa :TarefaDetailsViewModel){
      this.cadastroForm = new FormGroup({
        titulo: new FormControl(tarefa.titulo),
        dataCriacao: new FormControl(tarefa.dataCriacao.toLocaleString().split('/').reverse().join('-')),
        dataConclusao: new FormControl(tarefa.dataConclusao.toString()=== ''? '' : tarefa.dataConclusao.toLocaleString().split('/').reverse().join('-')),
        percentual: new FormControl(tarefa.percentual),
        prioridade: new FormControl(tarefa.prioridade)
      })
  }

}
