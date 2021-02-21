import { Component, OnInit } from '@angular/core';
import { MediaitemService } from 'src/app/services/mediaitem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Mediaitem } from 'src/app/models/mediaitem.model';

@Component({
  selector: 'app-mediaitem-details',
  templateUrl: './mediaitem-details.component.html',
  styleUrls: ['./mediaitem-details.component.css'],
})
export class MediaitemDetailsComponent implements OnInit {
  id?: number;
  mediaitem?: Mediaitem;

  constructor(
    private mediaitemService: MediaitemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mediaitem = new Mediaitem();
    this.id = this.route.snapshot.params['id'];
    this.mediaitemService.get(this.id).subscribe(
      (data) => {
        console.log(data);
        this.mediaitem = data;
      },
      (error) => console.log(error)
    );
  }

  getMediaitem(id: string): void {
    this.mediaitemService.get(id).subscribe(
      (data) => {
        this.mediaitem = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateMediaitem() {
    this.mediaitemService.update(this.id, this.mediaitem).subscribe(
      (data) => {
        console.log(data);
        this.mediaitem = new Mediaitem();
        this.goToMediaitems();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.updateMediaitem();
  }

  goToMediaitems() {
    this.router.navigate(['/mediaitem']);
  }
}
