import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    const nav = document.querySelector('.nav-links');
    if (nav) {
      this.menuOpen ? nav.classList.add('active') : nav.classList.remove('active');
    }
  }

  ngOnInit(): void {
  }
}
