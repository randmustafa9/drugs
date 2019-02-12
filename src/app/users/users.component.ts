import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})



export class UsersComponent implements OnInit {





  public admin:string;
  public isLoggedIn:Boolean;
  itemList: AngularFireList<any>;
  labels = [];


  constructor(public db:AngularFireDatabase , public router:Router) {
    this.itemList = db.list('/users')


    this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
      let y = action.payload.toJSON()
      y['$key'] = action.key
      this.labels.push(y)
      
      })
     // console.log(JSON.stringify(this.labels))
    })

 


    
    
    let adminn = localStorage.getItem('admin')


    if (adminn === '1') {
      this.admin = '1';
      localStorage.setItem('admin','1')
    }
    else{
      this.admin = '0';
      localStorage.setItem('admin','0')
    }}





   toggleToAdmin($key){
    
    for (let value of this.labels) {
      if (value['$key'] === $key) {
       // console.log('$key: '+ $key)
       this.itemList.set($key,{
         
        
        toggle : '1',
        name : value['name'],
        email : value['email'],
        pass : value['pass'],

      });   location.reload()  }}}


      

  toggleToStandard($key){
    for (let value of this.labels) {
      if (value['$key'] === $key) {
       // console.log('$key: '+ $key)
       this.itemList.set($key,{
         
        
        toggle : '0',
        name : value['name'],
        email : value['email'],
        pass : value['pass'],

      });   location.reload()  }}
  }




  ngOnInit() {
  }

}
