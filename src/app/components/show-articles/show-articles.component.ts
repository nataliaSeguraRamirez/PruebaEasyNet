import { ActivatedRoute, Params, Router } from '@angular/router';
import { APIService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { articles } from 'src/app/models/articles.interface';

@Component({
  selector: 'app-show-articles',
  templateUrl: './show-articles.component.html',
  styleUrls: ['./show-articles.component.css']
})
export class ShowArticlesComponent implements OnInit {

  articles:any;
  article: any;
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

}
