// Alert function
const setAlert = (msg, type='danger')  =>{
   return `<p class="alert alert-${type} d-flex justify-content-between">
         ${msg}<button data-bs-dismiss="alert" class="btn-close"></button>
        </p>`;
}

// Check value is Number or not
const numberCheck = (num) => {
   let agePattern = /^[0-9]{1,3}$/;

   return agePattern.test(num);
}

/*
Marriage Age Calculator
*/

const marriageAgeCheck = (name, age, gender) => {
   if(gender == 'Male') {
      let marriage_age = 21;

      if( age >= marriage_age) {
        return setAlert(`Hi ${name} Vaiya, Your age is okay for marriage`, 'success');
      } else {
         return setAlert(`Hi ${name} Vaiya, Your age is not okay for marriage. You have to wait for ${marriage_age-age} years`, 'warning');
      }
   }else {
         let marriage_age = 18;
         if( age >= marriage_age) {
         return setAlert(`Hi ${name} apu, Your age is okay for marriage`, 'primary');
       } else {
          return setAlert(`Hi ${name} apu, Your age is not okay for marriage. You have to wait for ${marriage_age-age} years`,'warning');
       }
   }
}

