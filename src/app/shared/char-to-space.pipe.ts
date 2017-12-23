import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";
import { Pipe } from "@angular/core";

@Pipe({
    name: 'charToSpace'
})
export class CharToSpacePipe implements PipeTransform{
    transform(value:string, replaceChar: string) {
        return value.replace(replaceChar, ' ');
    }
    
} 