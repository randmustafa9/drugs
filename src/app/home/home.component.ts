import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isLoggedIn:Boolean;
  public admin:string = '0';
   
  email:string = '';
  password:string = '';
  itemList: AngularFireList<any>;
  labels = [];
  myemail:string = '';
  myId:string = '';
  errorLoginMsg = '';

  

  constructor(public db:AngularFireDatabase ,public afAuth: AngularFireAuth,public fire:AngularFireAuth , public router:Router) {

    this.itemList = db.list('/users')


    this.myemail = localStorage.getItem('email')
this.myId = localStorage.getItem('uid')



    this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
      let y = action.payload.toJSON()
      y['$key'] = action.key
      
    if (action.key == this.myId) {
        this.labels.push(y)

        this.admin = this.labels[0]['toggle']
        localStorage.setItem('admin',this.admin.toString());
        }
        
        //console.log(this.admin)
        //console.log(this.isLoggedIn)
      
      
      
      })
    })





    let status = localStorage.getItem('isLoggedIn')

if (status === 'true') {
  this.isLoggedIn = true;
}
else{
  this.isLoggedIn = false;
}



    
let adminn = localStorage.getItem('admin')

if (adminn == '1') {
  this.admin = '1'
}
else{
  this.admin = '0'
}

 


   }

   


  ngOnInit() {
  }



  
logout(){
  this.afAuth.auth.signOut();
  localStorage.setItem('isLoggedIn','false');
  this.isLoggedIn = false;
  this.admin = '0';
  localStorage.setItem('admin','0');
  location.reload();
  
    }



myLogin(){
  this.fire.auth.signInWithEmailAndPassword(this.email,this.password).then(user=>{
       // console.log(this.email,this.password) ;
  this.isLoggedIn = true;
  localStorage.setItem('isLoggedIn','true');
  this.fire.authState.subscribe(auth=>{ 
    if(auth){
        localStorage.setItem('uid',auth.uid)
        }})

  location.reload()
  }).catch(error=>{

    this.errorLoginMsg = 'incorrect email or password'})
      
      
  }

      
}

