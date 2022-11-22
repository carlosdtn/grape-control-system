import Card from '@/components/Card'
import Parcel from '@/components/Icons/Parcel'
import Grape from '@/components/Icons/Grape'
import Button from '../../ui/Button'
import SearchInput from 'ui/SearchInput'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const App = () => {
  // https://servicios.senasa.gob.pe/siimf/produccionuva.html
  const [parcel, setParcel] = useState([])

  const fetchParcels = () => {
    fetch('http://localhost:3005/api/v1/parcels')
      .then((res) => res.json())
      .then((data) => {
        setParcel(data)
        console.log(data)
      })
  }

  useEffect(fetchParcels, [])

  return (
    <div className="w-5/6 sm:w-5/6 lg:w-3/6 space-y-2">
      <nav className="bg-white h-auto p-2 rounded-md border border-slate-400 border-opacity-70">
        <SearchInput placeholder="Buscar por parcela..." />
      </nav>
      <main className="bg-white p-2 rounded-md border border-slate-400 border-opacity-70">
        <div className="flex justify-between items-center border-b border-slate-400 border-opacity-40 mb-4 pb-2">
          <h1 className="text-2xl font-semibold">Parcelas </h1>
          <div className="flex space-x-2 text-sm text-white font-medium">
            <Link href="app/new-parcel" passHref legacyBehavior>
              <Button>
                <Parcel className="h-5 md:hidden" />
                <span className="hidden md:inline">Nueva parcela</span>
              </Button>
            </Link>
            <Button className="bg-blue-500 p-1 px-2 rounded-md hover:bg-blue-600">
              <Grape className="h-5 md:hidden" />
              <span className="hidden md:inline">Registrar producto</span>
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          {parcel &&
            parcel.map((parcel) => (
              <Card
                key={parcel._id}
                name={parcel.name}
                description={parcel.description}
                region={parcel.region}
                code={parcel.code}
                image={parcel.image}
              />
            ))}
        </div>
      </main>
    </div>
  )
}

export default App
