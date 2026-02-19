let counter = 1;

export function createDefaultInvoice() {
  const today = new Date().toISOString().slice(0, 10);
  const due = new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10);

  return {
    companyName: '',
    companyAddress: '',
    companyEmail: '',
    companyPhone: '',
    logo: null,

    clientName: '',
    clientEmail: '',
    clientAddress: '',

    invoiceNumber: `INV-${String(counter++).padStart(4, '0')}`,
    invoiceDate: today,
    dueDate: due,

    lineItems: [
      { id: crypto.randomUUID(), description: '', quantity: 1, rate: 0 },
    ],

    taxRate: 0,
    discountValue: 0,
    discountType: 'flat', // 'flat' | 'percent'

    notes: '',
  };
}
