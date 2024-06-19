import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public placeholder = "Buscar Pais"
  public countries: Country[] = [] 

  constructor(public countryService: CountriesService) {}

  searchByCountry( term: string ): void {
    this.countryService.searchCountry( term )
      .subscribe(
        countries => this.countries = countries
      )
  }

}
