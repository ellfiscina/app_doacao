import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConhecerPage } from '../conhecer/conhecer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {
  
    }

    showConhecer() {
	this.navCtrl.push(ConhecerPage);
	}
}
