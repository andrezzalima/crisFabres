"use client";

import './globals.css';
import Carousel from './carrossel';
import { Montserrat, Playfair_Display } from 'next/font/google';

import { useState, useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';
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

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

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

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <section className={`bg-light-beige ${montserrat.className}`}>
      <header>
        {/* Botão do menu hambúrguer */}
        <div className="fixed top-5 left-5 md:left-auto z-10 w-2/3">
          <div className="flex flex-col justify-center md:flex-row md:px-10 px-5">
            <button
              className="md:hidden block z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <IoMenuOutline
                className={`text-3xl md:text-6xl ${isMenuOpen ? "text-light-beige" : "text-dark-beige"}`}
              />
            </button>

            {/* Menu */}
            <div
              className={`${isMenuOpen && window.innerWidth < 768
                ? "flex w-full h-screen fixed top-0 left-0 gap-5 bg-dark-beige flex-col justify-center items-center z-20"
                : "hidden md:flex flex-col md:flex-row md:justify-between md:items-center gap-20 text-sm uppercase z-20"
                }`}
            >
              {["Sobre mim", "Projetos", "Cursos", "Contato"].map((item, index) => (
                <a
                  key={index}
                  href=""
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="hover:text-dark-rose transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Carrossel - Banners */}
      <div className="mb-14">
        <Carousel />
      </div>

      {/* Seção "Quem é Cristiane Fabres?" */}
      <div id="about" className="flex flex-col items-end mb-14">
        <img src="/images/img7.jpg" alt="Cristiane Fabres" className="absolute z-0" />
        <img src="/images/logo2.png" alt="Cristiane Fabres" className="absolute top-0 left-20 w-3/5 z-10 mt-7" />
        <h1 className={`z-20 ${playfairDisplay.className} text-3xl font-semibold text-center pr-3 mb-5 pt-2`}>
          Quem é Cristiane Fabres?
        </h1>
        <div className={`z-20 flex flex-col items-end  mt-44 ${expanded ? 'max-h-full' : 'max-h-80 overflow-hidden'}`}>
          <p className='w-full md:w-1/2 bg-rose text-dark-brown p-5 rounded-t-lg'>
            Sou Cris Fabres, uma apaixonada por tecnologia, marketing digital e o poder de transformar vidas através do conhecimento.
          </p>
          <p className=' bg-rose text-dark-brown p-5 rounded-b-lg '>
            Sou psicóloga de formação, mas foi no universo digital que encontrei minha verdadeira missão: ajudar pessoas a descobrir e alcançar todo o seu potencial no mundo online.

            Desde 2014, venho construindo minha jornada como criadora de conteúdo, unindo minhas duas grandes paixões: o comportamento humano e a tecnologia. Ao longo dos anos, tive o privilégio de trabalhar com grandes marcas e de impactar milhares de pessoas com dicas, inspirações e estratégias que realmente fazem a diferença.<br></br>

            Hoje, além de ser co-criadora do Dólar Master Academy (DMA), um projeto que nasceu do desejo de compartilhar conhecimento prático e acessível, também sou a idealizadora do “Mulheres e Tecnologia”, uma iniciativa que empodera mulheres a explorar e dominar o mundo digital. <br></br>

            Moro em Portugal há 5 anos, onde construí uma vida repleta de desafios e conquistas ao lado do Gab e dos nossos três adoráveis gatinhos, Amora, Cookie e Brownie. Aqui é onde me sinto em casa, e é daqui que eu compartilho com o mundo a minha paixão por ajudar pessoas a transformarem suas vidas. <br></br>

            Acredito que cada uma de nós tem o poder de conquistar grandes coisas. Estou aqui para te guiar, apoiar e inspirar nessa jornada digital.

            <p className={`${playfairDisplay.className}`}>Vamos prosperar juntas?</p>
          </p>
        </div>
        <button onClick={toggleExpand} className="mt-4 mx-auto block px-4 py-2 text-white rounded-lg hover:bg-dark-beige transition-colors">
          {expanded ? 'Ver menos' : 'Ver mais'}
        </button>

      </div>

      {/* Seção de cursos */}
      <div className="mb-14">
        <h1 className={`${playfairDisplay.className} text-center text-4xl text-dark-brown mb-10`}>Cursos</h1>
        <div className="flex flex-wrap justify-around p-5">
          {[1, 2, 3].map((course) => (
            <div key={course} className="course-item w-full md:w-1/3 p-2 transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <a href={`link-para-curso-${course}`}>
                <img src={`/images/curso${course}.jpg`} alt={`Curso ${course}`} className="w-full h-auto rounded-lg" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de produtos */}
      <div className='bg-light-brown py-10'>
        <div id="product-section" className={`mb-14 overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-full' : 'max-h-32'}`}>
          <h1 className={`${playfairDisplay.className} text-center text-2xl font-semibold text-dark-brown mb-10`}>Produtos</h1>
          <div className="flex flex-wrap justify-around p-5">
            {[1, 2, 3, 4].map((product) => (
              <div key={product} className="product-item w-full md:w-1/4 p-2 transform transition duration-300 hover:scale-105 hover:shadow-lg">
                <img src={`/images/produto${product}.jpg`} alt={`Produto ${product}`} className="w-full h-auto rounded-lg" />
              </div>
            ))}
          </div>
        </div>
        <button onClick={toggleExpand} className="mt-4 mx-auto block px-4 py-2 text-white rounded-lg hover:bg-dark-beige transition-colors">
          {expanded ? 'Ver menos' : 'Ver mais'}
        </button>
      </div>


      {/* Redes sociais */}
      <div className="mb-14">
        <h1 className={`${playfairDisplay.className} text-center text-2xl font-semibold text-dark-brown mb-10`}>Redes Sociais</h1>
        <div className="flex flex-col items-center space-y-4">
          {["Marketing", "Blogger"].map((social, index) => (
            <div key={index} className="flex items-center space-x-2 text-dark-brown">
              <FaInstagram className="text-2xl" />
              <p>{social}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Formulário de contato */}
      <div id="contact" className="bg-light-beige py-12 px-6 md:px-12 lg:px-24 rounded-lg shadow-lg mt-12">
        <h2 className={`${playfairDisplay.className} text-2xl font-semibold text-dark-brown text-center mb-8`}>
          Entre em contato comigo!
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            className={`${montserrat.className} w-full px-4 py-3 rounded-md border border-medium-brown bg-white text-dark-brown placeholder-dark-beige focus:ring-2 focus:ring-dark-rose focus:outline-none`}
            type="text"
            placeholder="Insira seu nome"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={`${montserrat.className} w-full px-4 py-3 rounded-md border border-medium-brown bg-white text-dark-brown placeholder-dark-beige focus:ring-2 focus:ring-dark-rose focus:outline-none`}
            type="email"
            placeholder="Insira seu e-mail"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className={`${montserrat.className} w-full h-32 px-4 py-3 rounded-md border border-medium-brown bg-white text-dark-brown placeholder-dark-beige focus:ring-2 focus:ring-dark-rose focus:outline-none resize-none`}
            placeholder="Escreva uma mensagem"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input
            type="submit"
            value="Enviar"
            className={`${montserrat.className} w-full py-3 rounded-md bg-dark-rose text-white font-semibold cursor-pointer hover:bg-rose transition-colors`}
          />
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-dark-brown py-6 mt-12">
        <div className="container mx-auto text-center">

          <p className="text-light-beige text-sm flex items-center justify-center">
            Copyright 2024. <FaRegCopyright className="mx-1" /> Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </section>
  )
};
