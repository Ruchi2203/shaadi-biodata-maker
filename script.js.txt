let selectedTemplate = "template1";
let profileImageData = "";

// Template Selection
document.getElementById("template").addEventListener("change", function() {
  selectedTemplate = this.value;
  generateBiodata();
});

// Profile Image Upload
document.getElementById("profileImage").addEventListener("change", function(e) {
  const file = e.target.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(evt){
      profileImageData = evt.target.result;
      generateBiodata();
    }
    reader.readAsDataURL(file);
  }
});

// Live Preview
function generateBiodata(){
  const output = document.getElementById("output");
  const inputs = Array.from(document.querySelectorAll("#biodataForm input, #biodataForm select"));
  
  const html = inputs.map(i => {
    if(i.type === "file") return "";
    return `<p><strong>${i.placeholder}:</strong> ${i.value}</p>`;
  }).join("");

  output.innerHTML = `
    ${profileImageData ? `<img src="${profileImageData}">` : ''}
    <div class="${selectedTemplate}">${html}</div>
  `;
}

// Download PDF
function downloadPDF(){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('p','pt','a4');
  let y = 40;

  // Template Styling
  switch(selectedTemplate){
    case "template1": doc.setTextColor("#e91e63"); doc.setFont("helvetica","bold"); break;
    case "template2": doc.setTextColor("#1976d2"); doc.setFont("helvetica","normal"); break;
    case "template3": doc.setTextColor("#b8860b"); doc.setFont("times","bold"); break;
    case "template4": doc.setTextColor("#388e3c"); doc.setFont("helvetica","italic"); break;
    case "template5": doc.setTextColor("#d32f2f"); doc.setFont("courier","bold"); break;
    case "template6": doc.setTextColor("#9c27b0"); doc.setFont("helvetica","normal"); break;
    case "template7": 
      doc.setFillColor(33,33,33); 
      doc.rect(0,0,595,842,'F'); 
      doc.setTextColor("#fff"); 
      doc.setFont("helvetica","bold"); 
      break;
  }

  doc.setFontSize(22);
  doc.text("💍 Shaadi Biodata", 40, y);
  y += 30;

  // Add Profile Image
  if(profileImageData){
    doc.addImage(profileImageData,'JPEG',400,20,120,90);
  }

  doc.setFontSize(12);
  doc.setTextColor(doc.getTextColor() || "#000");

  // Get all visible fields from preview
  const outputDiv = document.getElementById("output");
  const lines = Array.from(outputDiv.querySelectorAll('p')).map(p => p.innerText);

  // Section Headers Styling
  lines.forEach(line => {
    if(line.includes("Details") || line.includes("Information") || line.includes("Image")){
      doc.setFont("helvetica","bold");
      doc.setFontSize(14);
      doc.setTextColor(doc.getTextColor());
      doc.text(line, 40, y);
      y += 18;
      doc.setFontSize(12);
      doc.setFont("helvetica","normal");
    } else {
      doc.text(line, 40, y);
      y += 16;
    }
    if(y > 780){ // Page break
      doc.addPage();
      y = 40;
    }
  });

  doc.save("Shaadi_Biodata.pdf");
}
