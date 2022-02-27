import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  isShrinked: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any): void {
    console.log(event);
    this.isShrinked = true;
    const nav = document.getElementById('main-nav') as HTMLElement;
    const searchButton = document.getElementById('search') as HTMLElement;

    var currentScroll = document.documentElement.scrollTop;
    
    console.log("currentScroll: ", currentScroll);
    if (currentScroll > 0) {
      nav.style.color = 'black';
      nav.style.background = 'white';
      searchButton.style.height = '300px';

    } else {
      nav.style.color = 'white';
      nav.style.background = 'transparent';
    }

    
    
    
  }

}
