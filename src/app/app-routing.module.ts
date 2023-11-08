import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SideBarMenuComponent} from "./layout/side-bar-menu/side-bar-menu.component";
import {CompanyListComponent} from "./modules/company-list/company-list.component";

const routes: Routes = [
  // { path: 'dashboard', loadChildren: () => import('./src/app/dashboard/dashboard.module').then(m => m.DashboardModule) },
  // { path: 'heroes', loadChildren: () => import('./src/app/heroes/heroes.module').then(m => m.HeroesModule) },
  // { path: 'crisis-center', loadChildren: () => import('./src/app/crisis-center/crisis-center.module').then(m => m.CrisisCenterModule) },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: '**', redirectTo: '/dashboard' }
  { path: '', component: CompanyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
