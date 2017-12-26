import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


login(pass)
{
let password = "poojamsingh"
if (pass==password){
  alert("login Succesfull")
  this.router.navigate(['/home']); 
}
else alert("Unauthorized Login")
}

}
