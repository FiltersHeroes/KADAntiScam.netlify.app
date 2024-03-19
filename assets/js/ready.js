window.addEventListener('load', function () {
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: document.querySelector(".navbar"),
    threshold: "0.1",
    rootMargin: "0px 0px -75%"
  });
  autosize(document.querySelectorAll('textarea'));
  var usrForm = document.querySelector('#usrform');
  if(usrForm) {
    usrForm.setAttribute('action', 'https://docs.google.com/forms/d/e/1FAIpQLSdHY8a2G3f9hLv-gar86DYdlf6gsnI6E10Vlh2x-IQpkOE25A/formResponse');
  }
  var commentsForm = document.querySelector("#commentsform");
  if (commentsForm) {
    commentsForm.setAttribute('action', commentsForm.getAttribute("data-action"));
    commentsForm.removeAttr("data-action");
  }
}, false);
