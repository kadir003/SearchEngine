import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
import {CommentsListComponent} from './comments/comments-list.component';
import {CommentsService} from './comments/comments.service';

@Component({
    selector: 'pm-app',
    template:`
    <div><h1>{{pageTitle}}</h1>
    <pm-comments></pm-comments>
    </div>`,
    directives: [CommentsListComponent],
    providers: [CommentsService,
                    HTTP_PROVIDERS]
})
export class AppComponent{
    pageTitle: string = 'Search engine';
}