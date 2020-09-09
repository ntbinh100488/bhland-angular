import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'staff.component.html'
})

export class StaffComponent implements OnInit {
    ngOnInit(): void {
        console.log("staff ngOnInit");
    }
}