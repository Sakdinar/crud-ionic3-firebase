import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Song } from '../../models/song.interface';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public songList: Observable<Song[]>;
  constructor(
    public navCtrl: NavController,
    public firestoreProvider: FirestoreProvider
  ) { }

  goToCreatePage(): void {
    this.navCtrl.push('CreatePage');
  }

  ionViewDidLoad() {
    this.songList = this.firestoreProvider.getSongList().valueChanges();
  }

  goToDetailPage(song: Song): void {
    this.navCtrl.push('DetailPage', { song: song });
  }
}