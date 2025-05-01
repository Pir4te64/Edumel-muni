import { Link } from "react-router-dom";
import Count from "../../../common/Count";
import img1 from "/assets/img/hero/img1.png";
import img2 from "/assets/img/hero/img2.png";
import img3 from "/assets/img/hero/img3.png";
import img4 from "/assets/img/hero/img4.png";
import { useEffect, useState } from "react";

const HeroHomeOne = () => {
    const images = [img1, img2, img3, img4];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const fadeDuration = 1000;   // 1s fade
        const visibleDuration = 3000; // 3s visible

        const cycle = () => {
            const hideTimer = setTimeout(() => {
                setOpacity(0);
                const showTimer = setTimeout(() => {
                    setCurrentIndex(i => (i + 1) % images.length);
                    setOpacity(1);
                    cycle();
                }, fadeDuration);
                return () => clearTimeout(showTimer);
            }, visibleDuration);
            return () => clearTimeout(hideTimer);
        };

        const cleanup = cycle();
        return cleanup;
    }, []);

    return (
        <section className="hero-section hero-1 fix">
            <div className="shape-left">
                <img src="assets/img/hero/shape-left.png" alt="img" />
            </div>
            <div className="shape-right">
                <img src="assets/img/hero/shape-right.png" alt="img" />
            </div>
            <div className="dot-shape float-bob-x">
                <img src="assets/img/hero/dot.png" alt="img" />
            </div>
            <div className="vector-shape float-bob-y">
                <img src="assets/img/hero/vectoe.png" alt="img" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-content">
                            <span className="wow fadeInUp">BIENVENIDO A EDUMEL</span>
                            <h1 className="wow fadeInUp" data-wow-delay=".5s">
                                POSADAS<br /> LA SEDE DE TUS
                            </h1>
                            <div
                                className="hero-tags d-flex flex-column flex-md-row flex-wrap justify-content-center align-items-center wow fadeInUp"
                                data-wow-delay=".6s"
                            >
                                <span className="mx-2 my-1">EVENTOS</span>
                                <span className="mx-2 my-1">CONFERENCIAS</span>
                                <span className="mx-2 my-1">ENTRETENIMIENTO</span>
                            </div>
                            <div className="hero-button wow fadeInUp" data-wow-delay=".7s">
                                <Link to="/courses-details" className="theme-btn hover-white">
                                    Encuentra los mejores cursos
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* IMAGES: mobile slider & desktop fade */}
                    <div className="hero-image position-relative">
                        {/* Mobile: bootstrap carousel */}
                        <div className="d-block d-md-none">
                            <div
                                id="heroCarousel"
                                className="carousel slide"
                                data-bs-ride="carousel"
                                data-bs-interval="3500"
                            >
                                <div className="carousel-inner">
                                    {images.map((src, i) => (
                                        <div key={i} className={`carousel-item${i === 0 ? " active" : ""}`}>
                                            <img src={src} className="d-block w-100" alt={`slide-${i}`} />
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#heroCarousel"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#heroCarousel"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                </button>
                            </div>
                        </div>

                        {/* Desktop: single image with fade */}
                        <div className="d-none d-md-block">
                            <img
                                src={images[currentIndex]}
                                alt="img"
                                className="img-custom-anim-left"
                                data-wow-duration="1.5s"
                                data-wow-delay="0.3s"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    opacity: opacity,
                                    transition: "opacity 1s ease-in-out"
                                }}
                            />
                        </div>

                        <div className="counter-box float-bob-x">
                            <h2>
                                <span className="odometer" data-count="2800">
                                    <Count number={2800} text="+" />
                                </span>
                            </h2>
                            <p>Cursos de Calidad</p>
                        </div>
                        <div className="circle-img float-bob-y">
                            <img src="assets/img/hero/circle.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroHomeOne;
