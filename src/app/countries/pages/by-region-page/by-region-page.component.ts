import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public placeholder:string = 'Buscar por region'
  public countries: Country[] = []
  
  constructor(public countriesService: CountriesService) {}

  searchByRegion( term: string ): void {
    this.countriesService.serachRegion( term )
      .subscribe(
        countries => this.countries = countries
      )
  } 
}
