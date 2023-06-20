import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  article: any =[
    
    {title:"bilel",image:"assets/images/img_1.jpg",description:"olalalala",date:"07/02/2023"},
    {title:"balabil",image:"assets/images/img_2.jpg",description:"welyey",date:"07/02/2023"},
    {title:"balabilll",image:"assets/images/img_3.jpg",description:"alopoyyttr",date:"07/02/2023"},
    
    ]

  constructor() { }

  ngOnInit() {
  }

}
