import { Component, Input ,EventEmitter, Output, OnInit, OnDestroy  } from '@angular/core';
import { Subject, Subscribable, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit , OnDestroy{
  
  private debouncer: Subject<string> = new Subject<string>()
  private debouncerSuscription?: Subscription; 

  @Output()
  public onValue = new EventEmitter<string>()

  @Output()
  public onDebaunce = new EventEmitter<string>()

  @Input()
  public placeholder?: string = ''

  @Input()
  public initialValue?: string = ''

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe( debounceTime(600)
      )
      .subscribe( value => {
        this.onDebaunce.emit(value)
      })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe()
  }

  emitValue(value: string):void {
    this.onValue.emit(value)
  }

  onKeyPress( searchTerm: string):void {
    this.debouncer.next( searchTerm )
  }

}
