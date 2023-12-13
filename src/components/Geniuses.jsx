

const Geniuses = () => {
  return (
    <div className="max-w-[1500px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
        {/*Imagenes de la parte Isquierda*/}
        <div className="grid grid-cols-2 grid-rows-6 h-[94vh] bg-yellow-100 p-1">
            <img className="row-span-2 object-cover w-full h-full p-2 transition-transform duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl" src="https://www.worldhistory.org/img/r/p/500x600/15458.png?v=1685640243" alt="" />
            <img className="row-span-3 object-cover w-full h-full p-2 transition-transform duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl" src="https://static.nationalgeographic.es/files/styles/image_3200/public/01-leonardo-da-vinci-book-talk.jpg?w=1600" alt="" />
            <img className="row-span-2 object-cover w-full h-full p-2 transition-transform duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl" src="https://www.cultura.gob.ar/media/uploads/dali1.jpg" alt="" />
            <img className="row-span-3 object-cover w-full h-full p-2 transition-transform duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl" src="https://www.worldhistory.org/img/r/p/500x600/12583.jpg?v=1670105102" alt="" />
            <img className="row-span-2 object-cover w-full h-full p-2 transition-transform duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl" src="https://www.biografiasyvidas.com/monografia/picasso/fotos/picasso_420.jpg" alt="" />
        </div>
        {/*Texto de la parte Derecha*/}
        <div className="flex flex-col h-full justify-center">
            <h3 className="text-5xl md:text-6xl font-bold hover:text-orange-500 duration-500 cursor-pointer">Genios Inmortales del Arte: Un Recorrido por las Mentas Creativas</h3>
            <p className="text-2xl py-6">Embárcate en un viaje por las mentes creativas de genios inmortales del arte. Desde la explosión emocional de Vincent van Gogh hasta el enigma científico y artístico de Leonardo da Vinci, el surrealismo extravagante de Salvador Dalí, la revolución cubista de Pablo Picasso, las esculturas eternas de Miguel Ángel hasta la poesía visual de Sandro Botticelli en el Renacimiento italiano. Cada uno de estos artistas ha dejado una marca indeleble en la historia del arte, capturando la esencia de su tiempo y desafiando las convenciones con una creatividad que trasciende las épocas.</p>
        </div>
    </div>
  )
}

export default Geniuses
