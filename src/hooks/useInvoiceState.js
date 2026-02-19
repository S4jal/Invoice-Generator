import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { createDefaultInvoice } from '../utils/defaultInvoice';

export function useInvoiceState() {
  const [invoice, setInvoice] = useLocalStorage(
    'invoice-draft',
    createDefaultInvoice()
  );

  const updateField = useCallback((field, value) => {
    setInvoice((prev) => ({ ...prev, [field]: value }));
  }, [setInvoice]);

  const updateLineItem = useCallback((id, field, value) => {
    setInvoice((prev) => ({
      ...prev,
      lineItems: prev.lineItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  }, [setInvoice]);

  const addLineItem = useCallback(() => {
    setInvoice((prev) => ({
      ...prev,
      lineItems: [
        ...prev.lineItems,
        { id: crypto.randomUUID(), description: '', quantity: 1, rate: 0 },
      ],
    }));
  }, [setInvoice]);

  const removeLineItem = useCallback((id) => {
    setInvoice((prev) => ({
      ...prev,
      lineItems: prev.lineItems.length > 1
        ? prev.lineItems.filter((item) => item.id !== id)
        : prev.lineItems,
    }));
  }, [setInvoice]);

  const resetInvoice = useCallback(() => {
    setInvoice(createDefaultInvoice());
  }, [setInvoice]);

  return {
    invoice,
    updateField,
    updateLineItem,
    addLineItem,
    removeLineItem,
    resetInvoice,
  };
}
