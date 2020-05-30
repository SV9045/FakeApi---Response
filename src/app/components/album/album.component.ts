import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  photos;
  albumId: number;
  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // getting album Id from route.
    this.albumId = this.route.snapshot.params.albumId;
    this.photos = this.dataService.getAlbum(this.albumId);
  }

}
