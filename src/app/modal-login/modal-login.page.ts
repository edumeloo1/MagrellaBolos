import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.page.html',
  styleUrls: ['./modal-login.page.scss'],
})
export class ModalLoginPage implements OnInit {

  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/home']);
    console.log('clicou!');
  }

  setModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    })
  }
}
