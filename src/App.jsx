import { useRef, useState } from 'react';
import './App.css';
import { useInvoiceState } from './hooks/useInvoiceState';
import InvoiceForm from './components/InvoiceForm/InvoiceForm';
import InvoicePreview from './components/InvoicePreview/InvoicePreview';
import ExportButton from './components/ExportButton';
import Button from './components/ui/Button';
import { FilePlus, PenLine, Eye } from 'lucide-react';

export default function App() {
  const {
    invoice,
    updateField,
    updateLineItem,
    addLineItem,
    removeLineItem,
    resetInvoice,
  } = useInvoiceState();

  const previewRef = useRef(null);
  const [mobileView, setMobileView] = useState('edit');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-screen-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900">Invoice Generator</h1>
          <div className="flex items-center gap-2">
            <Button variant="secondary" onClick={resetInvoice}>
              <FilePlus size={16} /> New Invoice
            </Button>
            <ExportButton previewRef={previewRef} invoiceNumber={invoice.invoiceNumber} />
          </div>
        </div>
      </header>

      {/* Mobile view toggle */}
      <div className="lg:hidden flex border-b border-gray-200 bg-white">
        <button
          onClick={() => setMobileView('edit')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
            mobileView === 'edit'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <PenLine size={16} /> Edit
        </button>
        <button
          onClick={() => setMobileView('preview')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
            mobileView === 'preview'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Eye size={16} /> Preview
        </button>
      </div>

      {/* Main layout */}
      <div className="max-w-screen-2xl mx-auto lg:grid lg:grid-cols-2 lg:gap-6 p-4">
        {/* Form panel */}
        <div
          className={`bg-white rounded-lg shadow-sm overflow-y-auto ${
            mobileView === 'edit' ? 'block' : 'hidden'
          } lg:block`}
          style={{ maxHeight: 'calc(100vh - 80px)' }}
        >
          <InvoiceForm
            invoice={invoice}
            updateField={updateField}
            updateLineItem={updateLineItem}
            addLineItem={addLineItem}
            removeLineItem={removeLineItem}
          />
        </div>

        {/* Preview panel */}
        <div
          className={`lg:sticky lg:top-[65px] overflow-y-auto ${
            mobileView === 'preview' ? 'block' : 'hidden'
          } lg:block`}
          style={{ maxHeight: 'calc(100vh - 80px)' }}
        >
          <InvoicePreview ref={previewRef} invoice={invoice} />
        </div>
      </div>
    </div>
  );
}
