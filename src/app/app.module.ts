import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TextAvatarDirective } from '../directives/text-avatar/text-avatar';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { Toast } from '@ionic-native/toast/ngx';
import { GlobalProvider } from '../providers/global/global';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ProfilePage } from '../pages/profile/profile';
import { IonTextAvatar } from 'ionic-text-avatar';

import { ParallaxHeader } from '../directives/parallax-header/parallax-header';
import { HubungiPage } from '../pages/hubungi/hubungi';
import { PenafianPage } from '../pages/penafian/penafian';
import { StartPage } from '../pages/start/start';
import { PfdmodalPage } from '../pages/pfdmodal/pfdmodal';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { CoursesPage } from '../pages/courses/courses';
import { Courses2Page } from '../pages/courses2/courses2';
import { NotesPage } from '../pages/notes/notes';
import { DiscussionPage } from '../pages/discussion/discussion';
import { AssignmentPage } from '../pages/assignment/assignment';
import { QuizPage } from '../pages/quiz/quiz';
import { AttendancePage } from '../pages/attendance/attendance';
import { VideoPage } from '../pages/video/video';
import { QlinkPage } from '../pages/qlink/qlink';
import { SurveyPage } from '../pages/survey/survey';
//import {  FileTransfer,  FileTransferObject  } from '@ionic-native/file-transfer';
//import { Clipboard } from '@ionic-native/clipboard';
//import { PdfViewerPage } from '../pages/pdf-viewer/pdf-viewer';
//import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
//import { PdfViewerModule } from 'ng2-pdf-viewer';
//import { SimplePdfViewerModule } from 'simple-pdf-viewer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    TextAvatarDirective,
    SearchPipe,
    SortPipe,
    ProfilePage,
    IonTextAvatar,
    HubungiPage,
    StartPage,
    PenafianPage,
    CoursesPage,
    Courses2Page,
    NotesPage,
    DiscussionPage,
    AssignmentPage,
    QuizPage,
    AttendancePage,
    VideoPage,
    QlinkPage,
    SurveyPage,
    //PdfViewerPage,
    PfdmodalPage,
    ParallaxHeader

  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    NgxQRCodeModule
    //,PdfJsViewerModule
    //,PdfViewerModule //SEPATUTNYA SINI
    //,SimplePdfViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ProfilePage,
    HubungiPage,
    StartPage,
    PenafianPage,
    CoursesPage,
    Courses2Page,
    NotesPage,
    DiscussionPage,
    AssignmentPage,
    QuizPage,
    AttendancePage,
    VideoPage,
    QlinkPage,
    SurveyPage,
    PfdmodalPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    Toast,
    GlobalProvider,
    InAppBrowser,
    File,
    FileOpener
    //,FileTransfer  
    //,FileTransferObject
    //,Clipboard
    ,DocumentViewer
    

  ]
})
export class AppModule {}
