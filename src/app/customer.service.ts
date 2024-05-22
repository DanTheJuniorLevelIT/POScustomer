
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }
  url = "http://localhost/customer/"

  login(log: any){
    return this.http.post(this.url + 'customerlogin.php',JSON.stringify(log));
  }
  getcusttrans(cid: any){
    return this.http.get(this.url + `getcustomertransaction.php?cid=${cid}`);
  }
  
  getuser(userID: number){
    return this.http.get(this.url + `getuserprofile.php?userID=${userID}`);
  }

}
