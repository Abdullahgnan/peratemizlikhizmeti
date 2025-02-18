'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <Card className="p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Mesaj Gönderin</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Adınız Soyadınız
          </label>
          <Input
            id="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            required
            placeholder="Adınız Soyadınız"
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            E-posta Adresiniz
          </label>
          <Input
            id="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            required
            placeholder="ornek@email.com"
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Telefon Numaranız
          </label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="0500 000 00 00"
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Mesajınız
          </label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Mesajınızı buraya yazın..."
            className="w-full min-h-[150px]"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Gönderiliyor...' : 'Gönder'}
        </Button>

        {status === 'success' && (
          <p className="text-green-600 text-center">Mesajınız başarıyla gönderildi!</p>
        )}
        
        {status === 'error' && (
          <p className="text-red-600 text-center">Bir hata oluştu. Lütfen tekrar deneyin.</p>
        )}
      </form>
    </Card>
  );
} 