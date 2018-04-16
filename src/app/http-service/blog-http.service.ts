import { Injectable } from '@angular/core';

//import http client to make the request
import {HttpClient, HttpErrorResponse} from '@angular/common/http'

//import observable
import {Observable} from 'rxjs/Observable' 
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'

@Injectable()
export class BlogHttpService {
  public allBlogs
  public currentBlog
  public baseURL = `https://blogapp.edwisor.com/api/v1/blogs`
  private authKey = `NGI3ZWExMDY1OGQwNjU2NTNhYTEzNmY5ODI1ZTA5YzllODdjMjRkOTYyNTA3ZGE2NmIzMzAyNWE3NzE5MmUzMDVhMTg5NTEzZjE3MjUzMjMxNjhkYmM4ZjRiZDQ4N2NiNjY1NjJmMzkxNDYxOTczZjliZDc0MWNjODk2MWQ4MmRmNg==`

  constructor(private _http : HttpClient ) { }

  public getAllBlogs(){
    let myResponse = this._http.get(this.baseURL+"/all?authToken="+this.authKey)
    return myResponse
  }

  //https://blogapp.edwisor.com/api/v1/blogs/view/:blogId
  public getCurrentBlog(blogId){
    let currentBlog = this._http.get(`${this.baseURL}/view/${blogId}?authToken=${this.authKey}`)
    console.log(currentBlog)
    return currentBlog
  }

  public createBlog(blogData){
    let myResponse = this._http.post(`${this.baseURL}/create?authToken=${this.authKey}`,blogData)
    return myResponse 
  }

  public editBlog(blogId,blogData){
    let myResponse = this._http.put(`${this.baseURL}/${blogId}/edit?authToken=${this.authKey}`,blogData)
    return myResponse 
  }

  public deleteBlog(blogId){
    let myResponse = this._http.post(`${this.baseURL}/${blogId}/delete?authToken=${this.authKey}`, {})
    return myResponse 
  }

  public handleError(err : HttpErrorResponse){
    console.log(err.message)
    return Observable.throw(err.message)
  }
}
