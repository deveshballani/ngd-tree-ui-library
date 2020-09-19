import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TreeNode } from './models/tree-node';

@Component({
  selector: 'ngd-tree-ui',
  templateUrl: './ngd-tree-view.component.html',
  styleUrls: ['./ngd-tree-ui.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgdTreeUiComponent implements OnInit {

  @Input()
  nodes: TreeNode[];

  @Output()
  selectionChange = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  selctionChange(node: TreeNode) {
    this.selectionChange.emit(node);
  }

  onChange(node: TreeNode) {
    this.selctionChange(node);
  }

  toggleExpension(node: TreeNode) {
    node.isExpended = !node.isExpended;
  }
}
