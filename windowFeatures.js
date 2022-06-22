function scrollDown(objectId){
  var object = document.getElementById(objectId);
  object.scrollIntoView({
    behavior: "smooth",
  })
}

function scrollUp(yValue = 0){
  absoluteY = window.scrollY;
  if(yValue == 0){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  } else {
    window.scrollTo({
      top: absoluteY - yValue,
      left: 0,
      behavior: "smooth"
    })
  }
}
