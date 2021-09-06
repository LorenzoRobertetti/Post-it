import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataBaseService } from '../database.service';

import { postIt } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private dbs: DataBaseService) {}

  messageError: boolean = false;

  logpostits: Array<postIt> = [];
  logfavoritesPostits: Array<postIt> = [];

  @Output() eventPosts = new EventEmitter<Array<postIt>>();
  @Output() eventFavPosts = new EventEmitter<Array<postIt>>();
  @Output() eventLoggedin = new EventEmitter<string>();

  sendPosts() {
    this.eventPosts.emit(this.logpostits);
    this.eventFavPosts.emit(this.logfavoritesPostits);
    this.eventLoggedin.emit(this.dbs.key);
  }

  generateNewKey() {
    this.dbs
      .generateKey()
      .subscribe(
        (x: any) => this.login(x),
        err => console.error('Observer got an error: ' + err)
      );
  }

  login(key: string) {
    this.messageError = false;
    this.dbs.key = key;
    this.dbs.getData().subscribe(
      (x: any) => {
        var obj = JSON.parse(x);
        this.logpostits = obj.postits;
        if (obj.postits == undefined) {
          this.logpostits = [];
          this.uploadPostIts();
        }
        this.logfavoritesPostits = this.logpostits.filter(x => x.favourite);
        this.sendPosts();
      },
      err => {
        this.dbs.key = undefined;
        this.messageError = true;
        console.log('Login fallito');
        console.error('Observer got an error: ' + err);
      }
    );
  }

  uploadPostIts() {
    var obj = {
      postits: this.logpostits
    };
    this.dbs.putData(obj).subscribe(
      (x: any) => {
        console.log('success');
      },
      err => console.error('Observer got an error: ' + err)
    );
  }

  ngOnInit() {}
}
