// get Elements
const age_form = document.getElementById('age_form');
const msg = document.querySelector('.msg');
const msgLong = document.querySelector('.msg-long');

// submit age form
age_form.onsubmit = (e) => {
  e.preventDefault();
  
  //get fields value
  let name = age_form.querySelector('input[name="name"]');
  let age = age_form.querySelector('input[name="age"]');
  let gender = age_form.querySelectorAll('input[name="gender"]');

  

  //get gender name
  let gender_name = '';
   gender.forEach(item => {
     if(item.checked) {
        gender_name = item.value;
     }

        
  });

  

  //form validation
  if(name.value == '' || age.value == '' || gender_name == '') {

    msg.innerHTML = setAlert('All fields are required');

    } else if ( numberCheck(age.value) == false) {

        msg.innerHTML = setAlert('Your age is not valid', 'warning');
    } else {

       msgLong.innerHTML =  marriageAgeCheck(name.value, age.value, gender_name);
        
    }

  

}
