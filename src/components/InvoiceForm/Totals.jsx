import Input from '../ui/Input';
import TextArea from '../ui/TextArea';

export default function Totals({ invoice, updateField }) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
        Totals & Notes
      </legend>
      <div className="grid grid-cols-2 gap-3">
        <Input
          label="Tax %"
          id="taxRate"
          type="number"
          min="0"
          step="0.1"
          value={invoice.taxRate}
          onChange={(e) => updateField('taxRate', Math.max(0, Number(e.target.value)))}
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Discount</label>
          <div className="flex gap-1">
            <input
              type="number"
              min="0"
              step="0.01"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              value={invoice.discountValue}
              onChange={(e) =>
                updateField('discountValue', Math.max(0, Number(e.target.value)))
              }
            />
            <select
              value={invoice.discountType}
              onChange={(e) => updateField('discountType', e.target.value)}
              className="rounded-md border border-gray-300 px-2 py-2 text-sm bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            >
              <option value="flat">$</option>
              <option value="percent">%</option>
            </select>
          </div>
        </div>
      </div>
      <TextArea
        label="Notes"
        id="notes"
        value={invoice.notes}
        onChange={(e) => updateField('notes', e.target.value)}
        placeholder="Payment terms, bank details, thank you note..."
      />
    </fieldset>
  );
}
