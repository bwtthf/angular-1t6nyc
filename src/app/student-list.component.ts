import { Component, Input } from '@angular/core';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styles: []
})
export class StudentListComponent  {
  public studentList = [];
  public var = 1;

  public statusMsg = ""

  public setStatusMsg(student: string): void {
    const baseMsg: string = "You have selected: ";
    this.statusMsg = baseMsg + student;
  }

  public clearStatusMsg(): void {
    this.statusMsg = '';
  }

  public addStudent(): void {
      const studentName = (this.studentList.length + 1).toString() + "." + " " + "class" + " " + (Math.floor(Math.random() * 2) + 1) + 0  + (Math.floor(Math.random() * 9) + 1) + 0;
      this.studentList.push(studentName);
      const teacherName = "teacher: tbd";
      this.studentList.push(teacherName);
      const time = "time: " + (Math.floor(Math.random() * 12) + 1)  + ":" + "00";
      this.studentList.push(time);
    
  }

  public removeStudent(): void {
    this.studentList.pop();
  }
  public clearStudent(): void{
    while (this.studentList.length !== 0) {
      this.studentList.pop();
    }
  }
}
