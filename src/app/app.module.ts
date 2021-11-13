import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaCriarComponent } from './tarefa/criar/tarefa-criar.component';
import { TarefaListarComponent } from './tarefa/listar/tarefa-listar.component';
import { TarefaEditarComponent } from './tarefa/editar/tarefa-editar.component';
import { LocalStorageTarefaService } from './tarefa/services/local-storage-tarefa.service';
import { ExemploTarefaGuard } from './shared/guards/exemplo-tarefa.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpTarefaService } from './tarefa/services/http-tarefa.service';

@NgModule({
  declarations: [
    AppComponent,
    TarefaCriarComponent,
    TarefaListarComponent,
    TarefaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    {provide: 'ITarefaServiceToken', useClass: LocalStorageTarefaService},
    {provide: 'IHttpTarefaServiceToken', useClass: HttpTarefaService},
    ExemploTarefaGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
