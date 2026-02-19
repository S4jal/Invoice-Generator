import { formatCurrency } from '../../utils/formatCurrency';
import { lineItemTotal } from '../../utils/calculations';

export default function PreviewLineItem({ item, index }) {
  return (
    <tr className="border-b border-gray-200" style={{ pageBreakInside: 'avoid' }}>
      <td className="py-2 pr-4 text-gray-500 text-sm">{index + 1}</td>
      <td className="py-2 pr-4 text-sm">{item.description || '—'}</td>
      <td className="py-2 pr-4 text-sm text-right">{item.quantity}</td>
      <td className="py-2 pr-4 text-sm text-right">{formatCurrency(item.rate)}</td>
      <td className="py-2 text-sm text-right font-medium">{formatCurrency(lineItemTotal(item))}</td>
    </tr>
  );
}
