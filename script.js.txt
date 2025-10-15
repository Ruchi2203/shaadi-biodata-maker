function generateBiodata() {
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const education = document.getElementById("education").value;
  const occupation = document.getElementById("occupation").value;
  const hobbies = document.getElementById("hobbies").value;

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <h2>Biodata Preview</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Education:</strong> ${education}</p>
    <p><strong>Occupation:</strong> ${occupation}</p>
    <p><strong>Hobbies:</strong> ${hobbies}</p>
  `;
}

// Download biodata as PDF
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const education = document.getElementById("education").value;
  const occupation = document.getElementById("occupation").value;
  const hobbies = document.getElementById("hobbies").value;

  doc.setFontSize(18);
  doc.text("Shaadi Biodata", 105, 20, { align: "center" });

  doc.setFontSize(12);
  doc.text(`Name: ${name}`, 20, 40);
  doc.text(`Date of Birth: ${dob}`, 20, 50);
  doc.text(`Education: ${education}`, 20, 60);
  doc.text(`Occupation: ${occupation}`, 20, 70);
  doc.text(`Hobbies: ${hobbies}`, 20, 80);

  doc.save("biodata.pdf");
}
