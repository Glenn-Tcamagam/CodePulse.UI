import { Injectable } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { Observable } from 'rxjs';

import { BlogPost } from '../models/blog-post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UpdateBlogPost } from '../models/update-blogpost.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http: HttpClient) { }


  
  // A SAVOIR: LE NOM DE CONTROLLER dans .NET EST blogpostController  sans S  a la fin raison 
  // pourlaquelle dans le service je fais api/blogpost       
  //Alors que dans le cours de UDEMY cest /api/blogpost par ce que dans leur cours leur nom du controller finit pat s et est blogpostsController

  createBlogPost(data: AddBlogPost) : Observable<BlogPost> {
    return this.http.post<BlogPost>(`${environment.apiBaseUrl}/api/blogpost`, data);
  }

  getAllBlogPosts() : Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${environment.apiBaseUrl}/api/blogpost`);
  }

  getBlogPostById(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${environment.apiBaseUrl}/api/blogpost/${id}`);
  }

  getBlogPostByUrlHandle(urlHandle: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${environment.apiBaseUrl}/api/blogpost/${urlHandle}`);
  }

  updateBlogPost(id: string, updateBlogPost: UpdateBlogPost): Observable<BlogPost> {
    return this.http.put<BlogPost>(`${environment.apiBaseUrl}/api/blogpost/${id}`, updateBlogPost);
  }

  deleteBlogPost(id: string): Observable<BlogPost>{
    return this.http.delete<BlogPost>(`${environment.apiBaseUrl}/api/blogpost/${id}`);
  }

}
