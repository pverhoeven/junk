import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent, SidebarIconComponent } from '@jkm/shared/ui';
import { NgIconComponent } from '@ng-icons/core';
import { provideIcons } from '@ng-icons/core';
import {
  heroHome,
  heroUser,
  heroArrowLongDown,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'jkm-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    SidebarIconComponent,
    NgIconComponent,
  ],
  template: ` <jkm-sidebar>
      <jkm-sidebar-icon tooltip="abc">
        <ng-icon name="heroHome"></ng-icon>
      </jkm-sidebar-icon>
      <jkm-sidebar-icon tooltip="def">
        <ng-icon name="heroUser"></ng-icon>
      </jkm-sidebar-icon>
      <jkm-sidebar-icon tooltip="xyz">
        <ng-icon name="heroArrowLongDown"></ng-icon>
      </jkm-sidebar-icon>
    </jkm-sidebar>
    <div class="md:container md:mx-auto pl-20 pt-5">
      <router-outlet></router-outlet>
    </div>`,
  styles: ``,
  viewProviders: [provideIcons({ heroHome, heroArrowLongDown, heroUser })],
})
export class ShellComponent {}
