export function lineItemTotal(item) {
  const qty = Math.max(0, Number(item.quantity) || 0);
  const rate = Number(item.rate) || 0;
  return qty * rate;
}

export function subtotal(lineItems) {
  return lineItems.reduce((sum, item) => sum + lineItemTotal(item), 0);
}

export function taxAmount(sub, taxRate) {
  return sub * ((Number(taxRate) || 0) / 100);
}

export function discountAmount(sub, discountValue, discountType) {
  const v = Number(discountValue) || 0;
  if (v <= 0) return 0;
  return discountType === 'percent' ? sub * (v / 100) : v;
}

export function total(lineItems, taxRate, discountValue, discountType) {
  const sub = subtotal(lineItems);
  const tax = taxAmount(sub, taxRate);
  const disc = discountAmount(sub, discountValue, discountType);
  return Math.max(0, sub + tax - disc);
}
