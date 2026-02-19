import { Trash2 } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';
import { lineItemTotal } from '../../utils/calculations';

export default function LineItemRow({ item, onChange, onRemove, canRemove }) {
  return (
    <div className="grid grid-cols-[1fr_80px_100px_100px_36px] gap-2 items-end">
      <div>
        <label className="block text-xs text-gray-500 mb-1">Description</label>
        <input
          className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          value={item.description}
          onChange={(e) => onChange(item.id, 'description', e.target.value)}
          placeholder="Service or product"
        />
      </div>
      <div>
        <label className="block text-xs text-gray-500 mb-1">Qty</label>
        <input
          type="number"
          min="0"
          className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-right focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          value={item.quantity}
          onChange={(e) => onChange(item.id, 'quantity', Math.max(0, Number(e.target.value)))}
        />
      </div>
      <div>
        <label className="block text-xs text-gray-500 mb-1">Rate</label>
        <input
          type="number"
          min="0"
          step="0.01"
          className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-right focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          value={item.rate}
          onChange={(e) => onChange(item.id, 'rate', Math.max(0, Number(e.target.value)))}
        />
      </div>
      <div className="text-sm text-right py-1.5 font-medium text-gray-700">
        {formatCurrency(lineItemTotal(item))}
      </div>
      <button
        type="button"
        onClick={() => onRemove(item.id)}
        disabled={!canRemove}
        className="p-1.5 text-gray-400 hover:text-red-500 disabled:opacity-30 disabled:hover:text-gray-400"
        title="Remove line"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
