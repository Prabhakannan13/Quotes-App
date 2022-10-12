import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quotesdata',
  templateUrl: './quotesdata.component.html',
  styleUrls: ['./quotesdata.component.css']
})
export class QuotesdataComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewQuotesdata().subscribe(
      (data)=>{
        this.quotesdata=data
      }
    )
   }

  quotesdata:any={}

  ngOnInit(): void {
  }

}
