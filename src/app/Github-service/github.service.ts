import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) { }

  //github profile

  public getProfile(searchQuery){
    let dataUrl = `https://api.github.com/users/${searchQuery}`;
  }

  //github repos


}
