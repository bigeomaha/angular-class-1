import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    // <courses> 
    selector: 'courses',  
    template: `
        <h2>{{ title }}</h2>
        
        <ul> 
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <table>
            <tr *ngFor="let image of images">
                <td [attr.colspan]="colSpan">
                    <img [src]="image_url" />
                </td>
            </tr>
        </table>
    `
})
export  class CoursesComponent {
    title = 'List of Courses';
    colSpan = 1;
    courses;
    image_url = 'https://picsum.photos/200'
    images = [this.image_url, this.image_url, this.image_url]
     
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}