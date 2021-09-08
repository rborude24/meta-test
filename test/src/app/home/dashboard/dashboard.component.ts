import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service.service';

export interface DialogData {
  title:string,
  content:string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cardData:any;
  constructor(public dialog: MatDialog,private service: ServiceService) { }

  ngOnInit(): void {
    this.cardData = this.service.getData();
    console.log(this.cardData);
  }

  editCard(content,title){

    const dialogRef = this.dialog.open(Dialog, {
      width: '300px',
      height: '250px',
      data: { title:title,content:content }
    });
    // this.service.data.map((item)=>{
    //   if(item.title = title){
    //     item.cards.map((item)=>{
    //       if(item.content)
    //     })
    //   }
    // })
  }

  openDialogue(val){
    const dialogRef = this.dialog.open(Dialog, {
      width: '300px',
      height: '250px',
      data: { title:val }
    });
  }

}



@Component({
  selector: 'load-dialog-file-name-import',
  templateUrl: 'dialog.html',
  styleUrls: ['./dashboard.component.scss'],
})


export class Dialog {

  content: any;
  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private service: ServiceService
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.content = this.data.content;
  }

  save(){
    this.service.data.map((item)=>{
      if(item.title == this.data.title){

          item.cards.push({content:this.content});
      }
    })
    this.dialogRef.close();
  }




}
