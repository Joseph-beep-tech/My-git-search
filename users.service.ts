import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private username:string;
  private clientid : 'Iv1.3a72d68f7f90722f';
  private clientsecret:'e532d707870bfcf204e47caf455ad53168a06d03';

  constructor(private http: HttpClient) {
console.log ('Awesome!!')
this.username = 'Joseph-beep-tech'
  
  }

 
getUserProfile(){
  
  return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)

}

  getRepo() {
    const url = `https://api.github.com/users/${this.username}/repos?client_id=${this.clientid}&client_secret=${this.clientsecret}`
    return this.http.get(url);
}
   updateProfile(username:string){
     this.username = username;
   }
 }