
const Painters = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center'>
      <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-6 gap-4'>
        <p className='text-lg font-bold text-white mb-4 bg-yellow-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'>
          Vincent van Gogh
        </p>
        <p className='text-lg font-bold text-white mb-4 bg-yellow-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'>
          Leonardo da Vinci
        </p>
        <p className='text-lg font-bold text-white mb-4 bg-yellow-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'>
          Salvador Dalí
        </p>
        <p className='text-lg font-bold text-white mb-4 bg-yellow-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'>
          Pablo Picasso
        </p>
        <p className='text-lg font-bold text-white mb-4 bg-yellow-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'>
          Miguel Ángel
        </p>
        <p className='text-lg font-bold text-white mb-4 bg-yellow-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'>
          Sandro Botticelli
        </p>
      </div>
    </div>
  );
};

export default Painters;
