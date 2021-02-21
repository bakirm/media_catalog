import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/models/provider.model';
import { Observable } from 'rxjs';
import { ProviderService } from 'src/app/services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css'],
})
export class ProviderListComponent implements OnInit {
  providers?: Observable<Provider[]>;

  constructor(private providerService: ProviderService, private router: Router) {}

  ngOnInit(): void {
    this.retrieveProviders();
  }

  retrieveProviders(): void {
    this.providers = this.providerService.getAll();
  }

  deleteProvider(id: number): void {
    this.providerService.delete(id).subscribe(
      (data) => {
        console.log(data);
        this.retrieveProviders();
      },
      (error) => console.log(error)
    );
  }

  providerDetails(id: number) {
    this.router.navigate(['provider', id]);
  }
}
