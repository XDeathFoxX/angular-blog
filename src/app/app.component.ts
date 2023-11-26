import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TitleBarComponent } from './components/title-bar/title-bar.component'
import { BigCardComponent } from './components/big-card/big-card.component'
import { MenuBarComponent } from './components/menu-bar/menu-bar.component'
import { SmallCardComponent } from './components/small-card/small-card.component'
import { FooterComponent } from './components/footer/footer.component'
import { HomecontentComponent } from './pages/homecontent/homecontent.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TitleBarComponent, BigCardComponent,
  MenuBarComponent, SmallCardComponent, RouterLink, RouterLinkActive, FooterComponent, HomecontentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}