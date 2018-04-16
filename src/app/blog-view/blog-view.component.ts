import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../http-service/blog-http.service';
import {Location} from '@angular/common'
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers : [Location]
})
export class BlogViewComponent implements OnInit {
  public currentBlog
  blogId
  constructor(private _route : ActivatedRoute, private router : Router, private blogHttpService : BlogHttpService, private location : Location) {}

  ngOnInit() {
    this.blogId = this._route.snapshot.paramMap.get("blogId")
    this.blogHttpService.getCurrentBlog(this.blogId).subscribe(
      data => {
        this.currentBlog = data["data"]
      },
      error => {
        console.log("Error occured")
        console.log(error.errorMessage)
      }
    )
  }

  deleteBlog(){
    this.blogHttpService.deleteBlog(this.blogId).subscribe(
      data => {
        console.log("blog deleated")
        setTimeout(
          () => {
            this.router.navigate(['/home'])
          } , 1000
        )
      }, 
      error => {
        console.log(error.errorMessage)
      }
    )
  }

  editBlog(){
    this.router.navigate(['/edit',this.blogId])
  }

  goBack(){
    this.location.back();
  }
}
