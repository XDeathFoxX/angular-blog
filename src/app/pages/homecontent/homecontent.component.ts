import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { TitleBarComponent } from "../../components/title-bar/title-bar.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-homecontent',
    standalone: true,
    templateUrl: './homecontent.component.html',
    styleUrl: './homecontent.component.css',
    imports: [CommonModule, MenuBarComponent, TitleBarComponent, BigCardComponent, SmallCardComponent, FooterComponent]
})
export class HomecontentComponent {

}
