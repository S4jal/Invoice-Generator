import CompanyInfoSection from './CompanyInfoSection';
import ClientInfoSection from './ClientInfoSection';
import InvoiceMeta from './InvoiceMeta';
import LineItems from './LineItems';
import Totals from './Totals';

export default function InvoiceForm({
  invoice,
  updateField,
  updateLineItem,
  addLineItem,
  removeLineItem,
}) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="space-y-6 p-6"
    >
      <CompanyInfoSection invoice={invoice} updateField={updateField} />
      <hr className="border-gray-200" />
      <ClientInfoSection invoice={invoice} updateField={updateField} />
      <hr className="border-gray-200" />
      <InvoiceMeta invoice={invoice} updateField={updateField} />
      <hr className="border-gray-200" />
      <LineItems
        items={invoice.lineItems}
        updateLineItem={updateLineItem}
        addLineItem={addLineItem}
        removeLineItem={removeLineItem}
      />
      <hr className="border-gray-200" />
      <Totals invoice={invoice} updateField={updateField} />
    </form>
  );
}
