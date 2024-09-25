import { useState } from 'react';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google'; 

const playfairDisplay = Playfair_Display({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});


function About() {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  return (
    <div id="about" className="flex flex-col md:flex-row items-center md:items-start px-4 md:px-0 h-full border rounded-xl border-dark-brown p-10 m-4 md:m-10 bg-light-beige">
      {/* Imagem principal */}
      <div className="w-full md:w-1/2 md:ml-10 flex justify-end">
        <Image
          src="/images/img7.jpg"
          alt="Cristiane Fabres"  
          responsive     
          width={800}
          height={1000}
          quality={75}
          priority
          className="rounded-lg shadow-lg object-cover"
          style={{ objectFit: 'cover' }}
        />       
      </div>

      {/* Texto sobre Cristiane */}
      <div className='md:w-1/2 w-full flex flex-col items-center'>
      <div className={` flex flex-col items-center mt-8 md:mt-0 transition-max-height duration-500 ease-in-out ${isAboutExpanded ? 'max-h-full' : 'max-h-80 overflow-hidden'}`}>
      {/* Título */}
      <h1 id='cris' className={`mb-10 text-center text-2xl lg:text-4xl font-bold text-dark-brown ${playfairDisplay.className}`}>
        Quem é Cristiane Fabres?
      </h1>
        <div className="bg-dark-beige text-dark-brown w-full md:w-3/4 p-6 rounded-lg shadow-lg mb-4">
          <p className="text-lg">
            Olá! Eu sou Cris Fabres, uma apaixonada por tecnologia, marketing digital e o poder de transformar vidas através do conhecimento. Sou psicóloga de formação, mas foi no universo digital que encontrei minha verdadeira missão: ajudar pessoas a descobrir e alcançar todo o seu potencial no mundo online.
            <br /><br />
            Desde 2014, venho construindo minha jornada como criadora de conteúdo, unindo minhas duas grandes paixões: o comportamento humano e a tecnologia. Ao longo dos anos, tive o privilégio de trabalhar com grandes marcas e de impactar milhares de pessoas com dicas, inspirações e estratégias que realmente fazem a diferença.
            <br /><br />
            Hoje, além de ser co-criadora do Dólar Master Academy (DMA), um projeto que nasceu do desejo de compartilhar conhecimento prático e acessível, também sou a idealizadora do “Mulheres e Tecnologia”, uma iniciativa que empodera mulheres a explorar e dominar o mundo digital.
            <br /><br />
            Moro em Portugal há 5 anos, onde construí uma vida repleta de desafios e conquistas ao lado do Gab e dos nossos três adoráveis gatinhos, Amora, Cookie e Brownie. Aqui é onde me sinto em casa, e é daqui que eu compartilho com o mundo a minha paixão por ajudar pessoas a transformarem suas vidas.
            <br /><br />
            Acredito que cada uma de nós tem o poder de conquistar grandes coisas. Estou aqui para te guiar, apoiar e inspirar nessa jornada digital. Vamos prosperar juntas?
            <span className={`block mt-4 text-2xl font-semibold ${playfairDisplay.className}`}>Vamos prosperar juntas?</span>
          </p>
        </div>
      </div>

      {/* Botão "Ver mais/Ver menos" */}
      <button href="#cris"
        onClick={() => setIsAboutExpanded(!isAboutExpanded)}
        className="mt-6 text-dark-brown font-semibold hover:text-dark-rose transition-all duration-300"
      >
        {isAboutExpanded ? 'Ver menos' : 'Ver mais'}
      </button>
      </div>
    </div>
  );
}

export default About;