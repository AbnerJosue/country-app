import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})

export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = []
  public isLoadig: boolean = false;
  public initialValue: string = '';

  public selectedRegion?: Region;
  public placeholder:string = 'Buscar por region'
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  
  constructor(public countriesService: CountriesService) {} 

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion( region: Region ): void {
  
    this.isLoadig = true;
    this.selectedRegion = region;

    this.countriesService.serachRegion( region )
      .subscribe(
        countries =>{
          this.countries = countries;
          this.isLoadig = false;
        }
      )
  } 
}
