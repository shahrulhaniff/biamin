import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams, LoadingController,Loading, AlertController, Events } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { GlobalProvider } from "../../providers/global/global";
import { StartPage } from '../start/start';
import { Observable } from "./../../../node_modules/rxjs/Observable";
import 'rxjs/add/operator/map';
import { ProfilePage } from '../profile/profile';
//import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public usrid    : any;
  public nama     : any;
  public items    : Array<any> = [];
  public fetch    : any; // fetch one data value only from php server unlike items
  public form     : FormGroup;
  private baseURI : string  = this.global.mysite;
  loading: Loading;
  registerCredentials = { username: '', password: '' };
  createSuccess = false;
  shownama = "";
  
  constructor(public global: GlobalProvider,
              public navCtrl: NavController, 
              public navParams: NavParams, 
              public http       : HttpClient,
              private alertCtrl : AlertController,
              public fb         : FormBuilder,
              private loadingCtrl: LoadingController,
              public storage : Storage,
              public events: Events,
              public menuCtrl: MenuController
              /*private modal: ModalController */
              ) {
                 this.menuCtrl.enable(false, 'myMenu');
    /* Buat validation */
    this.form = fb.group({
      "username"    : ["", Validators.required],
      "password"    : ["", Validators.required]
   });
  }

  //public usrdb : Array<any> = [];
  //public pwddb : Array<any> = [];
  public tokenz : any;
  public firstnamez : any;
  public lastnamez : any;
  
/////////////////////////// RISHAM


 login() {
  let usr     : string    = this.form.controls["username"].value,
      pwd     : string    = this.form.controls["password"].value;

   this.storage.set('user', usr);
   this.storage.set('pwd', pwd);
   console.log("SIMPAN SESSION LOGIN: ",usr);
   //this.showPopup("Login Successful",postMessage);
   this.navCtrl.setRoot(ProfilePage);
}
  //showloading
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  //Untuk Popup
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Wait..',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  load() : void
  {
     this.http
     .get(this.baseURI + 'login.php')
     .subscribe((data : any) =>
     {
        console.dir(data);
        this.items = data;
     },
     (error : any) =>
     {
        console.dir(error);
     });
  }

  public showuser : any;
  ionViewDidLoad() {
    this.storage.get('user').then((user) => {
      console.log("simpan storage "+user);
      this.showuser = user;
    });
    console.log('ionViewDidLoad LoginPage-->'+this.showuser);
    //this.load(); kita takyah load data dulu nati berat
    this.storage.get('nama').then((nama) => {this.shownama = nama; });
  }

  scan(): void {
    this.navCtrl.push('ScanPage');
 }



}