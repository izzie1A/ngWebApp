import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapViewerComponent } from './components/slides/map-viewer/map-viewer.component';
import { ThreeJsComponent } from './components/slides/three-js/three-js.component';
import { HomePageComponent } from './components/slides/home-page/home-page.component';
import { SettingComponent } from './components/slides/setting/setting.component';
import { ProfileComponent } from './components/slides/profile/profile.component';

import { FileControlComponent } from './components/slides/file-control/file-control.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'firebase', component:  FileControlComponent },
  { path: 'search', component:  FileControlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
