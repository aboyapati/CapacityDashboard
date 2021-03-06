import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import { BreadcrumbsComponent } from './layouts/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layouts/admin/title/title.component';
import { ScrollModule } from './scroll/scroll.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ConfigService } from './config.service';
import { ExcelService } from './excel.service';
import { DatacenterComponent } from './components/data/datacenter/datacenter.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    BreadcrumbsComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes, { useHash: false }),
    FormsModule,
    HttpModule,
    ScrollModule,
    AmChartsModule,
    AngularFontAwesomeModule
  ],
  exports: [ScrollModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ConfigService,
    DatacenterComponent,
    ExcelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
