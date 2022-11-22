import Image from 'next/image'
import Arrow from '../Icons/Arrow'

const Card = ({ name, description, region, code, image }) => {
  return (
    <div className="p-3 bg-gray-100 flex items-center sm:flex-row flex-col container rounded-md text-gray-600 body-font border border-slate-400 border-opacity-40 hover:bg-gray-200 cursor-pointer transition duration-300">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-5 inline-flex items-center justify-center flex-shrink-0">
        <Image
          src={image}
          width={500}
          height={500}
          fill="true"
          alt="Parcel logo"
          loading="lazy"
          className="object-cover object-center rounded-lg"
        />
        {/* <img src="https://www.dfking.com/camposol/logo.png" /> */}
      </div>
      <div className="flex-grow sm:text-left text-center mt-2 sm:mt-0">
        <h1 className="text-black text-xl title-font font-bold">{name}</h1>
        <p className="leading-relaxed text-sm">{description}</p>
        <div className="py-2 text-sm">
          <div className="inline-block mr-2">
            <div className="flex h-full items-center bg-slate-500 rounded-xl px-4">
              <p className="title-font font-medium text-white">{code}</p>
            </div>
          </div>
          <div className="inline-block mr-2">
            <div className="flex h-full items-center bg-green-500 rounded-xl px-4">
              <p className="title-font font-medium text-white">{region}</p>
            </div>
          </div>
        </div>
        <a className="text-indigo-500 font-medium inline-flex items-center group">
          Más información
          <Arrow className="w-4 h-4 ml-2 transition group-hover:translate-x-2 duration-200" />
        </a>
      </div>
    </div>
  )
}

// Default props for the component Card
Card.defaultProps = {
  name: 'Camposol S.A.',
  description:
    'Camposol S.A. es una empresa agrícola peruana fundada en 1997. Con sede principal en Trujillo.',
  region: 'Trujillo',
  code: 'TRU',
  image: 'https://fenixdelperu.com.pe/wp-content/uploads/2015/01/Camposol.jpg'
}

export default Card
