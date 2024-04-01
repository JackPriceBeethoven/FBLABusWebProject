function printFormData() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var workedBefore = document.getElementById("worked-before").value;
  var phoneNumber = document.getElementById("phone-number").value;
  var state = document.getElementById("state").value;
  var city = document.getElementById("city").value;
  var street = document.getElementById("street").value;
  var postalCode = document.getElementById("postal-code").value;
  var legalToWork = document.getElementById("legal-to-work").value;
  var educationLevel = document.getElementById("education-level").value;
  var schoolAttended = document.getElementById("school-attended").value;
  var highSchoolCity = document.getElementById("high-school-city").value;
  var highSchoolState = document.getElementById("high-school-state").value;
  var gradeCompleted = document.getElementById("grade-completed").value;
  var country = document.getElementById("country").value;
  var schoolType = document.getElementById("school-type").value;
  var schoolName = document.getElementById("school-name").value;
  var undergradCity = document.getElementById("undergrad-city").value;
  var undergradState = document.getElementById("undergrad-state").value;
  var graduationDateUndergrad = document.getElementById("graduation-date").value;
  var degreeType = document.getElementById("degree-type").value;
  var subjectUndergrad = document.getElementById("subject").value;
  var undergradCountry = document.getElementById("undergrad-country").value;
  var gradSchoolName = document.getElementById("grad-school-name").value;
  var gradCity = document.getElementById("grad-city").value;
  var gradState = document.getElementById("grad-state").value;
  var graduationDateGrad = document.getElementById("graduation-date").value;
  var degreeTypeGrad = document.getElementById("degree-type").value;
  var degreeSubjectGrad = document.getElementById("degree-subject").value;
  var gradCountry = document.getElementById("grad-country").value;
  var employer1 = document.getElementById("employer-1").value;
  var employedFrom1 = document.getElementById("employed-from-1").value;
  var employedTo1 = document.getElementById("employed-to-1").value;
  var reasonForLeaving1 = document.getElementById("reason-for-leaving-1").value;
  var contactEmployer1 = document.getElementById("contact-employer-1").value;
  var employer2 = document.getElementById("employer-2").value;
  var employedFrom2 = document.getElementById("employed-from-2").value;
  var employedTo2 = document.getElementById("employed-to-2").value;
  var reasonForLeaving2 = document.getElementById("reason-for-leaving-2").value;
  var contactEmployer2 = document.getElementById("contact-employer-2").value;
  var employer3 = document.getElementById("employer-3").value;
  var employedFrom3 = document.getElementById("employed-from-3").value;
  var employedTo3 = document.getElementById("employed-to-3").value;
  var reasonForLeaving3 = document.getElementById("reason-for-leaving-3").value;
  var contactEmployer3 = document.getElementById("contact-employer-3").value;
  var additionalSkills1 = document.getElementById("additional-skills-1").value;
  var additionalLicenses1 = document.getElementById("additional-licenses-1").value;

  // Create a printable HTML content
  var printableContent = `
  <div style="display: flex; justify-content: space-between;">
  <h1 id="webpage-title"> </h1>
  <h2 id="application-title">${firstName} ${lastName} Application</h2>
</div>
    ${firstName && `<p><strong>First Name:</strong> ${firstName}</p>`}
    ${lastName && `<p><strong>Last Name:</strong> ${lastName}</p>`}
    ${email && `<p><strong>Email:</strong> ${email}</p>`}
    ${workedBefore && `<p><strong>Worked Before:</strong> ${workedBefore}</p>`}
    ${phoneNumber && `<p><strong>Phone Number:</strong> ${phoneNumber}</p>`}
    ${state && `<p><strong>State:</strong> ${state}</p>`}
    ${city && `<p><strong>City:</strong> ${city}</p>`}
    ${street && `<p><strong>Street:</strong> ${street}</p>`}
    ${postalCode && `<p><strong>Postal Code:</strong> ${postalCode}</p>`}
    ${legalToWork && `<p><strong>Legal to Work:</strong> ${legalToWork}</p>`}
    ${educationLevel && `<p><strong>Education Level:</strong> ${educationLevel}</p>`}
    ${schoolAttended && `<p><strong>School Attended:</strong> ${schoolAttended}</p>`}
    ${highSchoolCity && `<p><strong>High School City:</strong> ${highSchoolCity}</p>`}
    ${highSchoolState && `<p><strong>High School State:</strong> ${highSchoolState}</p>`}
    ${gradeCompleted && `<p><strong>Grade Completed:</strong> ${gradeCompleted}</p>`}
    ${country && `<p><strong>Country:</strong> ${country}</p>`}
    ${schoolType && `<p><strong>School Type:</strong> ${schoolType}</p>`}
    ${schoolName && `<p><strong>School Name:</strong> ${schoolName}</p>`}
    ${undergradCity && `<p><strong>Undergraduate City:</strong> ${undergradCity}</p>`}
    ${undergradState && `<p><strong>Undergraduate State:</strong> ${undergradState}</p>`}
    ${graduationDateUndergrad && `<p><strong>Graduation Date (Undergrad):</strong> ${graduationDateUndergrad}</p>`}
    ${degreeType && `<p><strong>Degree Type:</strong> ${degreeType}</p>`}
    ${subjectUndergrad && `<p><strong>Subject (Undergrad):</strong> ${subjectUndergrad}</p>`}
    ${undergradCountry && `<p><strong>Undergrad Country:</strong> ${undergradCountry}</p>`}
    ${gradSchoolName && `<p><strong>Grad School Name:</strong> ${gradSchoolName}</p>`}
    ${gradCity && `<p><strong>Grad City:</strong> ${gradCity}</p>`}
    ${gradState && `<p><strong>Grad State:</strong> ${gradState}</p>`}
    ${graduationDateGrad && `<p><strong>Graduation Date (Grad):</strong> ${graduationDateGrad}</p>`}
    ${degreeTypeGrad && `<p><strong>Degree Type (Grad):</strong> ${degreeTypeGrad}</p>`}
    ${degreeSubjectGrad && `<p><strong>Degree Subject (Grad):</strong> ${degreeSubjectGrad}</p>`}
    ${gradCountry && `<p><strong>Grad Country:</strong> ${gradCountry}</p>`}
    ${employer1 && `<p><strong>Employer 1:</strong> ${employer1}</p>`}
    ${employedFrom1 && `<p><strong>Employed From 1:</strong> ${employedFrom1}</p>`}
    ${employedTo1 && `<p><strong>Employed To 1:</strong> ${employedTo1}</p>`}
    ${reasonForLeaving1 && `<p><strong>Reason for Leaving 1:</strong> ${reasonForLeaving1}</p>`}
    ${contactEmployer1 && `<p><strong>Contact Employer 1:</strong> ${contactEmployer1}</p>`}
    ${employer2 && `<p><strong>Employer 2:</strong> ${employer2}</p>`}
    ${employedFrom2 && `<p><strong>Employed From 2:</strong> ${employedFrom2}</p>`}
    ${employedTo2 && `<p><strong>Employed To 2:</strong> ${employedTo2}</p>`}
    ${reasonForLeaving2 && `<p><strong>Reason for Leaving 2:</strong> ${reasonForLeaving2}</p>`}
    ${contactEmployer2 && `<p><strong>Contact Employer 2:</strong> ${contactEmployer2}</p>`}
    ${employer3 && `<p><strong>Employer 3:</strong> ${employer3}</p>`}
    ${employedFrom3 && `<p><strong>Employed From 3:</strong> ${employedFrom3}</p>`}
    ${employedTo3 && `<p><strong>Employed To 3:</strong> ${employedTo3}</p>`}
    ${reasonForLeaving3 && `<p><strong>Reason for Leaving 3:</strong> ${reasonForLeaving3}</p>`}
    ${contactEmployer3 && `<p><strong>Contact Employer 3:</strong> ${contactEmployer3}</p>`}
    ${additionalSkills1 && `<p><strong>Additional Skills 1:</strong> ${additionalSkills1}</p>`}
    ${additionalLicenses1 && `<p><strong>Additional Licenses 1:</strong> ${additionalLicenses1}</p>`}
  `;

  var printFrame = document.getElementById("printFrame");
  var printDoc = printFrame.contentWindow || printFrame.contentDocument;

  printDoc.document.open();
  printDoc.document.write(printableContent);
  printDoc.document.close();

  // Running the if statement before printing the document
  printDoc.document.querySelectorAll("p").forEach(function(paragraph) {
    if (paragraph.innerText.includes(": --") || paragraph.innerText === "<strong>: </strong>") {
      paragraph.style.display = "none";
    }
  });

  printDoc.focus();
  printDoc.print();
}