import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MethOnePageComponent } from './meth-one-page/meth-one-page.component';
import { MethTwoPageComponent } from './meth-two-page/meth-two-page.component';
import { MethThreePageComponent } from './meth-three-page/meth-three-page.component';
import { MethFourPageComponent } from './meth-four-page/meth-four-page.component';
import { MethFivePageComponent } from './meth-five-page/meth-five-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Authguard } from './services/auth.guard';
import { CheckimgPageComponent } from './checkimg-page/checkimg-page.component';
import { RegPageComponent } from './reg-page/reg-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminLoginPageComponent } from './admin-layout/admin-login-page/admin-login-page.component';
import { AdminDashboardLayoutComponent } from './admin-layout/admin-dashboard-layout/admin-dashboard-layout.component';
import { AdminDashboardHistoryPageComponent } from './admin-layout/admin-dashboard-history-page/admin-dashboard-history-page.component';
import { AdminDashboardQueriesPageComponent } from './admin-layout/admin-dashboard-queries-page/admin-dashboard-queries-page.component';
import { AdminDashboardUsersPageComponent } from './admin-layout/admin-dashboard-users-page/admin-dashboard-users-page.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: '', component: MainPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'reg', component: RegPageComponent},
    {path: 'check', component: CheckimgPageComponent},
    {path: 'history', component: HistoryPageComponent, canActivate: [Authguard]},
    {path: 'methone', component: MethOnePageComponent, canActivate: [Authguard]},
    {path: 'methtwo', component: MethTwoPageComponent, canActivate: [Authguard]},
    {path: 'meththree', component: MethThreePageComponent, canActivate: [Authguard]},
    {path: 'methfour', component: MethFourPageComponent, canActivate: [Authguard]},
    {path: 'methfive', component: MethFivePageComponent, canActivate: [Authguard]},
  ]},
  {path: 'admin', children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: AdminDashboardLayoutComponent, children: [
      {path: 'history', component: AdminDashboardHistoryPageComponent},
      {path: 'queries', component: AdminDashboardQueriesPageComponent},
      {path: 'users', component: AdminDashboardUsersPageComponent}
    ]}
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
