import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAddComponent } from '../home/home-add/home-add.component';
import { HomeComponent } from '../home/home/home.component';
import { HomeDetailsComponent } from '../home/home-details/home-details.component';
import { HomeThreatComponent } from '../home/home-threat/home-threat.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
import { HomesResolverService } from '../resolvers/homes-resolver.service';
import { HomeResolverService } from '../resolvers/home-resolver.service';
import { HomeAddGuard } from '../home/home-add/home-add.guard';
import { HomeData } from '../home/home-data';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    HomeAddComponent,
    HomeComponent,
    HomeDetailsComponent,
    HomeThreatComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(HomeData),
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        resolve: { resolvedData: HomesResolverService }
      },
      {
        path: 'threat',
        component: HomeThreatComponent,
        resolve: { resolvedData: HomesResolverService }
      },
      {
        path: ':id',
        component: HomeDetailsComponent,
        resolve: { resolvedData: HomeResolverService }
      },
      {
        path: ':id/add',
        component: HomeAddComponent,
        canDeactivate: [HomeAddGuard],
        resolve: { resolvedData: HomeResolverService }
      },
    ])
  ]
})
export class HomeModule { }
