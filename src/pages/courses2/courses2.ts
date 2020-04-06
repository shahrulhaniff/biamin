import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoursesPage } from '../courses/courses';
import { NotesPage } from '../notes/notes';
import { QuizPage } from '../quiz/quiz';
import { AssignmentPage } from '../assignment/assignment';
import { DiscussionPage } from '../discussion/discussion';
import { AttendancePage } from '../attendance/attendance';

/**
 * Generated class for the Courses2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-courses2',
  templateUrl: 'courses2.html',
})
export class Courses2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
  ionViewWillEnter(): void {
    if (this.navParams.get("record")) {
      this.selectEntry(this.navParams.get("record"));
      console.log('Data dari navparam min: ', this.navParams.get("record"));
    }
  }

    /* STEP1: Buat list */
    public list2: Array<any> = [
    {
      id: 'c01',
      title: 'Science Algo'
    },
    {
      id: 'c02',
      title: 'Busines Manager'
    },
    {
      id: 'c03',
      title: 'Busines Third'
    }
    ];
    /* STEP2: Declare List */
    public id: Array<any> = [];
    public title: Array<any> = [];
    public showid;
    public showtitle;
    /* STEP3: Buat selectEntry */
    selectEntry(list: any): void {
    this.id = this.list2.map(items => items.id);
    this.title = this.list2.map(items => items.title);
    /* STEP4: Buat show utk guna dlm interface */
    for (let i = 0; i <= this.list2.length; i++) {
      console.log('COMPARE:', list.id,'=',this.id[i]);
      if (list.id == this.id[i]) {
        this.showid = this.id[i];
        this.showtitle = this.title[i];
        break;
      }
    }
  }

  
  navToNotes(): void {
  this.navCtrl.push(NotesPage);
  }
  navToDiscussion(): void {
  this.navCtrl.push(DiscussionPage);
  }
  navToAssignment(): void {
  this.navCtrl.push(AssignmentPage);
  }
  navToQuiz(): void {
  this.navCtrl.push(QuizPage);
  }
  navToAtt(): void {
  this.navCtrl.push(AttendancePage);
  }
  navToBack(): void {
  this.navCtrl.setRoot(CoursesPage, {} , {animate: true,direction: "forward" });
  }
}
