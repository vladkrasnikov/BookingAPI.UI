import {inject, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, Routes} from '@angular/router';
import {SideBarMenuComponent} from "./layout/side-bar-menu/side-bar-menu.component";
import {CompanyListComponent} from "./modules/company-list/company-list.component";
import {CompanyDetailsComponent} from "./modules/company-details/company-details.component";
import {CompanyService} from "./core/shared/services/company.service";

const routes: Routes = [
  // { path: 'dashboard', loadChildren: () => import('./src/app/dashboard/dashboard.module').then(m => m.DashboardModule) },
  // { path: 'heroes', loadChildren: () => import('./src/app/heroes/heroes.module').then(m => m.HeroesModule) },
  // { path: 'crisis-center', loadChildren: () => import('./src/app/crisis-center/crisis-center.module').then(m => m.CrisisCenterModule) },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: '**', redirectTo: '/dashboard' }
  {
    path: ':companyId',
    component: CompanyDetailsComponent,
    resolve: {
      data: (route: ActivatedRouteSnapshot) => {
        const companyId = route.params['companyId'];
        return inject(CompanyService).getCompanyById(companyId);
      }
    }
  },
  { path: '', component: CompanyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
