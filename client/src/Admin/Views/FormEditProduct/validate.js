export default function validate(values) {
  let errors = {};
  let RegExpressionText = /^[a-zA-Z\s]*$/;
  let RegExpressionNum = /^[0-9,$]*$/;
  let RegExpressionUrl =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

  //title

  if (!values.title) {
    errors.title = "Please enter a title";
  }
  if (!RegExpressionText.test(values.name)) {
    errors.title = "Numbers and special characters are not allowed";
  }

  //category

  if (!values.category) {
    errors.category = "Please enter a category";
  }
  // if (!RegExpressionText.test(values.category)) {
  //   errors.category = "No se permiten números ni caracteres especiales";
  // }

  //color
  // if (!values.color) {
  //   errors.color = "Por favor ingresa un color";
  // }
  // if (!RegExpressionText.test(values.color)) {
  //   errors.color = "No se permiten números ni caracteres especiales";
  // }

  //season

  if (!values.season) {
    errors.season = "Please enter a season";
  }
  if (!RegExpressionText.test(values.season)) {
    errors.season = "Numbers and special characters are not allowed";
  }

  //price

  if (!values.price) {
    errors.price = "Please enter a price";
  }
  // if (!RegExpressionNum.test(values.price)) {
  //   errors.price = "only numbers are allowed";
  // }

  //size

  if (!values.size) {
    errors.size = "Please enter a size";
  }
  if (!RegExpressionText.test(values.size)) {
    errors.size = "Numbers and special characters are not allowed";
  }

  //gender

  if (!values.gender) {
    errors.gender = "Please enter a gender";
  }
  if (!RegExpressionText.test(values.gender)) {
    errors.gender = "Numbers and special characters are not allowed";
  }

  //stock
  if (!values.stock) {
    errors.stock = "Please enter a stock";
  }
  if (!RegExpressionNum.test(values.stock)) {
    errors.stock = "only numbers are allowed";
  }

  //image

  if (!values.image) {
    errors.image = "Please enter a image";
  }

  if (!RegExpressionUrl.test(values.image)) {
    errors.image = "wrong url";
  }

  //isOnSale
  //   if (!values.isOnSale) {
  //     errors.isOnSale = "Por favor ingresa un isOnSale";
  //   }
  //   if (!RegExpressionText.test(values.isOnSale)) {
  //     errors.isOnSale = "No se permiten números ni caracteres especiales";
  //   }

  return errors;
}
