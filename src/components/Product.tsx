import React from 'react'

const Products = () => {
    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold mb-4 text-center">Products</h1>
            <p className="mb-8 text-center">
                Rol Karet PT. INDORUB digunakan untuk keperluan berbagai industri, dan
                menerima pemesanan produk Rol Karet berdasarkan order sesuai dengan
                permintaan pelanggan.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-base-300 p-4 rounded-md">
                    <h2 className="text-xl font-bold mb-2">NR</h2>
                    <p>Natural Rubber</p>
                </div>
                <div className="bg-base-300 p-4 rounded-md">
                    <h2 className="text-xl font-bold mb-2">SBR</h2>
                    <p>Styrene Butadiene Rubber</p>
                </div>
                <div className="bg-base-300 p-4 rounded-md">
                    <h2 className="text-xl font-bold mb-2">NBR</h2>
                    <p>Nitrile Butadiene Rubber</p>
                </div>
                <div className="bg-base-300 p-4 rounded-md">
                    <h2 className="text-xl font-bold mb-2">EPDM</h2>
                    <p>Ethylene Propylene Diene Monomer</p>
                </div>
                <div className="bg-base-300 p-4 rounded-md">
                    <h2 className="text-xl font-bold mb-2">Hypalon</h2>
                    <p>Chlorosulfonated Polyethylene</p>
                </div>
                <div className="bg-base-300 p-4 rounded-md">
                    <h2 className="text-xl font-bold mb-2">Teflon</h2>
                    <p>Polytetrafluoroethylene</p>
                </div>
                <div className="bg-base-300 p-4 rounded-md">
                    <h2 className="text-xl font-bold mb-2">Silicon</h2>
                    <p>Silicone Rubber</p>
                </div>
                <div className="bg-base-300 p-4 rounded-md">
                    <h2 className="text-xl font-bold mb-2">Ebont</h2>
                    <p>Acetylene Black</p>
                </div>
                <div className="bg-base-300 p-4 rounded-md">
                    <h2 className="text-xl font-bold mb-2">Polyurethane</h2>
                    <p>Polyurethane Rubber</p>
                </div>
                <div className="bg-base-300 p-4 rounded-md">
                    <h2 className="text-xl font-bold mb-2">dll</h2>
                    <p>dan lain-lain</p>
                </div>
            </div>
            <p className="mt-8 text-center">
                Dengan harga yang kompetitif, kami berikan nilai manfaat yang lebih.
            </p>
        </div>
    )
}

export default Products