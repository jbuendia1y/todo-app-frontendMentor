import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  theme:string = 'darkTheme'

  ngOnInit(){
    if(localStorage.getItem('theme') == null){
      localStorage.setItem('theme',this.theme)
      document.documentElement.classList.add('darkTheme')
    } else {
      this.theme = <string>localStorage.getItem('theme')
      document.documentElement.classList.add(this.theme)
    }
  }

  toogleTheme(){
    if(this.theme == 'darkTheme'){
      document.documentElement.classList.remove('darkTheme')
      document.documentElement.classList.add('lightTheme')
    }else if(this.theme == 'lightTheme'){
      document.documentElement.classList.remove('lightTheme')
      document.documentElement.classList.add('darkTheme')
    }
    localStorage.setItem('theme',document.documentElement.classList[0])
    this.theme = <string>localStorage.getItem('theme')
  }
}