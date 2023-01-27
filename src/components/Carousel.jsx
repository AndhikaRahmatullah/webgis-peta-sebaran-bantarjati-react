import React from "react";

const Carousel = () => {
	return (
		<div
			id="carouselDarkVariant"
			className="slide carousel-dark carousel carousel-fade relative"
			data-bs-ride="carousel">
			{/* <!-- Indicators --> */}
			<div className="carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0">
				<button
					data-bs-target="#carouselDarkVariant"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"></button>
				<button
					data-bs-target="#carouselDarkVariant"
					data-bs-slide-to="1"
					aria-label="Slide 1"></button>
				<button
					data-bs-target="#carouselDarkVariant"
					data-bs-slide-to="2"
					aria-label="Slide 1"></button>
			</div>

			{/* <!-- Inner --> */}
			<div className="carousel-inner relative w-full overflow-hidden">
				{/* <!-- Single item --> */}
				<div className="carousel-item active relative float-left w-full">
					<img
						src={require("../assets/hotelpadjajaran.jpeg")}
						className="block h-[600px] w-full"
						alt="Hotel Padjajaran"
					/>
					<div className="carousel-caption absolute hidden text-center md:block">
						<h5 className="text-xl font-bold text-light">Penginapan</h5>
						<p className="font-bold text-light">Hotel Padjajaran, Bantarjati, Kecamatan Bogor Utara.</p>
					</div>
				</div>

				{/* <!-- Single item --> */}
				<div className="carousel-item relative float-left w-full">
					<img
						src={require("../assets/juraganpetshop.jpg")}
						className="block h-[600px] w-full"
						alt="Juragan Petshop"
					/>
					<div className="carousel-caption absolute hidden text-center md:block">
						<h5 className="text-xl font-bold text-light">Perlengkapan Hewan</h5>
						<p className="font-bold text-light">Juragan Petshop, Bantarjati, Kecamatan Bogor Utara.</p>
					</div>
				</div>

				{/* <!-- Single item --> */}
				<div className="carousel-item relative float-left w-full">
					<img
						src={require("../assets/rsmulia.jpeg")}
						className="block h-[600px] w-full"
						alt="RS PMI"
					/>
					<div className="carousel-caption absolute hidden text-center md:block">
						<h5 className="text-xl font-bold text-light">Kesehatan</h5>
						<p className=" font-bold text-light">Rumah Sakit Mulia, Bantarjati, Kecamatan Bogor Utara.</p>
					</div>
				</div>
			</div>
			{/* <!-- Inner --> */}

			{/* <!-- Controls --> */}
			<button
				className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
				type="button"
				data-bs-target="#carouselDarkVariant"
				data-bs-slide="prev">
				<span
					className="carousel-control-prev-icon inline-block bg-no-repeat"
					aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
				type="button"
				data-bs-target="#carouselDarkVariant"
				data-bs-slide="next">
				<span
					className="carousel-control-next-icon inline-block bg-no-repeat"
					aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default Carousel;
