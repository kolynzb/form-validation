const form =document.getElementById("form")
const email =document.getElementById("email")
const phone =document.getElementById("tel-no")
const age =document.getElementById("age")
const namee =document.getElementById("name")

form.addEventListener('submit',e =>{
    e.preventDefault();
    checkinputs();
})

const checkinputs=()=>{
    const nameValue = namee.value.trim();
    const ageValue =  age.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    nameValue === "" ?setErrorFor(namee,'*Name cannot be blank'):setSuccessFor(namee);
    emailValue === "" ?setErrorFor(email,'*Email cannot be blank'):setSuccessFor(email);
    ageValue === "" ?setErrorFor(age,'*Age required'):setSuccessFor(age);
    phoneValue === "" ?setErrorFor(phone,'*phone reuired'):setSuccessFor(phone);

    const namePattern = /^[a-z A-Z 0-9]{3,}$/ ;
    const phonePattern = /^[0-9]{10}$/;
    const agePattern = /^[0-9]{1,2}$/ ;
    const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/ ;

    !namePattern.test(nameValue)?setErrorFor(namee,'*Name not valid'):setSuccessFor(namee);
    !emailPattern.test(emailValue)?setErrorFor(email,'*Email not valid'):setSuccessFor(email);
    !agePattern.test(ageValue) ?setErrorFor(age,'*Age not valid'):setSuccessFor(age);
    !phonePattern.test(phoneValue) ?setErrorFor(phone,'*not valid'):setSuccessFor(phone);

}
const setSuccessFor=(input)=>{
    const formControl = input.parentElement;
    formControl.className='form-control success'

}
const setErrorFor=(input,errmessage)=>{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText= errmessage;
     formControl.className='form-control error'
}
