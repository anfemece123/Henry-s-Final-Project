export default function validate(values) {
  let errors = {};
  let RegExpressionText = /^[a-zA-Z\s]*$/;
  let RegExpressionNum = /^[0-9,$]*$/;
  let RegExpressionUrl =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  let RegExpressionEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  // let RegExpressionPassword =
  //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  //First name

  if (!values.first_name) {
    errors.first_name = "Please enter a first name";
  }
  if (!RegExpressionText.test(values.first_name)) {
    errors.first_name = "Numbers and special characters are not allowed";
  }

  //Last name

  if (!values.last_name) {
    errors.last_name = "Please enter a last name";
  }
  if (!RegExpressionText.test(values.last_name)) {
    errors.last_name = "Numbers and special characters are not allowed";
  }

  //phone number

  if (!values.phoneNumber) {
    errors.phoneNumber = "Please enter a phone Number";
  }
  if (!RegExpressionNum.test(values.phoneNumber)) {
    errors.phoneNumber = "only numbers are allowed";
  }

  //address

  if (!values.address) {
    errors.address = "Please enter a address";
  }

  //email

  if (!values.email) {
    errors.email = "Please enter a email";
  }
  if (!RegExpressionEmail.test(values.email)) {
    errors.email = "Invalid email";
  }

  //password

  if (!values.password) {
    errors.password = "Please enter a password";
  }

  //confirmPassword
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "La contreseña no coinside";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Please enter a confirm Password";
  }

  //image

  // if (!values.profileImage) {
  //   errors.profileImage = "Please enter a image";
  // }

  // if (!RegExpressionUrl.test(values.profileImage)) {
  //   errors.profileImage = "wrong url";
  // }

  //isOnSale
  //   if (!values.isOnSale) {
  //     errors.isOnSale = "Por favor ingresa un isOnSale";
  //   }
  //   if (!RegExpressionText.test(values.isOnSale)) {
  //     errors.isOnSale = "No se permiten números ni caracteres especiales";
  //   }

  return errors;
}
