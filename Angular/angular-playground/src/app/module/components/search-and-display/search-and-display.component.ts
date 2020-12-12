import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, shareReplay, startWith, switchMap, throttleTime } from 'rxjs/operators'

import { GithubObject } from '../../../shared/modals/GithubObject';
import { GithubSearchService } from '../../../shared/services/github-search.service';

@Component({
  selector: 'app-search-and-display',
  templateUrl: './search-and-display.component.html',
  styleUrls: ['./search-and-display.component.scss']
})
export class SearchAndDisplayComponent implements OnInit {
  searchControl = new FormControl();
  searchInputObs$: Observable<string[]>;


  constructor(private githubSearchService: GithubSearchService) {
  }

  ngOnInit(): void {
    this.searchInputObs$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(700),
      distinctUntilChanged(),
      filter(filter => filter.length >= 2),
      map(value => this.autoSearch(value)), // map is not efficient
    )
  }

  autoSearch(value) {
    let res: string[] = [];
    this.githubSearchService.getGithubInfo(value).subscribe((response: any) => {
      response.items.forEach(item => res.push(item.full_name));
    });
    return res;
  }

  onSearch() {
    console.log('what?', this.searchControl.value);
    this.githubSearchService.getGithubInfoSeachResult(this.searchControl.value);
  }

}
