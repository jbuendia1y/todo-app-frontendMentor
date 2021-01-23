import { Component, OnInit } from '@angular/core';
import { listContent } from '@interfaces/listContent'

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

  ngOnInit(): void {
    //Verify LocalStorage Content
    if(localStorage.getItem('listWorks') == null){
      localStorage.setItem('listWorks',JSON.stringify(this.list))
    }else {
      this.list = JSON.parse(<string>localStorage.getItem('listWorks'))
      
      if(this.list.length - 1  <= 0) this.count = 0
      else if(this.list.length > 1) this.reloadCount()
    }

    //Submit Event
    const form = document.getElementById('form')
    form?.addEventListener('submit',(e)=>{e.preventDefault();this.newWork()})
  }

  newWork():void{
    const text = <HTMLFormElement>document.getElementById('form__text')
    const checkbox = <HTMLFormElement>document.getElementById('form__checkbox')

    const work = {
      id  : this.list.length,
      content : text.value,
      status : checkbox.checked
    }

    this.list.push(work)
    this.saveStorage()
    this.reloadCount()
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

  deleteComplete(){
    this.list = this.list.filter(item => item.status !== true)
    this.reloadCount()
    this.saveStorage()
  }

  saveStorage(){
    localStorage.setItem('listWorks',JSON.stringify(this.list))
  }

  filterby(name:string){
    const backup = JSON.parse(<string>localStorage.getItem('listWorks'))
    this.list = backup
    if(name == 'all'){
      this.list = backup
    }else if(name == 'active'){
      this.list = this.list.filter(item => item.status !== true)
    }else if(name == 'complete'){
      this.list = this.list.filter(item => item.status !== false)
    }
  }
}