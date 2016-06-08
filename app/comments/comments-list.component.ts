import {Component,OnInit} from 'angular2/core';
import {IComments} from './comments';
import {CommentFilterPipe} from './comments-filter.pipe';

import {CommentsService} from './comments.service';

@Component({
    selector:'pm-comments',
    templateUrl:'app/comments/comments-list.component.html',
     styleUrls:['app/comments/comments-list.component.css'],
     pipes:[CommentFilterPipe]
     
     
})
export class CommentsListComponent implements OnInit
{
    pagetitle:string = "List of comments";
    
    listfilter:string ;
    comments: IComments[];
    errorMessage:string;
    
   
    constructor(private _commentService:CommentsService ){
        
    }
   
    ngOnInit(): void{
       this._commentService.getProducts()
        .subscribe(
            comments => this.comments = comments,
            error => this.errorMessage = <any>error
        );
       
    }
    
}