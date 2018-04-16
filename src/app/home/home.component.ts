import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../http-service/blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allBlogs
  constructor(public blogHttpService : BlogHttpService) {
      
   }

  ngOnInit() {
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
      data=>{
        console.log(data)
        this.allBlogs = data["data"]
      },
      error => {
        console.log("Error occured")
        console.log(error.errorMessage)
      }
    )
    console.log(this.allBlogs)
  }

}