import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

import { MethOnePageComponent } from './meth-one-page/meth-one-page.component';
import { MethOneStep1Component } from './meth-one-page/meth-one-step1/meth-one-step1.component';
import { MethOneStep2Component } from './meth-one-page/meth-one-step2/meth-one-step2.component';
import { MethOneStep3Component } from './meth-one-page/meth-one-step3/meth-one-step3.component';

import { MethTwoPageComponent } from './meth-two-page/meth-two-page.component';
import { MethTwoStep1Component } from './meth-two-page/meth-two-step1/meth-two-step1.component';
import { MethTwoStep2Component } from './meth-two-page/meth-two-step2/meth-two-step2.component';
import { MethTwoStep3Component } from './meth-two-page/meth-two-step3/meth-two-step3.component';

import { MethThreePageComponent } from './meth-three-page/meth-three-page.component';
import { MethThreeStep1Component } from './meth-three-page/meth-three-step1/meth-three-step1.component';
import { MethThreeStep2Component } from './meth-three-page/meth-three-step2/meth-three-step2.component';
import { MethThreeStep3Component } from './meth-three-page/meth-three-step3/meth-three-step3.component';

import { MethFourPageComponent } from './meth-four-page/meth-four-page.component';
import { MethFourStep1Component } from './meth-four-page/meth-four-step1/meth-four-step1.component';
import { MethFourStep2Component } from './meth-four-page/meth-four-step2/meth-four-step2.component';
import { MethFourStep3Component } from './meth-four-page/meth-four-step3/meth-four-step3.component';
import { MethFivePageComponent } from './meth-five-page/meth-five-page.component';
import { MethFiveStep1Component } from './meth-five-page/meth-five-step1/meth-five-step1.component';
import { MethFiveStep2Component } from './meth-five-page/meth-five-step2/meth-five-step2.component';
import { MethFiveStep3Component } from './meth-five-page/meth-five-step3/meth-five-step3.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CheckimgPageComponent } from './checkimg-page/checkimg-page.component';
import { CheckimgResultComponent } from './checkimg-page/checkimg-result/checkimg-result.component';
import { TokenInterceptor } from './shared/classes/token.interceptor';
import { RegPageComponent } from './reg-page/reg-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './components/loader/loader.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminLoginPageComponent } from './admin-layout/admin-login-page/admin-login-page.component';
import { AdminDashboardLayoutComponent } from './admin-layout/admin-dashboard-layout/admin-dashboard-layout.component';
import { AdminDashboardHistoryPageComponent } from './admin-layout/admin-dashboard-history-page/admin-dashboard-history-page.component';
import { AdminDashboardQueriesPageComponent } from './admin-layout/admin-dashboard-queries-page/admin-dashboard-queries-page.component';
import { AdminDashboardUsersPageComponent } from './admin-layout/admin-dashboard-users-page/admin-dashboard-users-page.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MethTwoPageComponent,
    MethTwoStep1Component,
    MethTwoStep2Component,
    MethTwoStep3Component,
    MethOnePageComponent,
    MethOneStep1Component,
    MethOneStep2Component,
    MethOneStep3Component,
    MethThreePageComponent,
    MethThreeStep1Component,
    MethThreeStep2Component,
    MethThreeStep3Component,
    MethFourPageComponent,
    MethFourStep1Component,
    MethFourStep2Component,
    MethFourStep3Component,
    MethFivePageComponent,
    MethFiveStep1Component,
    MethFiveStep2Component,
    MethFiveStep3Component,
    LoginPageComponent,
    CheckimgPageComponent,
    CheckimgResultComponent,
    RegPageComponent,
    HistoryPageComponent,
    LoaderComponent,
    AdminLayoutComponent,
    AdminLoginPageComponent,
    AdminDashboardLayoutComponent,
    AdminDashboardHistoryPageComponent,
    AdminDashboardQueriesPageComponent,
    AdminDashboardUsersPageComponent,
    MainLayoutComponent
  ],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatProgressSpinnerModule,

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
