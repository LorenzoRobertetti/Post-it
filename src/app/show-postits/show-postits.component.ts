import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { postIt } from '../app.component';

@Component({
  selector: 'app-show-postits',
  templateUrl: './show-postits.component.html',
  styleUrls: ['./show-postits.component.css']
})
export class ShowPostitsComponent implements OnInit {
  openPostit: postIt;
  @Input() showpostits: Array<postIt>;
  @Input() showfavoritesPostits: Array<postIt>;

  @Output() eventPostsItToDelete = new EventEmitter<postIt>();

  sendPostsItToDelete(postItToDelete: postIt) {
    this.eventPostsItToDelete.emit(postItToDelete);
  }

  postitsToShow(favoriteMode: boolean) {
    return favoriteMode ? this.showfavoritesPostits : this.showpostits;
  }

  showContent(item: postIt) {
    this.openPostit = item == this.openPostit ? null : item;
  }

  ngOnInit() {}
}
