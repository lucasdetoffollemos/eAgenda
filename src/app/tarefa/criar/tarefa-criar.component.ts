import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { prioridadeType } from 'src/app/shared/enums/prioridadeEnum';
import { Tarefa } from 'src/app/shared/model/Tarefa';
import { TarefaService } from '../services/tarefa.service';


@Component({
  selector: 'app-tarefa-criar',
  templateUrl: './tarefa-criar.component.html'
  
})
export class TarefaCriarComponent implements OnInit {

  titulo: string = "Cadastro de Tarefa"
  cadastroForm: FormGroup
  tarefa : Tarefa

  tipos = prioridadeType
  prioridades: any[]

  constructor(private servico : TarefaService) { 
    
  }

  ngOnInit(): void {

    this.prioridades = Object.keys(this.tipos).filter(t=> !isNaN(Number(t)))

    this.cadastroForm = new FormGroup({
      titulo: new FormControl(''),
      dataCriacao: new FormControl(''),
      dataConclusao: new FormControl(''),
      prioridade: new FormControl(''),
      percentual: new FormControl('')
    })
  }

  adicionarTarefa(){
   
    this.tarefa = Object.assign({}, this.tarefa, this.cadastroForm.value)
    this.servico.adicionarTarefa(this.tarefa)

    this.cadastroForm.reset()
  }
  
}
