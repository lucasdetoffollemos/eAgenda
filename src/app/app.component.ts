import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { IHttpTarefaService } from './shared/interfaces/IHttpTarefaService';

import { ITarefaService } from './shared/interfaces/ITarefaService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eAgenda';
  registroSelecionado: number

  constructor(private router: Router, private servicoModal: NgbModal,
    @Inject('IHttpTarefaServiceToken') private servico: IHttpTarefaService) {

  }
  abrirConfirmacao(modal:any){
      this.servicoModal.open(modal).result.then((resultado)=>{
        if(resultado == 'Excluir'){
          this.servico.excluirTarefa(this.registroSelecionado)
          .subscribe(()=>{
            this.router.navigateByUrl('/', {skipLocationChange: true})
            .then(()=>{
              this.router.navigate(['tarefa/listar'])
            })
          })
        }
        
      }).catch(erro => erro)
  }

}
