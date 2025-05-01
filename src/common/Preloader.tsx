import { useState, useEffect } from "react";

export default function Preloader() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		// Set a timer to hide the preloader after 10 seconds
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 3000);

		// Clean up the timer when the component is unmounted
		return () => clearTimeout(timer);
	}, []);

	if (!isVisible) return null;

	return (
		<>

			{isVisible &&
				<div id="preloader" className="preloader">
					<div className="animation-preloader">
						<div className="edu-preloader-icon">
							<img src="assets/img/preloader.gif" alt="" />
						</div>
						<div className="txt-loading">
							<span data-text-preloader="E" className="letters-loading">
								E
							</span>
							<span data-text-preloader="D" className="letters-loading">
								D
							</span>
							<span data-text-preloader="U" className="letters-loading">
								U
							</span>
							<span data-text-preloader="M" className="letters-loading">
								M
							</span>
							<span data-text-preloader="E" className="letters-loading">
								E
							</span>
							<span data-text-preloader="L" className="letters-loading">
								L
							</span>
						</div>
						<p className="text-center">CARGANDO</p>
					</div>
					<div className="loader">
						<div className="row">
							<div className="col-3 loader-section section-left">
								<div className="bg"></div>
							</div>
							<div className="col-3 loader-section section-left">
								<div className="bg"></div>
							</div>
							<div className="col-3 loader-section section-right">
								<div className="bg"></div>
							</div>
							<div className="col-3 loader-section section-right">
								<div className="bg"></div>
							</div>
						</div>
					</div>
				</div>

			}
		</>
	);
}
