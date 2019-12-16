import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff'
@Component({
 
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  
})
export class StaffFormComponent implements OnInit {
     // กำนหด array เก็บแผนกของ staff
     departments = [
      'Accounting','IT Support','Marketing'
      ];
  // รายชื่อ staff เบืองต้นที่มีอยู่ ในที่นี้สมมติสร้างมา 3 คนไว้แล้ว
  staffs = [
      new Staff(1,'John Smoke','IT Support',27),
      new Staff(2,'Linda Pink','Accounting',30),
      new Staff(3,'Lisa Mour','Marketing',33)
  ];     
  // สร้าง staff แบบเดี่ยวที่เราจะใช้กับฟอร์ม แบบ two-way data binding
  staff = new Staff(1,'',''); // ให้เป็นค่าว่างไป
  editmode = false; // กำหนดอยู่ในโหมดแก้ไข หรือไม่ เบื้องต้นเป็น false
  editID:number; // ไอดี staff ที่จะแก้ไข ตัวอย่างเราใช้เป็น index ของ array แทน
  showlist = false; // กำหนดสถานะการโชว์ลิสรายการ staff ไว้ใช้ร่วมกัน hidden attribute
  newstaff = true;  // กำหนดสถานะการโชว์ฟอร์มของ staff ไว้ใช้ร่วมกัน hidden attribute 
  // กำหนดคำสั่ง ให้แสดง ลิสรายการ staff
  ngOnInit(){
    
  }
  doShowList(){
      this.showlist = false;
      this.newstaff = true;    
  }
  // กำหนดคำสั่ง ให้แสดงฟอร์ม staff
  doShowNewStaff(){
      this.showlist = true;
      this.newstaff = false;   
      this.staff = new Staff(1,'',''); // รีเซ็ตค่า staff ใน ฟอร์ม
      this.editmode = false; // ไม่ใช่โหมดแก้ไข เป็นโหมดเพิ่มข้อมูลใหม่
  }
  // กำหนดคำสั่ง ให้ลบรายการ staff โดยรับค่า id ที่ต้องการลบ แต่ในที่นี้เราใช้ index ของ array 
  deleteStaff(id:number){
      this.staffs.splice(id, 1); // ลบ array รายการที่่มี index ตรงกับค่า id ที่ส่งมา
  }
  // กำหนดคำสั่งแสดงฟอร์ม staff พร้อมดึงข้อมูง โดยรับค่า id ที่ต้องแสดง ในที่นี้เราใช้ index ของ array  
  doShowEditStaff(id:number){
      this.doShowNewStaff(); // แสดงฟอร์ม staff
      this.staff = this.staffs[id]; // ดึงข้อมูลจาก staffs อิงจาก index ของ array
      this.editmode = true; // อยู่ในโหมดแก้ไขข้อมูล
      this.editID = id; // เก็บค่า index ของ array ที่จะแก้ไข
  }
  // กำหนดคำสั่งสำหรับเพิ่ม หรือแก้ไข staff 
  doSubmitStaff(){
      let numID = this.staffs.length; // นับจำนวน staff ที่มีอยู่
      let keyID = this.editID; // index ของ array ที่ต้องการแก้ไข
      if(this.editmode==false){// ไม่ใช่โหมดแก้ไข เป็นโหมดเพิ่มข้อมูลใหม่
          // ในการทดสอบนี้เราทำาร push array ของ object staff ใหม่
          this.staffs.push(
              new Staff(
                  numID+1,
                  this.staff.name,
                  this.staff.department,
                  this.staff.age
                  )
          );
      }else{ // แต่ถ้าเป็นโหมดแก้ไข เราก็ให้อัพเดทข้อมูล staffs array ตาม index ที่ส่งมา
          this.staffs[keyID].name = this.staff.name;
          this.staffs[keyID].department = this.staff.department;
          this.staffs[keyID].age = this.staff.age;
      }
      this.doShowList(); // หลังจากเพิ่ม หรือแก้ไขรายการแล้ว ให้แสดงลิสรายการ staff
  }
}