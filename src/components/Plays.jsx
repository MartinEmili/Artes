const Plays = () => {
  return (
    <div className='h-[600px] bg-yellow-100 mx-auto mb-52 pt-16 lg:mb-[10%] md:mb-[35%] px-6 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold hover:text-orange-500 duration-500 cursor-pointer'>
          Pinceladas de Emoción: Explorando el Mundo a Través de los Maestros
        </h3>
        <p className='pt-4'>
          En cada trazo, en cada amalgama de colores y formas, encontramos un refugio eterno de belleza. El arte, en su
          expresión más sublime, nos invita a un reino donde la imaginación se entrelaza con la realidad, creando
          paisajes visuales que despiertan emociones y susurran a la sensibilidad del alma. La belleza del arte no
          conoce límites; es un lenguaje universal que trasciende el tiempo, permitiéndonos perder la noción de la
          realidad mientras nos sumergimos en un océano de creatividad. Cada obra es un testamento a la capacidad humana
          de transformar la inspiración en una manifestación tangible de lo sublime. Así, celebramos la extraordinaria
          belleza que emana de la creatividad y nos conecta a través de la admiración y el asombro. un recordatorio de
          la belleza intrínseca que permea nuestro mundo.
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
          className='row-span-2 object-cover 2-full h-full duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl'
          src='https://i.blogs.es/63b4d7/la-creacion-de-adan/1366_2000.jpeg'
          alt=''
        />
        <img
          className='row-span-4 object-cover 2-full h-full duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl'
          src='https://i.blogs.es/d702f9/la-persistencia-de-la-memoria/1366_2000.jpeg'
          alt=''
        />
        <img
          className='row-span-2 object-cover 2-full h-full duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl'
          src='https://i.blogs.es/df1ca8/la-ultima-cena-leonardo-da-vinci-/1366_2000.jpeg'
          alt=''
        />
      </div>
    </div>
  );
};

export default Plays;
