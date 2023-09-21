import { Component } from '@angular/core';

// import * as THREE from 'three';
// import { Three } from './src/Three'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';




@Component({
  selector: 'app-three-js',
  templateUrl: './three-js.component.html',
  styleUrls: ['./three-js.component.css']
})
export class ThreeJsComponent {
  constructor() {
    this.onSceneStart()
  }

  onSearch() {

  }
  onSceneStart() {
  }

  ngOnInit(): void {
    this.createThreeJsBox();
  }

  createThreeJsBox(): void {
    // const canvas = document.getElementById('canvas-box');

    // const scene = new THREE.Scene();

    // const material = new THREE.MeshToonMaterial();

    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    // scene.add(ambientLight);

    // const pointLight = new THREE.PointLight(0xffffff, 0.5);
    // pointLight.position.x = 2;
    // pointLight.position.y = 2;
    // pointLight.position.z = 2;
    // scene.add(pointLight);
 }
}

