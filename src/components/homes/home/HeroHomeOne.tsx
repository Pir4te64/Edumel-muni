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
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, 3500); // cámbialo a 3000 para 3s, 4000 para 4s...
        return () => clearInterval(interval);
    }, [images.length]);
    return (
        <>
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
                                    className="hero-tags d-flex justify-content-center align-items-center wow fadeInUp"
                                    data-wow-delay=".6s"
                                >
                                    <span className="mx-3">EVENTOS</span>
                                    <span className="mx-3">CONFERENCIAS</span>
                                    <span className="mx-3">ENTRETENIMIENTO</span>
                                </div>


                                <div className="hero-button wow fadeInUp" data-wow-delay=".7s">
                                    <Link to="/courses-details" className="theme-btn hover-white">Encuentra los mejores cursos</Link>
                                </div>
                            </div>
                        </div>
                        <div className="hero-image position-relative">
                            <img
                                src={images[currentIndex]}
                                alt="img"
                                className="img-custom-anim-left"
                                data-wow-duration="1.5s"
                                data-wow-delay="0.3s"
                            />
                            <div className="counter-box float-bob-x">
                                <h2><span className="odometer" data-count="2800">
                                    <Count number={2800} text='+' />
                                </span></h2>
                                <p>Cursos de Calidad</p>
                            </div>
                            <div className="circle-img float-bob-y">
                                <img src="assets/img/hero/circle.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroHomeOne;