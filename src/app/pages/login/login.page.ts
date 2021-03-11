import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalLoginPage } from 'src/app/modal-login/modal-login.page';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async showModalLogin() {
    const modal = await this.modalController.create({
      component: ModalLoginPage
    });

    modal.present();
  }

}
