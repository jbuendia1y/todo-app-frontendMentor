import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { listContent } from '@interfaces/listContent'

@Component({
  selector: 'app-new-work-form',
  templateUrl: './new-work-form.component.html',
  styleUrls: ['./new-work-form.component.scss']
})
export class NewWorkFormComponent implements OnInit {

  constructor() { }

  @Input() list:listContent[] = []
  @Output() addItem = new EventEmitter<listContent>()

  ngOnInit(): void {
    console.log(this.list)

    const form = document.getElementById('form')
    form?.addEventListener('submit',()=>this.newWork())
  }

  text : string = ''
  status :boolean = false

  newWork():void{
    let id:number = 0
    if(this.list.length == 0) id = 0
    else {
      id = this.list[this.list.length - 1].id + 1
    }

    const item:listContent = {
      id,
      content : this.text,
      status : this.status
    }

    this.addItem.emit(item)
  }

}
