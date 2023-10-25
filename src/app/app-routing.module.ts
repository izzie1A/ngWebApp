import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThreeJsComponent } from './components/slides/three-js/three-js.component';
import { HomePageComponent } from './components/slides/home-page/home-page.component';
import { SettingComponent } from './components/slides/setting/setting.component';
import { ProfileComponent } from './components/slides/profile/profile.component';

import { FileControlComponent } from './components/slides/file-control/file-control.component';
import { ItemCardDetailComponent } from './components/item-card-detail/item-card-detail.component';
import { NotFoundComponent } from './components/slides/not-found/not-found.component';
import { SearchPageComponent } from './components/slides/search-page/search-page.component';
import { ItemCardListComponent } from './components/item-card-list/item-card-list.component';

const routes: Routes = [
  // {path: '**', component: FileControlComponent }, \
  {
    path: 'home', component: HomePageComponent,
    children: [
      {
        path: ':name', // child route path
        component: ThreeJsComponent, // child route component that the router renders
      },
    ],
  },
  { path: 'setting', component: SettingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'firebase', component: ItemCardListComponent },
  { path: 'search', component: SearchPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
