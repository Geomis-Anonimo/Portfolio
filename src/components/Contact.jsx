import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID_EMAILJS, // Service ID
        import.meta.env.VITE_TEMPLATE_ID, // Template ID
        form.current,
        import.meta.env.VITE_PUBLIC_KEY // Public Key
      );

      if (result.text === 'OK') {
        setStatus('success');
        form.current.reset();
      }
    } catch (error) {
      setStatus('error');
      console.error('Error:', error);
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center bg-gray-100/10 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="absolute inset-0"></div>
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-500">
            Vamos Conversar
          </span>
        </h2>

        {status === 'success' && (
          <div className="mb-4 p-4 bg-green-500/20 text-green-200 rounded-md">
            Mensagem enviada com sucesso!
          </div>
        )}

        {status === 'error' && (
          <div className="mb-4 p-4 bg-red-500/20 text-red-200 rounded-md">
            Erro ao enviar mensagem. Tente novamente.
          </div>
        )}

        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-gray-300">
              Nome
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              className="mt-1 block w-full rounded-md bg-gray-800/50 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-900"
              required
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              className="mt-1 block w-full rounded-md bg-gray-800/50 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-900"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md bg-gray-800/50 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-900"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-md font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-400">Ou me encontre nas redes sociais:</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/messias-junior-29889a245/" target="_blank" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
            <a href="https://github.com/Geomis-Anonimo" target="_blank" className="text-gray-400 hover:text-white">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 