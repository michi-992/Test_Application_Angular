import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SearchItem } from '../../models/search-item/search-item.model'


@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  constructor() { }
}
