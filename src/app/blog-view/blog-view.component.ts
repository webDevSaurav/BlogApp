import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public currentBlog
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2018-04-05T18:17:10.298Z",
      "created": "2018-04-05T18:17:10.298Z",
      "tags": ["humor","standup comedy","funny"],
      "author": "qudrat fayaz",
      "category": "Technology",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>dsfdsf</h1>",
      "description": "sdfsd",
      "title": "one"
    },
    {
      "blogId": "2",
      "lastModified": "2018-04-05T18:17:10.298Z",
      "created": "2018-04-05T18:17:10.298Z",
      "tags": [],
      "author": "qudrat fayaz",
      "category": "Technology",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "dsfdsf",
      "description": "sdfsd",
      "title": "two"
    },
    {
      "blogId": "3",
      "lastModified": "2018-04-05T18:17:10.298Z",
      "created": "2018-04-05T18:17:10.298Z",
      "tags": [],
      "author": "qudrat fayaz",
      "category": "Technology",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "dsfdsf",
      "description": "sdfsd",
      "title": "three"
    },
    {
      "blogId": "4",
      "lastModified": "2018-04-05T18:17:10.298Z",
      "created": "2018-04-05T18:17:10.298Z",
      "tags": [],
      "author": "qudrat fayaz",
      "category": "Technology",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "dsfdsf",
      "description": "sdfsd",
      "title": "four"
    },
    {
      "blogId": "5",
      "lastModified": "2018-04-05T18:17:10.298Z",
      "created": "2018-04-05T18:17:10.298Z",
      "tags": [],
      "author": "qudrat fayaz",
      "category": "Technology",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "dsfdsf",
      "description": "sdfsd",
      "title": "five"
    },
    {
      "blogId": "6",
      "lastModified": "2018-04-05T18:17:10.298Z",
      "created": "2018-04-05T18:17:10.298Z",
      "tags": [],
      "author": "qudrat fayaz",
      "category": "Technology",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "dsfdsf",
      "description": "sdfsd",
      "title": "six"
    },
  ] 
  constructor(private _route : ActivatedRoute, private router : Router) {}

  ngOnInit() {
    let blogId = this._route.snapshot.paramMap.get("blogId") 
    for(let blog of this.allBlogs){
      if(blog.blogId === blogId){
        this.currentBlog = blog
        break
      }
    }
  }
}
