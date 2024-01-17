import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'jkm-sidebar-icon',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  template: `<div class="sidebar-icon group">
    <ng-content></ng-content>
    <span class="sidebar-tooltip group-hover:scale-100">
      {{ tooltip }}
    </span>
  </div>`,
  styles: ``,
})
export class SidebarIconComponent {
  @Input() tooltip: string = '';
}
