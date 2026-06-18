"use client";

import React from 'react';
import { usePaystackPayment } from 'react-paystack';

interface PaymentButtonProps {
  email: string;
  amount: number;
  onSuccess: () => void;
}

export default function PaymentButton({ email, amount, onSuccess }: PaymentButtonProps) {
  const paystackConfig = {
    reference: `FA_${(new Date()).getTime()}`,
    email: email || 'customer@example.com',
    amount: amount,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || 'pk_test_87b4fb2bd3c8c93db85af8dad85bbbfa0d94d869',
    currency: 'GHS',
  };

  const initializePayment = usePaystackPayment(paystackConfig);

  const onClose = () => {
    console.log('Payment modal closed');
  };

  return (
    <button 
      onClick={() => initializePayment({ onSuccess, onClose } as any)}
      className="bg-black hover:bg-gray-800 text-white py-3.5 px-8 rounded-xl font-bold text-sm tracking-widest uppercase transition-all"
    >
      Proceed to Subscribe
    </button>
  );
}
