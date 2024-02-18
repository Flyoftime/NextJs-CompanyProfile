import React from 'react';
import { Pagination } from 'react-bootstrap';

const Gallery = () => {
    const imagesPerPage = 6;
    const totalImages = 10; 
    const totalPages = Math.ceil(totalImages / imagesPerPage);
    const [currentPage, setCurrentPage] = React.useState(1);

    const images = [
        { src: './assets/bg.jpg', alt: 'Gallery Image 1' },
        { src: './assets/bg.jpg', alt: 'Gallery Image 1' },
        { src: './assets/bg.jpg', alt: 'Gallery Image 1' },
        { src: './assets/bg.jpg', alt: 'Gallery Image 1' },
        { src: './assets/bg.jpg', alt: 'Gallery Image 1' },
        { src: './assets/bg.jpg', alt: 'Gallery Image 1' },
        { src: './assets/bg.jpg', alt: 'Gallery Image 1' },
        { src: './assets/bg.jpg', alt: 'Gallery Image 1' },
        { src: './assets/bg.jpg', alt: 'Gallery Image 1' },
        { src: './assets/bg.jpg', alt: 'Gallery Image 1' },
        { src: './assets/bg.jpg', alt: 'Gallery Image 1' },
        { src: './assets/bg.jpg', alt: 'Gallery Image 1' },
        { src: './assets/bg.jpg', alt: 'Gallery Image 1' },
        { src: './assets/bg.jpg', alt: 'Gallery Image 1' },
        { src: './assets/bg.jpg', alt: 'Gallery Image 1' },
    ];

    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = images.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold mb-4 text-center">Galeri</h1>
            <div className="grid grid-cols-3 gap-4">
                {currentImages.map((image, index) => (
                    <div key={index} className="bg-base-300 p-2 rounded-md">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover object-center rounded-md"
                        />
                    </div>
                ))}
            </div>
            <div className="join flex justify-center p-5">
                <button onClick={() => handlePageChange(1)} className="join-item btn">«</button>
                <button className="join-item btn">{currentPage}</button>
                <button onClick={() => handlePageChange(totalPages)} className="join-item btn">»</button>
            </div>
        </div>
    );
};

export default Gallery;