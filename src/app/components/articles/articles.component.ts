import { APIService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { articles } from 'src/app/models/articles.interface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles = [] as articles[];
  index:number = 0;
  constructor(private servidor: APIService, private router: Router) {
    this.getArticles();
  }

  ngOnInit(): void {
    this.getArticles();


  }
  getArticles (){

    this.servidor.getArticles().subscribe((data)=>{
      this.articles = data as any [];
      console.log(this.articles);
    })


  }
  showArticle(index : number){
    console.log(index);
    let id = this.articles[index]._id;
    this.router.navigate(['show'], {queryParams: {index: id}})
  }
  editArticle(index : number)
  {
    console.log(index);
    let id = this.articles[index]._id;
    this.router.navigate(['update'], {queryParams: {index: id}})
  }
  deleteArticle(): void {
    console.log('eliminar');

  }

}
