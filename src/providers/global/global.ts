import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {

  public mysite : string  = "https://ccheck.unisza.edu.my/";
  //public mysite : string  = "http://18.136.211.207:3000/";
  //public mysite : string  = "http://192.168.43.194/cashweb/app/"; 
  //public mysite : string  = "http://localhost/uniszabc/api/";
  //public mysite : string  = "https://cashless1234.000webhostapp.com/api/";

  
   //$api="https://supercryptofinance.com/";
  public mypdfplugin : string  = "https://supercryptofinance.com/certpdf/web/viewer.php";
  //public mypdfplugin : string  = "https://epay.unisza.edu.my/certpdf/viewer.php";
  //public mypdfplugin : string  = "http://localhost/pdfv/six/web/viewer.php";
  //DEKAT viewer.php,  tukar api sbb xleh post http//... ke $_GET['api']

  constructor(public http: HttpClient) {
    console.log('Hello GlobalProvider Provider');
  }

}