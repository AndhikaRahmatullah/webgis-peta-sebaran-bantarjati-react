import { useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
	useEffect(() => {
		document.title = "Tentang Kami | Peta Sebaran Bantarjati";
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0, x: 500 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 500 }}>
			<div className="py-20">
				{/* tentang aplikasi */}
				<div className="container mb-40">
					<p className="mb-3 text-4xl font-bold uppercase">Tentang Aplikasi</p>
					<p className="text-justify text-lg leading-relaxed">Web Aplikasi Peta Sebaran Fasilitas di Kelurahan Bantarjati adalah sebuah aplikasi yang dapat digunakan untuk menampilkan sebaran atau lokasi fasilitas kesehatan, penginapan, pengisian bahan bakar, klinik hewan dan klinik kecantikan di kelurahan Bantarjati, Kecamatan Bogor Utara, Kota Bogor. Aplikasi ini akan menampilkan peta dengan tanda-tanda atau simbol yang mewakili lokasi fasilitas tersebut. Pengguna dapat mencari dan menemukan fasilitas yang diinginkan dengan mencari alamat atau menavigasi peta.</p>
				</div>

				<div className="">
					<p className="container mb-3 text-4xl font-bold uppercase">Pembuat Aplikasi</p>
					{/* andhika */}
					<div className="container mb-10 flex items-center justify-between">
						{/* description */}
						<div className="flex flex-col gap-4">
							<div className="">
								<p className="text-3xl font-bold">Andhika Rahmatullah</p>
								<p className="text-lg font-light leading-none">Mahasiswa Teknik Informatika</p>
							</div>
							<div className="">
								<a
									href="https://www.instagram.com/andhikarhmt_/"
									target="_blank">
									<img
										src={require("../assets/instagram.png")}
										alt="instagram"
										className="w-[40px]"
									/>
								</a>
							</div>
						</div>

						{/* hero */}
						<div className="relative">
							<svg
								viewBox="0 0 200 200"
								xmlns="http://www.w3.org/2000/svg"
								className="lg:h-[500px] lg:w-[500px]">
								<path
									fill="#525252"
									d="M45.5,-56.1C58.3,-53.3,67.7,-39.2,72.2,-23.8C76.6,-8.5,76.2,8.1,71.2,23C66.2,38,56.6,51.4,44,61.2C31.4,71,15.7,77.2,0.4,76.6C-14.8,76,-29.6,68.5,-43.8,59.2C-58,49.9,-71.5,38.8,-76.7,24.5C-81.8,10.3,-78.5,-7.1,-69.2,-18.4C-59.9,-29.7,-44.6,-35,-32,-37.9C-19.5,-40.9,-9.7,-41.5,3.3,-46.1C16.3,-50.6,32.6,-59,45.5,-56.1Z"
									transform="translate(100 100)"
								/>
							</svg>
							<img
								src={require("../assets/dika.png")}
								alt="dika"
								className="absolute top-5 left-10 rounded-2xl"
							/>
						</div>
					</div>

					{/* hilal */}
					<div className="mb-10 bg-dark/10">
						<div className="container flex items-center justify-between">
							{/* hero */}
							<div className="relative">
								<svg
									viewBox="0 0 200 200"
									xmlns="http://www.w3.org/2000/svg"
									className="lg:h-[500px] lg:w-[500px]">
									<path
										fill="#525252"
										d="M45.5,-56.1C58.3,-53.3,67.7,-39.2,72.2,-23.8C76.6,-8.5,76.2,8.1,71.2,23C66.2,38,56.6,51.4,44,61.2C31.4,71,15.7,77.2,0.4,76.6C-14.8,76,-29.6,68.5,-43.8,59.2C-58,49.9,-71.5,38.8,-76.7,24.5C-81.8,10.3,-78.5,-7.1,-69.2,-18.4C-59.9,-29.7,-44.6,-35,-32,-37.9C-19.5,-40.9,-9.7,-41.5,3.3,-46.1C16.3,-50.6,32.6,-59,45.5,-56.1Z"
										transform="translate(100 100)"
									/>
								</svg>
								<img
									src={require("../assets/hilal.png")}
									alt="dika"
									className="absolute -top-12 left-10 rounded-2xl"
								/>
							</div>

							{/* description */}
							<div className="flex flex-col gap-4">
								<div className="">
									<p className="text-3xl font-bold">Hilal Oscha Mazzid Akbar</p>
									<p className="text-lg font-light leading-none">Mahasiswa Teknik Informatika</p>
								</div>
								<div className="">
									<a
										href="https://www.instagram.com/hilaloscha_ma/"
										target="_blank">
										<img
											src={require("../assets/instagram.png")}
											alt="instagram"
											className="w-[40px]"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* asep */}
					<div className="container flex items-center justify-between">
						{/* description */}
						<div className="flex flex-col gap-4">
							<div className="">
								<p className="text-3xl font-bold">Asep Rizki Haerudin</p>
								<p className="text-lg font-light leading-none">Mahasiswa Teknik Informatika</p>
							</div>
							<div className="">
								<a
									href="https://www.instagram.com/sanca07_/"
									target="_blank">
									<img
										src={require("../assets/instagram.png")}
										alt="instagram"
										className="w-[40px]"
									/>
								</a>
							</div>
						</div>

						{/* hero */}
						<div className="relative">
							<svg
								viewBox="0 0 200 200"
								xmlns="http://www.w3.org/2000/svg"
								className="lg:h-[500px] lg:w-[500px]">
								<path
									fill="#525252"
									d="M45.5,-56.1C58.3,-53.3,67.7,-39.2,72.2,-23.8C76.6,-8.5,76.2,8.1,71.2,23C66.2,38,56.6,51.4,44,61.2C31.4,71,15.7,77.2,0.4,76.6C-14.8,76,-29.6,68.5,-43.8,59.2C-58,49.9,-71.5,38.8,-76.7,24.5C-81.8,10.3,-78.5,-7.1,-69.2,-18.4C-59.9,-29.7,-44.6,-35,-32,-37.9C-19.5,-40.9,-9.7,-41.5,3.3,-46.1C16.3,-50.6,32.6,-59,45.5,-56.1Z"
									transform="translate(100 100)"
								/>
							</svg>
							<img
								src={require("../assets/asep.PNG")}
								alt="dika"
								className="absolute -top-40 left-10 rounded-2xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
