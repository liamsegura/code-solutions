//Write a function that converts any sentence into a V A P O R W A V E sentence, Note that spaces should be ignored in this case.
function vaporcode(string) {
    return string.toUpperCase().replace(/\s/g, "").split('').join('  ')
  }