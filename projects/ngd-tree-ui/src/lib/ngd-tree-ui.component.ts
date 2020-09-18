import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from './models/tree-node';

@Component({
  selector: 'lib-ngd-tree-ui',
  template: `
  <ul  class="tree-node" *ngFor="let node of nodes">
    <li>
      <div>{{node.name}}</div>
      <lib-ngd-tree-ui *ngIf="node.children" [nodes]="node.children"></lib-ngd-tree-ui>
    </li>
  </ul>`,
  styles: []
})
export class NgdTreeUiComponent implements OnInit {

  @Input()
  nodes: TreeNode[];

  constructor() { }

  ngOnInit(): void {
  }

}
