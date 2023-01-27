import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
	// path
	const { pathname } = useLocation();
	const splitLocation = pathname.split("/")[1];

	return (
		<div>
			<nav className="navbar navbar-light navbar-expand-lg relative flex w-full flex-wrap items-center justify-between bg-neutral-200 py-4">
				<div className="container-fluid flex w-full flex-wrap items-center justify-between px-6">
					<div
						className="navbar-collapse collapse flex-grow items-center"
						id="navbarSupportedContent">
						{/* Title */}
						<Link
							to="/"
							className="text-xl font-bold uppercase tracking-wide text-dark">
							Peta Sebaran Bantarjati
						</Link>

						{/* <!-- Right links --> */}
						<ul className="list-style-none navbar-nav ml-auto flex flex-col pl-0">
							<li className="nav-item px-4">
								<Link
									to="/"
									className={splitLocation === "" ? "border-b-2 border-dark font-bold text-dark transition-all duration-300" : "border-b-2 border-transparent font-bold text-dark/30 transition-all duration-300"}>
									Beranda
								</Link>
							</li>
							<li className="nav-item pr-4">
								<Link
									to="/peta"
									className={splitLocation === "peta" ? "border-b-2 border-dark font-bold text-dark transition-all duration-300" : "border-b-2 border-transparent font-bold text-dark/30 transition-all duration-300"}>
									Peta
								</Link>
							</li>
							<li className="nav-item pr-4">
								<Link
									to="/tentang-kami"
									className={splitLocation === "tentang-kami" ? "border-b-2 border-dark font-bold text-dark transition-all duration-300" : "border-b-2 border-transparent font-bold text-dark/30 transition-all duration-300"}>
									Tentang Kami
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navigation;
