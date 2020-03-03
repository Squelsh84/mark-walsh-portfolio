function sendMail(contactForm) {
  emailjs.send("gmail", "mark_walsh", {
    "from_name": contactForm.name.value,
    "from_email": contactForm.emailaddress.value,
    "portfolio_request": contactForm.portfoliosummary.value
  })
    .then(
      function (response) {
        console.log("SUCCESS", response);
        window.location.replace("https://www.markwalsh.dev/thanks.html");
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
  return false;  // To block from loading a new page
}