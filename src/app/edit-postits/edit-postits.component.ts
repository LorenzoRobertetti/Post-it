import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { postIt } from '../app.component';
import { DataBaseService } from '../database.service';

@Component({
  selector: 'app-edit-postits',
  templateUrl: './edit-postits.component.html',
  styleUrls: ['./edit-postits.component.css']
})
export class EditPostitsComponent implements OnInit {
  constructor(private dbs: DataBaseService) {}

  @Input() editpostits: Array<postIt>;
  @Input() editfavoritesPostits: Array<postIt>;

  @Output() eventEditPosts = new EventEmitter<Array<postIt>>();
  @Output() eventEditFavPosts = new EventEmitter<Array<postIt>>();

  sendPosts() {
    this.eventEditPosts.emit(this.editpostits);
    this.eventEditFavPosts.emit(this.editfavoritesPostits);
  }

  addPostIt(newTitle: string, newContent: string, newFavourite: boolean) {
    let newPostit = {
      title: newTitle,
      content: newContent,
      favourite: newFavourite
    };
    this.editpostits.push(newPostit);
    if (newFavourite) this.editfavoritesPostits.push(newPostit);

    this.uploadPostIts();
    this.sendPosts();
  }

  deletePostIt(item: postIt) {
    this.editpostits = this.editpostits.filter((x: postIt) => item !== x);
    this.uploadPostIts();
    this.sendPosts();
  }

  uploadPostIts() {
    var obj = {
      postits: this.editpostits
    };
    this.dbs.putData(obj).subscribe(
      (x: any) => {
        console.log('success');
      },
      err => console.error('Observer got an error: ' + err)
    );
  }

  resetPostit() {
    if (
      confirm(
        'Are you sure you want to delete your data? This cannot be undone'
      )
    ) {
      this.editpostits = [];
      this.editfavoritesPostits = [];
      this.uploadPostIts();
      this.sendPosts();
    }
  }

  ngOnInit() {}
}
