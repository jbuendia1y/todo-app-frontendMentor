import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { listContent } from '@interfaces/listContent'

@Component({
  selector: 'app-list-filters',
  templateUrl: './list-filters.component.html',
  styleUrls: ['./list-filters.component.scss']
})
export class ListFiltersComponent implements OnInit {

  constructor(
  ) { }

  @Input() list:listContent[] = []
  @Output() filterBy = new EventEmitter<listContent[]>()

  ngOnInit(): void {
  }

  filterby(name:string){
    const backup = JSON.parse(<string>localStorage.getItem('listWorks'))
    this.list = backup
    if(name == 'All'){
      this.list = backup
    }else if(name == 'Active'){
      this.list = this.list.filter(item => item.status !== true)
    }else if(name == 'Complete'){
      this.list = this.list.filter(item => item.status !== false)
    }
    this.filterBy.emit(this.list)
    this.styled(name)
  }

  styled(name:string){
    const filter = document.getElementById('filter')
    const n = <number>filter?.children.length
    for(let i=0; i<n ; i++){

      if(filter?.children[i].textContent == name){

        if(!filter?.children[i].classList.contains('filter__active')){
          filter?.children[i].classList.toggle('filter__active')
        }

      }else{

        if(filter?.children[i].classList.contains('filter__active')){
          filter?.children[i].classList.toggle('filter__active')
        }
        
      }
    }
  }
}
