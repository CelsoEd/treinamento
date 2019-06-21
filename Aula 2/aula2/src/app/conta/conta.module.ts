import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemContasComponent } from './listagem-contas/listagem-contas.component';
import { EstadoContaPipe } from './pipes/estado-conta.pipe';
import { TipoContaPipe } from './pipes/tipo-conta.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ListagemContasComponent],

  declarations: [ListagemContasComponent, EstadoContaPipe, TipoContaPipe]
})
export class ContaModule { }
