
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragPlaceholder } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';

import { Component, CUSTOM_ELEMENTS_SCHEMA, NgZone } from '@angular/core';
// import { NgtCanvas } from 'angular-three';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-three-js',
  templateUrl: './three-js.component.html',
  styleUrls: ['./three-js.component.css'],
  // standalone: true,
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // imports: [NgtCanvas],
})
export class ThreeJsComponent {

  searchText: string = '';
  condition: boolean = true;

  t: number[] = [1, 2, 3, 4, 5]
  counter: number = 0;
  sinWave: number[] = [1, 12];

  autoSaveInterval: NodeJS.Timeout | null = null;
  holdInterval: NodeJS.Timeout | null = null;

  ss = 'top:100px';
  sinHeight = 100;
  rateX = 2;
  presser = 0;

  constructor() {
    this.timer();
    console.log(this.factorial(5));
  };


  timer() {
    this.autoSaveInterval = setInterval(() => {
      this.counter = this.counter + 0.01;
      let x = (Math.sin(this.counter) * this.sinHeight / 2) + (this.sinHeight / 2);
      let y = (Math.cos(this.counter) * this.sinHeight / 2) * this.rateX + (this.sinHeight / 2);
      this.ss = 'left:' + x.toString() + 'px;' + 'bottom:' + y.toString() + 'px;';
    },
      10);
  }

  sinArrayPush() {
    if (this.sinWave.length > 9) {
      this.sinWave[0]
    }
  }

  whilePressIng(range: number) {
    console.log('meowee')
    const intervalId = setInterval(() => {
      this.presser = this.presser + range;
    }, 1000);
  }

  factorial(n: number): number {
    if (n <= 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }

  recurrection(n: number): number {
    if (n <= 1) {
      return 1;
    } else {
      return n * this.recurrection(n - 1);
    }
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
  editTask(list: string, task: Task): void { }

}
export interface Task {
  id?: string;
  title: string;
  description: string;
}
