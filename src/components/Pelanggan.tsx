import React from 'react'

const Profile = () => {
    const clients = [
        'PT. KRAKATAU STEEL',
        'PT. CENTEX',
        'PT. SCTI',
        'PT. PINDODELI PULP & PAPER',
        'PT. PAPYRUS SAKTI',
        'PT. PURINUSA EKA PERSADA',
        'PT. KERTAS PADALARANG',
        'PT. LINGGA KANAKA JAYA',
        'PT. KIMU ENAM',
        'PT. SIPATEX',
        'PT. CIBALIGO INDAH',
        'PT. CITA BAHANA',
        'PT. DEWANTEX',
        'PT. MANDALA SUBUR',
        'PT. TARUMATEX',
        'PT. TRIBAKTI',
        'PT. MEKAR ANUGRAH PLASTIK',
        'PT. SUPER PLASTIK',
        'PT. DWIPAPURI',
        'PT. DEWHIRST',
    ]

    return (
        <div className=" p-6">
            <h1 className="text-4xl font-bold mb-4 text-center">Profile Pelanggan</h1>
            <ol className="list-decimal list-inside">
                {clients.map((client, index) => (
                    <li key={index}>{client}</li>
                ))}
            </ol>
        </div>
    )
}

export default Profile