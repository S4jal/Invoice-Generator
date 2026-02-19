import html2pdf from 'html2pdf.js';

export function generatePdf(element, invoiceNumber) {
  const opt = {
    margin: 0,
    filename: `${invoiceNumber || 'invoice'}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
  };

  return html2pdf().set(opt).from(element).save();
}
