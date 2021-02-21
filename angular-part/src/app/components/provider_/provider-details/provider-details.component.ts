import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Provider } from 'src/app/models/provider.model';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css'],
})
export class ProviderDetailsComponent implements OnInit {
  id?: number;
  provider?: Provider;

  constructor(
    private providerService: ProviderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.provider = new Provider();
    this.id = this.route.snapshot.params['id'];
    this.providerService.get(this.id).subscribe(
      (data) => {
        console.log(data);
        this.provider = data;
      },
      (error) => console.log(error)
    );
  }

  getProvider(id: string): void {
    this.providerService.get(id).subscribe(
      (data) => {
        this.provider = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateProvider() {
    this.providerService.update(this.id, this.provider).subscribe(
      (data) => {
        console.log(data);
        this.provider = new Provider();
        this.goToProviders();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.updateProvider();
  }

  goToProviders() {
    this.router.navigate(['/provider']);
  }
}
