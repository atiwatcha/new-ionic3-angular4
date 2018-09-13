import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  countries1: string[];//ตัวแปรแสดงหน้าวิว
  errorMessage: string;

  constructor(public navCtrl: NavController,public rest: RestProvider) {

  }

  ionViewDidLoad() {
    this.getCountries();
  }

  getCountries() {
    this.rest.getCountries()
       .subscribe(
         countries => this.countries1 = countries,
         error =>  this.errorMessage = <any>error);
  }

}
