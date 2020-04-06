import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,LoadingController,Loading, Platform} from 'ionic-angular';
import { StartPage } from '../start/start';
import { Storage } from '@ionic/storage';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GlobalProvider } from "../../providers/global/global";
import { Http, Headers, RequestOptions } from '@angular/http'; //ROTI
import { HttpClient,HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from "./../../../node_modules/rxjs/Observable";
import { Modal, ModalController } from 'ionic-angular';
import { PfdmodalPage } from '../pfdmodal/pfdmodal';
import { Courses2Page } from '../courses2/courses2';

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {

  loading: Loading;
  createSuccess = false;

  //start hide
  public buttonClicked: boolean = false;
  public buttonClicked2: boolean = true;
  public onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
    this.buttonClicked2 = !this.buttonClicked2;
      console.log("hide n show");
  }
  //done hide

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public global: GlobalProvider,
              public http     : HttpClient,
              private alertCtrl : AlertController,
              public storage  : Storage,
              public fb         : FormBuilder,
              private loadingCtrl: LoadingController,
              public platform : Platform,
              private modalCtrl: ModalController) {
//platform.registerBackButtonAction(() => {  if(this.buttonClicked3==true){ this.exit();} console.log("backPressed 1");},1);
  }
  public lists : Array<any> = [
    { id : 'c01',
      title: 'Science Algorithm',
      description: 'Eurycoma longifolia'
    },
    { id : 'c02',
      title: 'Bussiness Management',
      description: 'Eurycoma longifolia'
    },
    { id : 'c03',
      title: 'Bussiness Territory',
      description: 'Eurycoma longifolia'
    }
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');
  }

  viewEntry(param : any) : void
  {
     //this.navCtrl.setRoot(Courses2Page, param);
     this.navCtrl.setRoot(Courses2Page, param , {animate: true,direction: "back" });
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

  popup(){
    this.showLoading();
    this.showPopup("Congratulations", "Certificate Claimed");
    this.loading.dismiss();
  }
}
