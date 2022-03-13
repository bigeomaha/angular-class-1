import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthorsList() {
    return ["author 1", "author 2", "author 2"];
  }
}
