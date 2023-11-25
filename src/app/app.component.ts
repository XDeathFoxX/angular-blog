import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleBarComponent } from './components/title-bar/title-bar.component'
import { BigCardComponent } from './components/big-card/big-card.component'
import { MenuBarComponent } from './components/menu-bar/menu-bar.component'
import { SmallCardComponent } from './components/small-card/small-card.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TitleBarComponent, BigCardComponent,
  MenuBarComponent, SmallCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
