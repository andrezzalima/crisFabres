"use client";

import './globals.css';
import Image from 'next/image';
import Carousel from './carrossel';
import About from './about';
import { Montserrat, Playfair_Display } from 'next/font/google';
import { useState, useEffect } from 'react';
import { FaInstagram, FaTiktok, FaYoutube, FaPinterest } from 'react-icons/fa';
import { IoMenuOutline } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";

const playfairDisplay = Playfair_Display({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

// Links de redes sociais
const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/cristianefabres/", icon: <FaInstagram className="text-3xl" /> },
  { name: "TikTok", url: "https://www.tiktok.com/@cristianefabres", icon: <FaTiktok className="text-3xl" /> },
  { name: "YouTube", url: "https://www.youtube.com/@cristianefabres", icon: <FaYoutube className="text-3xl" /> },
  { name: "Pinterest", url: "https://pin.it/6uwlliz0K", icon: <FaPinterest className="text-3xl" /> },
];

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedShein, setExpandedShein] = useState(false);
  const [expandedAmazon, setExpandedAmazon] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  // Função de envio de mensagem
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { name, email, message };

    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Erro ao enviar a mensagem');
      }
    } catch (error) {
      alert('Erro ao enviar a mensagem');
    }
  };

  // Controla a abertura do menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Fecha o menu em telas grandes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Links de produtos
  const sheinLinks = [
    'https://shein.top/7q8povw',
    'https://shein.top/6wh1h3o',
    'https://shein.top/52bgmlg',
    'https://shein.top/pa00aq8',
    'https://shein.top/iugrpey',
    'https://shein.top/q3roh2w',
    'https://shein.top/g38ium6',
  ];

  const amazonLinks = [
    'https://amzn.to/3XDVIm0',
    'https://amzn.to/3XEw8NG',
    'https://amzn.to/4ekE9Nc',
    'https://amzn.to/3MHFm5I',
    'https://amzn.to/3ASkaHh',
    'https://amzn.to/4ekEteS',
    'https://amzn.to/3ASkh5F',
    'https://amzn.to/3MHeUJc',
    'https://amzn.to/3XdXade',
    'https://amzn.to/3AWuheh',
    'https://amzn.to/4eeNs1c',
  ];

  return (
    <section className={` ${montserrat.className} min-h-screen`}>
      <header>
        <div className="fixed top-0 left-0 z-10 w-full bg-medium-brown min-h-14 flex items-center justify-center text-light-beige">
          <div className="flex flex-col sm:flex-row sm:px-10 px-5">
            <nav className="flex sm:justify-center sm:items-center gap-4 md:gap-20 text-sm uppercase z-20">
              {["Sobre mim", "Cursos", "Produtos", "Contato"].map((item, index) => {
                const ids = ["about", "courses", "products", "contact"];
                return (
                  <a
                    key={index}
                    href={`#${ids[index]}`}
                    className="hover:text-dark-brown transition-all duration-300"
                  >
                    {item}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </header>


      {/* carrossel */}
      <Carousel />

      {/* div social media */}
      <div id="about" className="flex justify-evenly mb-4 space-x-6 p-10 text-medium-brown">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-dark-rose transition-all duration-300 ">
            {link.icon}
          </a>
        ))}
      </div>

      {/* sobre mim */}
      <About />

      {/* div e-books e curso */}
      <h2 id="courses" className={`text-2xl md:text-4xl mt-16 font-bold ${playfairDisplay.className} text-center`}>
           Cursos:
          </h2>
      <div  className=" px-10  flex flex-col md:flex-row gap-4 bg-white py-10">
        {/* Div 1 - Curso */}
        <div  className="flex flex-col items-center justify-end h-full w-full md:w-1/2" >
          <a id='ebook'
            href="https://go.hotmart.com/O94850532U" target='_blank'          
            className="transform transition-transform duration-300 hover:scale-105 mt-4"
          >
            <img
              src="/images/DMA-curso.png"
              alt="DMA-Curso"
              className="w-full max-w-md h-auto shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 "
              style={{ objectFit: 'cover' }}
            />
          </a>
        </div>                 

        {/* Div 2 - Ebook */}
        <div  className="flex flex-col items-center justify-start h-full w-full md:w-1/2" >
          <a id='ebook'
            href="DMA-mulherestecnologia.pdf"
            download            
            className="transform transition-transform duration-300 hover:scale-105 mt-4"
          >
            <img
              src="/images/DMACris.png"
              alt="DMA-Cris"
              className="w-full max-w-md h-auto shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 "
              style={{ objectFit: 'cover' }}
            />
          </a>
        </div>
      </div>

      {/* Produtos */}
      <div id='products' className="container mb-14">
        {/* Introdução aos Produtos */}
        <div className="text-center p-10 w-screen bg-medium-brown text-light-beige">
          <h2 className={`text-2xl md:text-4xl font-bold ${playfairDisplay.className} text-center`}>
            Produtos que eu indico:
          </h2>         
        </div>
        <p className="text-base md:text-lg p-10 text-center ">
            Todos os produtos abaixo foram cuidadosamente escolhidos por mim e são opções que acredito que irão melhorar sua experiência no dia a dia. Ao clicar em qualquer um dos links, você será redirecionado para uma página externa. Aproveite as recomendações e boas compras!
          </p>
        {/* Seção de Produtos - Shein */}
        <div className="text-dark-brown mb-14">
          <h3 className={`text-3xl font-semibold mb-8 text-center`}>
            Shein:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
            {sheinLinks.slice(0, expandedShein ? sheinLinks.length : 4).map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block transform transition-transform hover:scale-105 hover:shadow-lg bg-white p-4 rounded-lg shadow-md"
              >
                <Image
                  src={`/images/shein${index + 1}.jpg`}
                  alt={`Produto Shein ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-auto rounded-lg"
                />
              </a>
            ))}
          </div>
          {sheinLinks.length > 4 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setExpandedShein(!expandedShein)}
                className="text-dark-rose font-medium py-2 px-4 border border-dark-rose rounded-lg hover:bg-medium-brown hover:text-white transition-colors"
              >
                {expandedShein ? 'Mostrar menos' : 'Mostrar mais'}
              </button>
            </div>
          )}
        </div>

        {/* Seção de Produtos - Amazon */}
        <div className="text-dark-brown">
          <h3 className={`text-3xl font-semibold mb-8 text-center`}>
            Amazon:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
            {amazonLinks.slice(0, expandedAmazon ? amazonLinks.length : 4).map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block transform transition-transform hover:scale-105 hover:shadow-lg bg-white p-4 rounded-lg shadow-md"
              >
                <Image
                  src={`/images/amazon${index + 1}.jpg`}
                  alt={`Produto Amazon ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-auto rounded-lg"
                />
              </a>
            ))}
          </div>
          {amazonLinks.length > 4 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setExpandedAmazon(!expandedAmazon)}
                className="text-dark-rose font-medium py-2 px-4 border border-dark-rose rounded-lg hover:bg-medium-brown hover:text-white transition-colors"
              >
                {expandedAmazon ? 'Mostrar menos' : 'Mostrar mais'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Contato */}
      <div id="contact" className="container p-4 bg-medium-brown text-light-beige px-10 py-16">
        <h2 className={`text-3xl font-bold mb-6 ${playfairDisplay.className} text-center`}>Contato:</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col justify-center "> {/* Adicionado padding */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg">Nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg">Mensagem:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-light-beige text-dark-brown font-bold py-2 px-4 rounded transition-colors hover:text-light-beige hover:bg-dark-brown"
          >
            Enviar
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-dark-brown text-light-beige py-6 text-center">
        <div className="container">

          <p>
            <FaRegCopyright className="inline mr-2" />
            {new Date().getFullYear()}. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </section>
  );
}
