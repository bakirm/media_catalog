import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/models/provider.model';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css'],
})
export class AddProviderComponent implements OnInit {
  provider: Provider = {
    providername: '',
  };
  submitted = false;
  submittedsame = false;

  constructor(private providerService: ProviderService) {}

  ngOnInit(): void {}

  saveProvider(): void {
    const data = {
      providername: this.provider.providername,
    };

    this.providerService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
        this.submittedsame = false;
      },
      (error) => {
        if ((error.message = 'provider_exists' && error.status == 500)) {
          this.submittedsame = true;
          this.submitted = false;
        }
        console.log(error);
      }
    );
  }

  newProvider(): void {
    this.submitted = false;
    this.provider = {
      providername: '',
    };
  }
}
