import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { github } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  BASE_URL: string = "https://api.github.com/search/repositories";

  constructor(private http: HttpClient) { }

  getGithubInfo(info: string) {
    const searchUrl = `${this.BASE_URL}?q=${info}&per_page=10&page=1`;
    return this.http.get(searchUrl, { responseType: "json" });
  }

  getGithubInfoSeachResult(keyword: string,
    sort: string = 'stars',
    order = 'desc',
    page = 1,
    perPage = 10) {
    const searchUrl = `${this.BASE_URL}?q=${keyword}&sort=${sort}&order=${order}&page=${page}&per_page=${perPage}`;
    return this.http.get(searchUrl, { responseType: "json" }).subscribe(v => console.log(v));
  }
}
