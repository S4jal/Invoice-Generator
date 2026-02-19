import Input from '../ui/Input';

export default function InvoiceMeta({ invoice, updateField }) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
        Invoice Details
      </legend>
      <Input
        label="Invoice #"
        id="invoiceNumber"
        value={invoice.invoiceNumber}
        onChange={(e) => updateField('invoiceNumber', e.target.value)}
      />
      <div className="grid grid-cols-2 gap-3">
        <Input
          label="Issue Date"
          id="invoiceDate"
          type="date"
          value={invoice.invoiceDate}
          onChange={(e) => updateField('invoiceDate', e.target.value)}
        />
        <Input
          label="Due Date"
          id="dueDate"
          type="date"
          value={invoice.dueDate}
          onChange={(e) => updateField('dueDate', e.target.value)}
        />
      </div>
    </fieldset>
  );
}
