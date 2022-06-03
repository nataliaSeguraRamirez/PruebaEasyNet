import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-articles',
  templateUrl: './update-articles.component.html',
  styleUrls: ['./update-articles.component.css']
})
export class UpdateArticlesComponent implements OnInit {

  articles:any;
  id!: string;
  constructor(private servidor: APIService, private readonly router: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.router.queryParams.subscribe(
      (params: Params) => {
        this.id = params['index'];
      });
      this.getArticle(); //


  }
  getArticle (){

    this.servidor.getArticle(this.id).subscribe((data)=>{
      this.articles = data;
    })



  }

  updateArticle(){
    
  }
}
