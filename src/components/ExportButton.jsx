import { useState } from 'react';
import { Download } from 'lucide-react';
import Button from './ui/Button';
import { generatePdf } from '../utils/generatePdf';

export default function ExportButton({ previewRef, invoiceNumber }) {
  const [loading, setLoading] = useState(false);

  const handleExport = async () => {
    if (!previewRef.current) return;
    setLoading(true);
    try {
      await generatePdf(previewRef.current, invoiceNumber);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleExport} disabled={loading}>
      <Download size={16} />
      {loading ? 'Generating...' : 'Export to PDF'}
    </Button>
  );
}
