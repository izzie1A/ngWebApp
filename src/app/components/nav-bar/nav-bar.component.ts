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
    let defaultLink: navBarItem = {dir:'',iconName:'lan'};
    let profile: navBarItem = {dir:'profile',iconName:'login'};

    this.navbarGidContainer = [
      home,
      firebase,
      search,
      profile,
      // defaultLink,
    ];
    this.navBarExpenableContainerArray = [
      home,
      firebase,
      search,
      profile,
      home,
      firebase,
      search,
      profile,
      home,
      firebase,
      search,
      profile,
      home,
      firebase,
      search,
      profile,
      // defaultLink,
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
