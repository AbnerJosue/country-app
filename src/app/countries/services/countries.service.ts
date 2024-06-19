import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient) { }

    searchCapital( term: string ):Observable<Country[]> {
        
        return this.http.get<Country[]>(`${this.apiUrl}/capital/${ term }`)
            .pipe(
                // regresa un arreglo vacio el of
                catchError( () => of([]) )
            );
    }
    

    searchCountry( term: string ):Observable<Country[]> {
        return this.http.get<Country[]>(`${this.apiUrl}/name/${ term }`)
            .pipe(
                // regresa un arreglo vacio el of
                catchError( () => of([]) )
            );
    }

    serachRegion( term: string ):Observable<Country[]> {
        return this.http.get<Country[]>(`${this.apiUrl}/region/${ term }`)
            .pipe(
                // regresa un arreglo vacio el of
                catchError( () => of([]) )
            );
    }

    searchCountryByAlphaCode( code: string ):Observable<Country | null> {
        return this.http.get<Country[]>(`${this.apiUrl}/alpha/${ code }`)
            .pipe(
                map( countries => countries.length > 0 ? countries[0] : null ),
                catchError( () => of(null) )
            );
    }
}
    