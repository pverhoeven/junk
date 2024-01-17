import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { SidebarIconComponent } from './sidebar-icon.component';

@Component({
  selector: 'jkm-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `<div
    class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg"
  >
    <ng-content></ng-content>
  </div>`,
  styles: ``,
})
export class SidebarComponent {}
