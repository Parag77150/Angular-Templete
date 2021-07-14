import { Component } from '@angular/core';
import studentsData from'./_files/student.json'
import {HttpClient} from'@angular/common/http'
import { student } from './student';
import {RestService} from'./rest.service'
    


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'method';
  student: student[]=[]
  name: any
  constructor(private http:HttpClient, private service:RestService,){}

    
  onSubmit(data: any){
    this.http.post('http://localhost:3000/student',data)
    .subscribe((result)=>{
    console.warn(result)})
    console.warn(data)
  }
  ngOnInit():void{
    this.service.getUsers().subscribe(response=>{
      this.student=response;
    })
  }
  search(){
    if(this.name==" ")
    {
      this.ngOnInit()
    }else{
      this.student = this.student.filter(res=>
        {
          return  res.name?.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
        })
    }
  }

}

