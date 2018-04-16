import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../http-service/blog-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {ViewContainerRef} from '@angular/core'
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(public blogHttpService:BlogHttpService, 
              private _route : ActivatedRoute, 
              private router : Router,
              public toastr: ToastsManager,
              vcr: ViewContainerRef ) 
  {
      this.toastr.setRootViewContainerRef(vcr);
  }
  public blogTitle
  public blogDescription
  public blogBodyHtml
  public blogCategory
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"]

  ngOnInit() {
  }
  public createBlog() {
    let blogData = {
      title : this.blogTitle,
      description : this.blogDescription,
      blogBody : this.blogBodyHtml,
      category : this.blogCategory
    }
    console.log(blogData)
    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        this.toastr.success("Blog created","Success!");
        setTimeout(()=>{
          this.router.navigate(["/blog", data.data.blogId])
        },5000)
      }, 
      error => {
        console.log("Error occured")
        console.log(error.errorMessage)
      }
    )
  }

}
