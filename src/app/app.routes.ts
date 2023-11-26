import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomecontentComponent } from './pages/homecontent/homecontent.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [
    {
        path:'',component:HomecontentComponent
    },
    {
        path:'content',component:ContentComponent
    }
];