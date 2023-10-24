import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  navbarGidContainer:any = [];
  navBarExpenableContainerArray:any = [];
  navExpanded = false;
  navHeight = '0px';

  selector:any | undefined

  constructor(){
    let home: navBarItem = {dir:'home',iconName:'home'};
    let firebase: navBarItem = {dir:'firebase',iconName:'folder'};
    let search: navBarItem = {dir:'search',iconName:'search'};
    let profile: navBarItem = {dir:'profile',iconName:'login'};
    let defaultLink: navBarItem = {dir:'ss',iconName:'lan'};

    this.navBarExpenableContainerArray.push(new navBarItem2('ss','lan'));
    this.navBarExpenableContainerArray.push(new navBarItem2('home/name','new'));
 
    // this.navBarExpenableContainerArray.push(defaultLink);
    // this.navBarExpenableContainerArray.push(profile);
    this.navbarGidContainer = [
      home,
      firebase,
      search,
      profile,
    ];


  }

  expanNavbar(navBarExpenableContainerArrayRef:HTMLElement){
    this.navHeight = this.navExpanded ? '0vh' : 'auto';
    this.navExpanded = this.navExpanded ? false : true;
    // navBarExpenableContainerArrayRef.style.height = this.navHeight;
    navBarExpenableContainerArrayRef.classList.toggle("navBarExpenableContainerChange");
  }

  myFunction(inputDiv: any) {
    inputDiv.classList.toggle("change");
  }

  self(input:any){
    let selected = this.selector == input;
    if(selected!!){
      input.id = "newid";
      console.log(input)
    }
  }
}

export interface navBarItem{
  dir:string;
  iconName:string;
}

class navBarItem2{
  dir:string;
  iconName:string;
  constructor(dir:string,iconName:string){
    this.dir = dir;
    this.iconName = iconName;
  }
}