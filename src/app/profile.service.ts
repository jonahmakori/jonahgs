import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
//   providedIn: 'root'
// })
export class ProfileService {
private username:string;
private clientid= 'b58245bd4def50c47d88'
private clientsecret= '792904aef59d6066fd3c602a987ae622f7f29159'
  constructor(private http:Http) { 
    console.log("service is now ready!");
    this.username = 'jonahmakori'
  }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/"+ this.username +"?client_id" +this.clientid + "&client_secret="+this.clientsecret)
     .map(res => res.json());
   }

getProfileRepos(){
  return this.http.get("https://api.github.com/users/"+ this.username +"/repos?client_id" +this.clientid + "&client_secret="+this.clientsecret)
  .map(res => res.json());
}
updateProfile(username:string){
  this.username = username;
}
}
