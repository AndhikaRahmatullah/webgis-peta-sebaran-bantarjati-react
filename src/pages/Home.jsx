import { useEffect } from "react";
import Carousel from "../components/Carousel";
import "../styles/home.css";
import { motion } from "framer-motion";

const Home = () => {
	useEffect(() => {
		document.title = "Peta Sebaran Bantarjati";
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0, x: 500 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 500 }}>
			<Carousel />

			<div className="container flex flex-col gap-10 py-20">
				<div className="">
					<p className="mb-3 text-4xl font-bold uppercase">Kelurahan Bantarjati</p>
					<p className="text-justify text-lg leading-relaxed">Kelurahan Bantarjati merupakan wilayah yang terletak di Kecamatan Bogor Utara, Kota Bogor, Jawa Barat. Kelurahan Bantarjati ini memiliki jumlah penduduk (Per-RT/RW) jumlah RT 72 dan jumlah RW 16, dengan jumlah penduduk di Kelurahan Bantarjati sebanyak 6.209 jiwa. Kelurahan Bantarjati memiliki berbagai fasilitas umum seperti Penginapan, Kesehatan, Pasar, dan lainnya.</p>
				</div>

				<div className="">
					<p className="mb-3 text-4xl font-bold uppercase">Fasilitas</p>
					<div className="">
						<p className="text-justify text-lg leading-relaxed">Kecamatan Bantarjati juga memiliki beberapa fasilitas umum yang dapat digunakan oleh warga maupun pengunjung. Beberapa fasilitas yang dapat ditemukan di Kecamatan Bantarjati antara lain:</p>
						<ul className="mt-2 text-justify text-lg leading-relaxed">
							<li>
								<span className="font-bold">Penginapan :</span> Kecamatan Bantarjati memiliki beberapa tipe penginapan, seperti Hotel, Guesthouse, Rumah Kos dan lainnya yang tersebar di berberapa bagian wilayahnya.
							</li>
							<li>
								<span className="font-bold">Kesehatan :</span> Kecamatan Bantarjati memiliki beberapa rumah sakit yang dapat digunakan oleh warga maupun pengunjung yang membutuhkan perawatan medis.
							</li>
							<li>
								<span className="font-bold">Pasar :</span> Kecamatan Bantarjati memiliki beberapa pasar tradisional yang dapat digunakan oleh warga maupun pengunjung untuk membeli bahan makanan dan barang lainnya.
							</li>
							<li>
								<span className="font-bold">Lainnya :</span> Selain itu, Kecamatan Bantarjati juga memiliki beberapa fasilitas umum lainnya seperti Klinik Hewan, Klinik Kecantikan, Kantor Pemerintah, dan fasilitas umum lainnya yang dapat digunakan oleh warga maupun pengunjung yang berada di wilayah ini.
							</li>
						</ul>
					</div>
				</div>

				<div className="">
					<p className="mb-3 text-4xl font-bold uppercase">Visi Misi Pelayanan</p>
					<div className="">
						<p className="text-justify text-lg leading-relaxed">Kecamatan Bantarjati memiliki visi, misi dan moto diantaranya:</p>
						<ul className="mt-2 text-justify text-lg leading-relaxed">
							<li>
								<span className="font-bold">Visi :</span> Mewujudkan pelayanan yang cerdas, cepat, tepat dan ramah.
							</li>
							<li>
								<span className="font-bold">Misi :</span>
								<span className="block">1.Peningkatan pengelolaan pelayanan informasi yang berkualitas.</span>
								<span className="block">2. Peningkaatn pengelolaan sistem pelayanan informasi website / whatsapp</span> <span className="block">Peningkatan sumber daya manusia</span>
							</li>
							<li>
								<span className="font-bold">Moto :</span> Cepat, tepat, akurat dan amanah.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Home;
