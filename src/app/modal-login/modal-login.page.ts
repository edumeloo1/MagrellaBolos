import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.page.html',
  styleUrls: ['./modal-login.page.scss'],
})
export class ModalLoginPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/home']);

    console.log('clicou!')
}
}
