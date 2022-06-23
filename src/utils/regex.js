// email에 @와 .이 포함
export const CheckEmail = (email) => {
  const regexEmail = /(?=.*[@])(?=.*[.])/
  if (!regexEmail.test(email)) {
    return false;
  }
  return true;
}
// password에 대문자, 숫자, 특수문자, 8자리 이상
export const CheckPassword = (password) => {
  const regexPassword = /(?=.*?[A-Z])(?=.*?[0-9])(?=.*[~!@#$%^&*()+|=]).{8,}$/
  if (!regexPassword.test(password)) {
    return false;
  }
  return true;
}
