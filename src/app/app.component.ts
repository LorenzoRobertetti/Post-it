import { Component, ViewChild } from '@angular/core';
import { EditPostitsComponent } from './edit-postits/edit-postits.component';

export class postIt {
  title: string;
  content: string;
  favourite: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Post-it web service';
  loggedin: boolean = false;
  key: string = undefined;
  postits: Array<postIt> = [];
  favoritesPostits: Array<postIt> = [];

  receiveEvent1($event) {
    this.postits = $event;
  }

  receiveEvent2($event) {
    this.favoritesPostits = $event;
  }

  receiveEventLoggedin($event) {
    this.key = $event;
    this.loggedin = true;
  }

  @ViewChild(EditPostitsComponent, { static: false }) child;

  receiveEventPostItToDelete($event) {
    this.child.deletePostIt($event);
  }
}
