import { useState } from 'react';

export function useRegisterForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    level: 'FGKM',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        alert('Registered successfully!');
      } else {
        const error = await response.json();
        alert('Registration failed: ' + (error.message || 'Unknown error'));
      }
    } catch (err) {
      alert('Error connecting to server.');
    }
  };

  return { form, handleChange, handleSubmit };
}