import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../../node_modules/normalize.css/normalize.css']
})
export class HeaderComponent implements OnInit{

  constructor() {}
  ngOnInit(){
  }

  focarInput() {
    var search = document.getElementById('search')
    var textArea = document.getElementById("textarea") as HTMLInputElement
    if(search != null)
      search.style.display = 'none'
    if(textArea != null){
      textArea.style.color = 'black'
      textArea.select()
    }
  }
  desfocarInput(){
    var search = document.getElementById('search')
    var textArea = document.getElementById("textarea")
    if(search != null){
      search.style.display = 'block'
    }
    if(textArea != null){
      textArea.style.color = 'rgb(170, 170, 170)'
    }
  }
  abreInput(){
    var input = document.getElementById("textarea")
    input?.focus()
  }
}
