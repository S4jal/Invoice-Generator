import Input from '../ui/Input';

export default function ClientInfoSection({ invoice, updateField }) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
        Bill To
      </legend>
      <Input
        label="Client Name"
        id="clientName"
        value={invoice.clientName}
        onChange={(e) => updateField('clientName', e.target.value)}
        placeholder="Jane Smith"
      />
      <Input
        label="Client Email"
        id="clientEmail"
        type="email"
        value={invoice.clientEmail}
        onChange={(e) => updateField('clientEmail', e.target.value)}
        placeholder="jane@client.com"
      />
      <Input
        label="Client Address"
        id="clientAddress"
        value={invoice.clientAddress}
        onChange={(e) => updateField('clientAddress', e.target.value)}
        placeholder="456 Oak Ave, Town, ST 11111"
      />
    </fieldset>
  );
}
