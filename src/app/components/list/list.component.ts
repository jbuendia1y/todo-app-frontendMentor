import { Component, OnInit } from '@angular/core';
import { listContent } from '@interfaces/listContent'

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list :listContent[] = [
    {
      id : 0,
      content : "Complete online JavaScript course",
      status : true
    },
    {
      id : 1,
      content : "Jog around the park 3x",
      status : false
    },
    {
      id : 2,
      content : "10 minutes meditation",
      status : false
    },
    {
      id : 3,
      content : "Read for 1 hour",
      status : false
    },
    {
      id : 4,
      content : "Pick up groceries",
      status : false
    },
    {
      id : 5,
      content : "Complete Todo App on Frontend Mentor",
      status : false
    }
  ]
  constructor() { }

  count:number = this.list.length - 1

  reloadCount():void{
    this.count = this.list.length
    for(const item of this.list){
      if(item.status) this.count--
    }
  }

  saveStorage(){
    localStorage.setItem('listWorks',JSON.stringify(this.list))
  }

  moveToAll(){
    const all = document.getElementById('all')
    all?.click()
  }

  ngOnInit(): void {
    //Verify LocalStorage Content
    if(localStorage.getItem('listWorks') == null){
      localStorage.setItem('listWorks',JSON.stringify(this.list))
    }else {
      this.list = JSON.parse(<string>localStorage.getItem('listWorks'))
      
      if(this.list.length - 1  <= 0) this.count = 0
      else if(this.list.length > 1) this.reloadCount()
    }
  }

  //Pushing new Obj to the list
  pushToList(data:listContent){
    this.list = JSON.parse(<string>localStorage.getItem('listWorks'))
    this.list.push(data)
    
    this.saveStorage()
    this.reloadCount()
    this.moveToAll()
  }

  toogleStatus(id:number){
    for(const item in this.list){
      if(this.list[item].id == id){
        this.list[item].status = !this.list[item].status
        this.saveStorage()
        
        if(this.list[item].status) this.count--
        else this.count++
      }
    }
  }

  deleteWork(id:number){
    this.list = this.list.filter(item =>item.id !== id)
    this.reloadCount()
    this.saveStorage()
  }

  viewCross(id:number){
    if(window.screen.width >= 1024){
      console.log('ssdsd')
      const crossN = document.getElementById(`${id}`)
      crossN?.classList.add('cross__active')
    }
  }
  hiddenCross(id:number){
    if(window.screen.width >= 1024){
      const crossN = document.getElementById(`${id}`)
      crossN?.classList.remove('cross__active')
    }
  }

  deleteComplete(){
    this.list = JSON.parse(<string>localStorage.getItem('listWorks'))
    this.list = this.list.filter(item => item.status !== true)
    this.reloadCount()
    this.saveStorage()
    this.moveToAll()
  }

  filter(data:listContent[]){
    this.list = data
    this.reloadCount()
  }

  //Drag & Drop Angular Material
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }
}