'use client';
import React, { useState } from 'react';

interface OrderItem {
  name: string;
  price: number;
}

interface CheckoutPageProps {
  orderItems: OrderItem[];
}

const InputField: React.FC<{ label: string; placeholder: string; value: string; onChange: (value: string) => void }> = ({ label, placeholder, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type="text"
      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#f5e9d5] text-gray-900 placeholder-gray-500"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const ShippingAddressForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
      <div className="grid grid-cols-2 gap-4">
        <InputField label="First Name" placeholder="John" value={firstName} onChange={setFirstName} />
        <InputField label="Last Name" placeholder="Doe" value={lastName} onChange={setLastName} />
      </div>
      <InputField label="Address" placeholder="123 Main St" value={address} onChange={setAddress} />
      <div className="grid grid-cols-2 gap-4">
        <InputField label="City" placeholder="New York" value={city} onChange={setCity} />
        <InputField label="State" placeholder="NY" value={state} onChange={setState} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Zip Code" placeholder="10001" value={zipCode} onChange={setZipCode} />
        <InputField label="Country" placeholder="United States" value={country} onChange={setCountry} />
      </div>
    </div>
  );
};

const PaymentForm: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Payment</h2>
      <InputField label="Card Number" placeholder="4111 1111 1111 1111" value={cardNumber} onChange={setCardNumber} />
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Expiration" placeholder="MM/YY" value={expiration} onChange={setExpiration} />
        <InputField label="CVV" placeholder="123" value={cvv} onChange={setCvv} />
      </div>
    </div>
  );
};

const OrderSummary: React.FC<{ items: OrderItem[] }> = ({ items }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const shipping = 9.99;
  const tax = subtotal * 0.075; // Assuming 7.5% tax rate
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      {items.map((item, index) => (
        <div key={index} className="flex justify-between mb-2">
          <span>{item.name}</span>
          <span>${item.price.toFixed(2)}</span>
        </div>
      ))}
      <div className="border-t border-gray-200 my-4"></div>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Tax</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="border-t border-gray-200 my-4"></div>
      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className="w-full mt-6 bg-[#d2b48c] text-gray-900 py-2 px-4 rounded-md hover:bg-[#c1a478] transition duration-300">
        Place Order
      </button>
    </div>
  );
};

const CheckoutPage: React.FC<CheckoutPageProps> = ({ orderItems }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-[#e8d7be]">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ShippingAddressForm />
          <PaymentForm />
        </div>
        <div>
          <OrderSummary items={orderItems} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;