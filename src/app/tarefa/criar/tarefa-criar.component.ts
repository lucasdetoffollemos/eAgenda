import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { prioridadeType } from 'src/app/shared/enums/prioridadeEnum';
import { IHttpTarefaService } from 'src/app/shared/interfaces/IHttpTarefaService';
import { ITarefaService } from 'src/app/shared/interfaces/ITarefaService';
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

  constructor(private router:Router, @Inject('IHttpTarefaServiceToken') private servico: IHttpTarefaService) { 
    
  }

  ngOnInit(): void {

    this.prioridades = Object.keys(this.tipos).filter(t=> !isNaN(Number(t)))

    this.cadastroForm = new FormGroup({
      titulo: new FormControl(''),
      prioridade: new FormControl(''),
    })
  }

  adicionarTarefa(){
   
    this.tarefa = Object.assign({}, this.tarefa, this.cadastroForm.value)
    this.servico.adicionarTarefa(this.tarefa).subscribe((tarefa) => console.log(tarefa))

    this.cadastroForm.reset()

    this.router.navigate(['tarefa/listar'])
  }
  

  cancelar(){
    this.router.navigate(['tarefa/listar'])
  }
}
