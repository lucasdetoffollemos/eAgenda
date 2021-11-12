import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { prioridadeType } from 'src/app/shared/enums/prioridadeEnum';


@Component({
  selector: 'app-tarefa-criar',
  templateUrl: './tarefa-criar.component.html'
  
})
export class TarefaCriarComponent implements OnInit {

  titulo: string = "Cadastro de Tarefa"
  cadastroForm: FormGroup

  tipos = prioridadeType
  prioridades: any[]

  constructor() { 
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

  adicionarFuncionario(){
    console.log(this.cadastroForm.value)
  }
  
}
