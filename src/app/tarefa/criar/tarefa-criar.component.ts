import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-tarefa-criar',
  templateUrl: './tarefa-criar.component.html'
  
})
export class TarefaCriarComponent implements OnInit {

  titulo: string = "Cadastro de Tarefa"
  cadastroForm: FormGroup

  constructor() { 
  }

  ngOnInit(): void {
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
