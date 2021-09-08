import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service.service';

export interface DialogData {
  id:number,
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

  editCard(content,title,id){

    const dialogRef = this.dialog.open(Dialog, {
      width: '300px',
      height: '250px',
      data: { title:title,content:content,id:id }
    });
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
    if(this.data.id){
      this.service.data.map((item)=>{
        if(item.title == this.data.title){
          item.cards.map((each)=>{
            if(each.id == this.data.id){
              each.content = this.content;
            }
          })
        }
      })
    }
    else{
    this.service.data.map((item)=>{
      if(item.title == this.data.title){

          item.cards.push({id:item.cards.length+1,content:this.content});
      }
    });
    }
    console.log( this.service.data)
    this.dialogRef.close();

  }




}
