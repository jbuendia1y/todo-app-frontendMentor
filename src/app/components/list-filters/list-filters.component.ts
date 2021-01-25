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
    if(name == 'all'){
      this.list = backup
    }else if(name == 'active'){
      this.list = this.list.filter(item => item.status !== true)
    }else if(name == 'complete'){
      this.list = this.list.filter(item => item.status !== false)
    }
    this.filterBy.emit(this.list)
  }
}
