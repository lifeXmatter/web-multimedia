const uid = document.getElementById('uid')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const address = document.getElementById('address')
const addressp = document.getElementById('addressp')
const form = document.getElementById('regForm')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []


  if(uid.value == '' || uid.value == null){
    messages.push('UserID is required')
  }
  else{
    if(uid.value.length <= 7 || uid.value.length >=17){
      messages.push('UserID must be 8 to 16 characters long')
    }
    else{
      if (!uid.value.match(/^[0-9a-z]+$/)){
        messages.push('UserID must be lowercase alphanumeric only')
      }
    }
  }


  if(fname.value == '' || fname.value == null){
    messages.push('First name is required')
  }
  else{
    if(fname.value.length <= 1 || fname.value.length >=21){
      messages.push('First name must be 2 to 20 characters long')
    }
    else{
      if (!fname.value.match(/^[a-zA-Z]+$/)){
        messages.push('First name must be alphabets only')
      }
    }
  }


  if(lname.value == '' || lname.value == null){
    messages.push('Last name is required')
  }
  else{
    if(lname.value.length <= 1 || lname.value.length >=21){
      messages.push('Last name must be 2 to 20 characters long')
    }
    else{
      if (!lname.value.match(/^[a-zA-Z]+$/)){
        messages.push('Last name must be alphabets only')
      }
    }
  }


  if(email.value == '' || email.value == null){
    messages.push('Email is required')
  }
  else{
    if (!email.value.match(/\S+@\S+\.\S+/)){
      messages.push('Email is not in the valid format')
    }
    }


  if(phone.value == '' || phone.value == null){
    messages.push('Phone number is required')
  }
  else{
    if(phone.value.length !== 10){
      messages.push('Phone number must be exactly 10 digits long')
    }
    else{
      if (!phone.value.match(/^[0-9]+$/)){
        messages.push('Phone number must be digits only')
      }
    }
  }


  if(address.value == '' || address.value == null){
    messages.push('Address is required')
  }
  else{
    if(address.value.length >= 257 || address.value.length <= 9){
      messages.push('Address must be less than 256 characters and greater than 10 characters')
    }
  }


  if(addressp.value == 0){
    messages.push('Address proof is required')
  }


  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
