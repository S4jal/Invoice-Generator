import { Plus } from 'lucide-react';
import LineItemRow from './LineItemRow';
import Button from '../ui/Button';

export default function LineItems({ items, updateLineItem, addLineItem, removeLineItem }) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
        Line Items
      </legend>
      <div className="space-y-2">
        {items.map((item) => (
          <LineItemRow
            key={item.id}
            item={item}
            onChange={updateLineItem}
            onRemove={removeLineItem}
            canRemove={items.length > 1}
          />
        ))}
      </div>
      <Button type="button" variant="secondary" onClick={addLineItem}>
        <Plus size={16} /> Add Line
      </Button>
    </fieldset>
  );
}
