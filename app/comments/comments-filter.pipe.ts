import {PipeTransform,Pipe} from 'angular2/core';
import {IComments} from './comments';
@Pipe({
    name:'commentFilter'
})


export class CommentFilterPipe implements PipeTransform
{
    transform(value:IComments[],args:string[]):IComments[]{
        let filter:string = args[0] ? args[0].toLocaleLowerCase():null;
        return filter ? value.filter((product: IComments) => 
        product.email.toLocaleLowerCase().indexOf(filter) != -1): value;
    }   
}