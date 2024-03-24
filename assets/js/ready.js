window.addEventListener('load', function () {
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: document.querySelector(".navbar"),
    threshold: "0.1",
    rootMargin: "0px 0px -75%"
  });
  var textAreaToResize = document.querySelectorAll('textarea:not(.gsc-comment-box-textarea)');
  if (textAreaToResize) {
    autosize(textAreaToResize);
  }
  var usrForm = document.querySelector('#usrform');
  if(usrForm) {
    usrForm.setAttribute('action', 'https://docs.google.com/forms/d/e/1FAIpQLSdHY8a2G3f9hLv-gar86DYdlf6gsnI6E10Vlh2x-IQpkOE25A/formResponse');
  }
  var commentsForm = document.querySelector("#commentsform");
  if (commentsForm) {
    commentsForm.setAttribute('action', commentsForm.getAttribute("data-action"));
    commentsForm.removeAttribute("data-action");
  }

  var bsTheme = document.documentElement.getAttribute("data-bs-theme");
  setGiscusTheme(bsTheme);
  
  function setGiscusTheme(theme) {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe)
    {
      return;
    }
    iframe.contentWindow.postMessage({ giscus:
      {
        setConfig: {
          theme: theme,
        }
      } 
    }, "https://giscus.app");
  }

  for (let toggle of document.querySelectorAll('[data-bs-theme-value]'))
  {
    toggle.addEventListener('click', () => {
      var theme = toggle.getAttribute('data-bs-theme-value');
      if (theme == "auto") {
        theme = "preferred_color_scheme";
      }
      setGiscusTheme(theme);
    })
  };
}, false);
