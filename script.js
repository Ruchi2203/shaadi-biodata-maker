let selectedTemplate = "template1";
const templateSelect = document.getElementById("template");
templateSelect.addEventListener("change", () => {
  selectedTemplate = templateSelect.value;
});

let profileImageData = "";
document.getElementById("profileImage").addEventListener("change", function(e) {
  const file = e.target.files[0];
  if(file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      profileImageData = evt.target.result;
    }
    reader.readAsDataURL(file);
  }
});

function generateBiodata() {
  const output = document.getElementById("output");
  const fields = Array.from(document.querySelectorAll("#biodataForm input")).map(i => `<p><strong>${i.placeholder}:</strong> ${i.value}</p>`).join("");
  output.innerHTML = `
    <h2>Preview (${selectedTemplate})</h2>
    ${profileImageData ? `<img src="${profileImageData}" style="max-width:100px;display:block;margin:0 auto;border-radius:50%;">` : ''}
    <div class="${selectedTemplate}">
      ${fields}
    </div>
  `;
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('p', 'pt', 'a4');
  let y = 40;

  // Template Styles
  switch(selectedTemplate){
    case "template1":
      doc.setTextColor("#ff4081");
      doc.setFont("helvetica","bold");
      break;
    case "template2":
      doc.setTextColor("#1976d2");
      doc.setFont("helvetica","normal");
      break;
    case "template3":
      doc.setTextColor("#b8860b");
      doc.setFont("times","bold");
      break;
    case "template4":
      doc.setTextColor("#388e3c");
      doc.setFont("helvetica","italic");
      break;
    case "template5":
      doc.setTextColor("#d32f2f");
      doc.setFont("courier","bold");
      break;
    case "template6":
      doc.setTextColor("#9c27b0");
      doc.setFont("helvetica","normal");
      break;
    case "template7":
      doc.setTextColor("#ffffff");
      doc.setFont("helvetica","bold");
      doc.setFillColor(33,33,33); // Dark background
      doc.rect(0,0,595,842,'F'); // Full page fill
      doc.setTextColor("#ffffff");
      break;
  }

  // Title
  doc.setFontSize(20);
  doc.text("Shaadi Biodata", 40, y);
  y += 30;

  if(profileImageData){
    doc.addImage(profileImageData, 'JPEG', 400, 20, 100, 100);
  }

  doc.setFontSize(12);
  const lines = document.getElementById("output").innerText.split('\n');
  lines.forEach(line => {
    doc.text(line, 40, y);
    y += 20;
  });

  doc.save("Biodata.pdf");
}
