import { forwardRef } from 'react';
import PreviewLineItem from './PreviewLineItem';
import { formatCurrency } from '../../utils/formatCurrency';
import { subtotal, taxAmount, discountAmount, total } from '../../utils/calculations';

const InvoicePreview = forwardRef(function InvoicePreview({ invoice }, ref) {
  const sub = subtotal(invoice.lineItems);
  const tax = taxAmount(sub, invoice.taxRate);
  const disc = discountAmount(sub, invoice.discountValue, invoice.discountType);
  const grandTotal = total(invoice.lineItems, invoice.taxRate, invoice.discountValue, invoice.discountType);

  return (
    <div
      ref={ref}
      className="bg-white max-w-[210mm] mx-auto p-10 shadow-sm text-gray-900"
      style={{ minHeight: '297mm' }}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <div className="flex items-center gap-4">
          {invoice.logo && (
            <img src={invoice.logo} alt="Logo" className="h-16 w-16 object-contain" />
          )}
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              {invoice.companyName || 'Your Company'}
            </h1>
            {invoice.companyEmail && (
              <p className="text-sm text-gray-500">{invoice.companyEmail}</p>
            )}
            {invoice.companyPhone && (
              <p className="text-sm text-gray-500">{invoice.companyPhone}</p>
            )}
            {invoice.companyAddress && (
              <p className="text-sm text-gray-500">{invoice.companyAddress}</p>
            )}
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-3xl font-bold text-gray-300 uppercase tracking-wider">Invoice</h2>
          <p className="text-sm mt-1 font-medium">{invoice.invoiceNumber || '—'}</p>
        </div>
      </div>

      {/* Client + Dates */}
      <div className="flex justify-between mb-10">
        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Bill To</h3>
          <p className="font-medium">{invoice.clientName || '—'}</p>
          {invoice.clientEmail && <p className="text-sm text-gray-500">{invoice.clientEmail}</p>}
          {invoice.clientAddress && <p className="text-sm text-gray-500">{invoice.clientAddress}</p>}
        </div>
        <div className="text-right text-sm space-y-1">
          <div>
            <span className="text-gray-400">Issue Date: </span>
            <span>{invoice.invoiceDate || '—'}</span>
          </div>
          <div>
            <span className="text-gray-400">Due Date: </span>
            <span>{invoice.dueDate || '—'}</span>
          </div>
        </div>
      </div>

      {/* Line Items Table */}
      <table className="w-full mb-8">
        <thead>
          <tr className="border-b-2 border-gray-300 text-xs font-semibold text-gray-400 uppercase tracking-wide">
            <th className="py-2 pr-4 text-left w-8">#</th>
            <th className="py-2 pr-4 text-left">Description</th>
            <th className="py-2 pr-4 text-right w-16">Qty</th>
            <th className="py-2 pr-4 text-right w-24">Rate</th>
            <th className="py-2 text-right w-28">Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoice.lineItems.map((item, i) => (
            <PreviewLineItem key={item.id} item={item} index={i} />
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="flex justify-end">
        <div className="w-64 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Subtotal</span>
            <span>{formatCurrency(sub)}</span>
          </div>
          {invoice.taxRate > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-500">Tax ({invoice.taxRate}%)</span>
              <span>{formatCurrency(tax)}</span>
            </div>
          )}
          {disc > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-500">
                Discount
                {invoice.discountType === 'percent' ? ` (${invoice.discountValue}%)` : ''}
              </span>
              <span className="text-red-500">-{formatCurrency(disc)}</span>
            </div>
          )}
          <div className="flex justify-between border-t-2 border-gray-900 pt-2 text-base font-bold">
            <span>Total</span>
            <span>{formatCurrency(grandTotal)}</span>
          </div>
        </div>
      </div>

      {/* Notes */}
      {invoice.notes && (
        <div className="mt-10 pt-6 border-t border-gray-200">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Notes</h3>
          <p className="text-sm text-gray-600 whitespace-pre-wrap">{invoice.notes}</p>
        </div>
      )}
    </div>
  );
});

export default InvoicePreview;
