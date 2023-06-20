import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  imagePreview: string;


  constructor(private formBuilder: FormBuilder,

    private userService: UserService) { }

  ngOnInit() {

    this.signupForm = this.formBuilder.group(
      {


        firstName: ["", [Validators.required, Validators.minLength(3)]],
        lastName: ["", [Validators.required, Validators.minLength(5)]],
        email: ["", [Validators.required, Validators.email]],
        pwd: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
        img: [""]

      })

  }
  signup() {

    console.log("here object", this.signupForm.value);

    this.userService.signup(this.signupForm.value, this.signupForm.value.img).subscribe();

    // let userId = JSON.parse(localStorage.getItem("userId") || "1")

    // let users = JSON.parse(localStorage.getItem("users") || "[]")

    // this.signupForm.value.id = userId;
    // this.signupForm.value.role = "user";

    // users.push(this.signupForm.value);



    // localStorage.setItem("users", JSON.stringify(users));
    // localStorage.setItem("userId", userId + 1);


  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  };


}
