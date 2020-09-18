import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgdTreeUiComponent } from './ngd-tree-ui.component';



@NgModule({
  declarations: [NgdTreeUiComponent],
  imports: [
    CommonModule
  ],
  exports: [NgdTreeUiComponent]
})
export class NgdTreeUiModule { }
