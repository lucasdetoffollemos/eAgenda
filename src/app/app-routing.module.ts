import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemploTarefaGuard } from './shared/guards/exemplo-tarefa.guard';
import { TarefaCriarComponent } from './tarefa/criar/tarefa-criar.component';
import { TarefaEditarComponent } from './tarefa/editar/tarefa-editar.component';
import { TarefaListarComponent } from './tarefa/listar/tarefa-listar.component';

const routes: Routes = [
                        { path: 'tarefa/criar', component: TarefaCriarComponent },//canActivate: [ExemploTarefaGuard] 
                        {path: 'tarefa/listar', component: TarefaListarComponent}, //canActivate: [ExemploTarefaGuard]
                        {path: 'tarefa/editar/:id', component: TarefaEditarComponent},
                        { path: '', redirectTo: '/', pathMatch: 'full' }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
