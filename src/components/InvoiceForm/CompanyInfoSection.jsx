import Input from '../ui/Input';
import LogoUploader from '../ui/LogoUploader';

export default function CompanyInfoSection({ invoice, updateField }) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
        Your Company
      </legend>
      <LogoUploader logo={invoice.logo} onChange={(v) => updateField('logo', v)} />
      <Input
        label="Company Name"
        id="companyName"
        value={invoice.companyName}
        onChange={(e) => updateField('companyName', e.target.value)}
        placeholder="Acme Inc."
      />
      <Input
        label="Email"
        id="companyEmail"
        type="email"
        value={invoice.companyEmail}
        onChange={(e) => updateField('companyEmail', e.target.value)}
        placeholder="billing@acme.com"
      />
      <Input
        label="Phone"
        id="companyPhone"
        type="tel"
        value={invoice.companyPhone}
        onChange={(e) => updateField('companyPhone', e.target.value)}
        placeholder="(555) 123-4567"
      />
      <Input
        label="Address"
        id="companyAddress"
        value={invoice.companyAddress}
        onChange={(e) => updateField('companyAddress', e.target.value)}
        placeholder="123 Main St, City, ST 00000"
      />
    </fieldset>
  );
}
