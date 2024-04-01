document.getElementById('education-level').addEventListener('change', function() {
    var highSchoolDetails = document.getElementById('high-school-details');
    var undergraduateDetails = document.getElementById('undergraduate-details');
    var graduateDetails = document.getElementById('graduate-details');

    highSchoolDetails.style.display = 'none';
    undergraduateDetails.style.display = 'none';
    graduateDetails.style.display = 'none';

    var selectedOption = this.value;
    if (selectedOption === 'high-school') {
      highSchoolDetails.style.display = 'block';
    } else if (selectedOption === 'undergraduate') {
      undergraduateDetails.style.display = 'block';
    } else if (selectedOption === 'graduate') {
      graduateDetails.style.display = 'block';
    }
  });
// Buttons adding additional skill input texts
function addAdditionalField(containerId, inputName, placeholderText) {
var container = document.getElementById(containerId);
var existingButtons = container.querySelectorAll('.add-button');

// Remove existing "+" buttons
existingButtons.forEach(function(button) {
button.remove();
});

// Add a new input field and "+" button with the specified placeholder text
var newField = document.createElement('div');
newField.innerHTML = `
<input type="text" class="additional-input" name="${inputName}${container.children.length + 1}" placeholder="${placeholderText}">
<button type="button" class="add-button">+
`;
container.appendChild(newField);
}

// Add more skills and licenses/certifications
document.getElementById('additional-skills-container').addEventListener('click', function (event) {
if (event.target.classList.contains('add-button')) {
addAdditionalField('additional-skills-container', 'additional-skills-', 'Add another skill');
}
});

document.getElementById('additional-licenses-container').addEventListener('click', function (event) {
if (event.target.classList.contains('add-button')) {
addAdditionalField('additional-licenses-container', 'additional-licenses-', 'Add another license or certification');
}
});

// Submit:
document.addEventListener('DOMContentLoaded', function () {
  var applicationBox = document.querySelector('.Application-box');
  var resultBox = document.getElementById('resultBox');
  var submitButton = document.getElementById('submitButton');
  var printButton = document.getElementById('printButton');
  submitButton.addEventListener('click', submitApplication);

  // Initialize EmailJS with your user ID
  emailjs.init('XXSqVVJP0EodKYiED');

  // Function to send email
  function sendEmail() {
      // Prepare the email parameters
      console.log("sent")
      var emailParams = {
          to_email: 'thelonelycat555@gmail.com',
          from_name: document.getElementById('first-name').value + ' ' + document.getElementById('last-name').value,
          message: 'A new application has been submitted. Please review it.'
      };

      // Send the email
      emailjs.send('service_se94awa', 'template_j3mfi2p', emailParams)
          .then(function(response) {
              console.log('Email sent successfully', response);
              // Optionally, display a success message to the user
              alert('Application submitted successfully!');
          }, function(error) {
              console.error('Email sending failed', error);
              // Optionally, display an error message to the user
              alert('Failed to submit application. Please try again later.');
          });
  }

  // Unhide Results


  // Confirmation and email sending
  function submitApplication() {
      var isConfirmed = confirm("Are you sure you want to submit your application?");
      if (isConfirmed) {
          sendEmail(); // Send email when application is confirmed
          showResultBox();
      }
  }
  function showResultBox() {
    console.log("submitted")
    applicationBox.style.display = 'none';
    resultBox.style.display = 'block';
}
  // Interactivity

});

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

  // Get all additional skills input fields
  var additionalSkillsInputs = document.querySelectorAll(".additional-input[name^='additional-skills-']");
  var additionalSkills = [];

  // Loop through each additional skill input field and collect their values
  additionalSkillsInputs.forEach(function(input) {
      var skill = input.value.trim();
      if (skill !== "") {
          additionalSkills.push(skill);
      }
  });

  // Get all additional licenses/certifications input fields
  var additionalLicensesInputs = document.querySelectorAll(".additional-input[name^='additional-licenses-']");
  var additionalLicenses = [];

  // Loop through each additional license/certification input field and collect their values
  additionalLicensesInputs.forEach(function(input) {
      var license = input.value.trim();
      if (license !== "") {
          additionalLicenses.push(license);
      }
  });

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
      ${additionalSkills.length > 0 ? `<p><strong>Additional Skills:</strong> ${additionalSkills.join(', ')}</p>` : ''}
      ${additionalLicenses.length > 0 ? `<p><strong>Additional Licenses/Certifications:</strong> ${additionalLicenses.join(', ')}</p>` : ''}
  `;

  // Open a new window and write the printable content
  var printFrame = document.getElementById("printFrame");
  var printDoc = printFrame.contentWindow || printFrame.contentDocument;

  printDoc.document.open();
  printDoc.document.write(printableContent);
  printDoc.document.close();

  // Hide any unnecessary elements before printing
  printDoc.document.querySelectorAll("p").forEach(function(paragraph) {
      if (paragraph.innerText.includes(": --") || paragraph.innerText === "<strong>: </strong>") {
          paragraph.style.display = "none";
      }
  });

  // Focus and print the document
  printDoc.focus();
  printDoc.print();
}
