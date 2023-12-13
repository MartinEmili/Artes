const Home = () => {
  return (
    <div className='w-full h-screen'>
      {" "}
      {/*Pantalla Completa*/}
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://i.blogs.es/cb646d/sandro-botticelli/1366_2000.jpeg'
        alt=''
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
          <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl hover:text-orange-500 duration-300 cursor-pointer'>
              Explora el Arte en Movimiento con Creatividad y Tecnología.
            </h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
              Bienvenidos a nuestra Galería de Arte Interactiva, donde cada obra es una historia que cobra vida con
              React, Tailwind y Vite. Explora el arte de una manera totalmente nueva, donde la creatividad se fusiona
              con la tecnología. ¡Bienvenido a una experiencia donde cada clic despierta la inspiración! 🎨✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
