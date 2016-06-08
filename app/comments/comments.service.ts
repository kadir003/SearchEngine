import {Injectable} from 'angular2/core';

import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {IComments} from './comments';
@Injectable()
export class CommentsService {
    private _commentsUrl = 'http://jsonplaceholder.typicode.com/comments';
    constructor(private _http:Http){}
    
    
    

    getProducts():Observable< IComments[]> {
        return this._http.get(this._commentsUrl)
        .map((response:Response) => <IComments[]>response.json())
        .do(data => console.log("All: " + JSON.stringify(data)))
        .catch(this.handleError);
        
    }
private handleError(error:Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
}
}