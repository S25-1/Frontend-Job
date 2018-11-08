import { Component, Inject, OnInit } from '@angular/core';
import { VacancyService } from './vacancy.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss'],
})
export class VacancyComponent implements OnInit{
  // vacancylist = VACANCYLIST;
  public vacancies = [];
  constructor(public dialog: MatDialog, private vacancyService: VacancyService) {}

  ngOnInit() {
    this.vacancyService.getVacancy()
      .subscribe(data => this.vacancies = data);
  }

  openDialog(name, startdate, experience, enddate, vacancyid, skilltypeName): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '400px',
      width: '600px',
      data: { Name: name, StartDate: startdate, Experience: experience,
        EndDate: enddate, VacancyID: vacancyid, SkillTypeName: skilltypeName },
      autoFocus: false,
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(result);
    // });
  }
}
