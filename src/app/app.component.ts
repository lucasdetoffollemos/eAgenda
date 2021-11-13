import { Component, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { ITarefaService } from './shared/interfaces/ITarefaService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eAgenda';
  registroSelecionado: number

  constructor(private servicoModal: NgbModal, @Inject('ITarefaServiceToken') private servico: ITarefaService) {
    //this.minhaPromise('Luscas').then(result => console.log(result)).catch((erro)=> console.log(erro));
    
    this.minhaObsarvable('Lucas').subscribe(result => console.log(result), erro => console.log(erro))
  }
  abrirConfirmacao(modal:any){
      this.servicoModal.open(modal).result.then((resultado)=>{
        if(resultado == 'Excluir'){
          this.servico.excluirTarefa(this.registroSelecionado)
        }
        
      })
  }

  minhaPromise(nome:string):Promise<string>{
    return new Promise((resolve, reject)=>{
      if(nome == 'Lucas'){
        setTimeout(()=>{
          resolve('Seja bem vindo ' + nome)
        }, 2000)
      }
      else{
        reject('Errouuu')
      }
    })
  }

  minhaObsarvable(nome:string): Observable<string>{
    return new Observable(subscriber=>{

      if(nome == 'Lucas'){
        subscriber.next('Olá')
        subscriber.next('olá de novo')
        setTimeout(()=>{
          subscriber.next('Olá com delay')
        }, 3000)
      }
      else{
        subscriber.error('Ocorreu um erro')
      }
      
    })
  }
}
