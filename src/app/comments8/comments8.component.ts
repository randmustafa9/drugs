import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-comments8',
  templateUrl: './comments8.component.html',
  styleUrls: ['./comments8.component.css']
})
export class Comments8Component implements OnInit {

// تعليقات قسم عوامل انتشار المخدرات

itemList: AngularFireList<any>;
labels = [];
public admin:string;

constructor(public db:AngularFireDatabase , public router:Router) {
  this.itemList = db.list('/commentes8')

  
  this.itemList.snapshotChanges().subscribe(actions=>{
    actions.forEach(action=>{
    let y = action.payload.toJSON()
    y['$key'] = action.key
    this.labels.push(y)
    
    })
    //console.log(JSON.stringify(this.labels))
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




accept($key){
  
for (let value of this.labels) {
  if (value['$key'] === $key) {
   // console.log('$key: '+ $key)
   this.itemList.set($key,{
     
    
    accept : '1',
    desc : value['desc'],
    id : value['id'],
    like : value['like'],
    name : value['name'],
    time : value['time'],

  });   location.reload()  }}}



refuse($key){
for (let value of this.labels) {
  if (value['$key'] === $key) {
   // console.log('$key: '+ $key)
   this.itemList.set($key,{
     
    
    accept : '0',
    desc : value['desc'],
    id : value['id'],
    like : value['like'],
    name : value['name'],
    time : value['time'],

  });   location.reload()  }}
}





ngOnInit() {
}

}
