import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../http-service/blog-http.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  currentBlog;
  blogId;
  public blogTitle
  public blogDescription
  public blogBodyHtml
  public blogCategory
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"]
  constructor(private _route : ActivatedRoute, private router : Router, private blogHttpService : BlogHttpService) { }

  ngOnInit() {
    this.blogId = this._route.snapshot.paramMap.get("blogId")

    //get the current blog
    this.blogHttpService.getCurrentBlog(this.blogId).subscribe(
      data => {
        this.currentBlog = data["data"]
        console.log(this.currentBlog)
      },
      error => {
        console.log("Error occured")
        console.log(error.errorMessage)
      }
    )
  }

  editBlog(){
    this.blogHttpService.editBlog(this.blogId,this.currentBlog).subscribe(
      data => {
        setTimeout(()=>{
          this.router.navigate(["/home"])
        },1000)
      }, 
      error => {
        console.log("Error occured")
        console.log(error.errorMessage)
      }
    )
  }

  

}
