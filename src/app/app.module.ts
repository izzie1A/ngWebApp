import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemCardListComponent } from './components/item-card-list/item-card-list.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MapViewerComponent } from './components/slides/map-viewer/map-viewer.component';
import { ProfileComponent } from './components/slides/profile/profile.component';
import { ThreeJsComponent } from './components/slides/three-js/three-js.component';
import { HomePageComponent } from './components/slides/home-page/home-page.component';
import { SettingComponent } from './components/slides/setting/setting.component';
import { FileControlComponent } from './components/slides/file-control/file-control.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { ItemCardViewerComponent } from './components/item-card-viewer/item-card-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ItemCardListComponent,
    NavBarComponent,
    SignInComponent,
    MapViewerComponent,
    ProfileComponent,
    ThreeJsComponent,
    HomePageComponent,
    SettingComponent,
    FileControlComponent,
    ImageViewerComponent,
    ItemCardViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
