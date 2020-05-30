import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.albums = this.dataService.getAlbums();
  }

}
