import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor
  (
    private alertController: AlertController,
    private router: Router,
  )
  { }

  uwu() {
    this.pololeo();
  }



  async pololeo() {
    const alert = await this.alertController.create({
      header: "Para mi waifu 👉👈",
      message: "¿quieres pololear conmigo? ❣",
      buttons: [
        {
          text: 'Sí',
          handler: () => {
            this.dijoSi();
          }
        },
        {
          text: 'Sí',
          handler: () => {
            this.dijoSi();
          }
        }
      ]
    });
    await alert.present();
    //Que se cierre cuando aprete el botón
    await alert.onDidDismiss();
  }

  dijoSi(){
    this.aplicarSonido();
    this.router.navigate(['/osi']);
  }


  aplicarSonido(): void {
    const audio = new Audio();
    audio.src = '../assets/sounds/cancion.mp3';
    audio.load();
    audio.play();
  }

}
