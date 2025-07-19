import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hero from '../imgs/hero.png';

AOS.init();

const HomePage = () => {
  return (
    <div className="bg-gray-700 min-h-screen text-white">
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to PovertyLine</h1>
        <p className="text-xl">Tracking and addressing poverty through data and community stories.</p>
        <img className="mx-auto mt-8 w-1/2" src={hero} alt="Poverty awareness illustration" />
      </section>

      <section className="bg-white text-gray-800 py-20 px-5">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Testimonials</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Ken Ochieng */}
          <div className="flex items-center gap-6">
            <img
              data-aos="zoom-out"
              data-aos-delay="300"
              className="rounded-full h-[170px]"
              src="src/imgs/1e4708bc-5cad-4fd8-ae5b-ff21471f93da_prev_ui.png"
              alt="Ken Ochieng"
            />
            <div>
              <p data-aos="fade-down" data-aos-delay="100" className="lg:text-2xl text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus corporis esse cumque molestiae.
              </p>
              <h3 className="text-green-400 pt-5 text-xl font-semibold">Ken Ochieng</h3>
            </div>
          </div>

          {/* Eliud Wauna */}
          <div className="flex items-center gap-6">
            <img
              data-aos="zoom-out"
              data-aos-delay="300"
              className="rounded-full h-[170px]"
              src="src/imgs/7d69f16b-b83e-4cb3-9a20-2e5b5de4c3a0_prev_ui.png"
              alt="Eliud Wauna"
            />
            <div>
              <p data-aos="fade-down" data-aos-delay="100" className="lg:text-2xl text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus corporis esse cumque molestiae.
              </p>
              <h3 className="text-green-400 pt-5 text-xl font-semibold">Eliud Wauna</h3>
            </div>
          </div>

          {/* Martin Otiende */}
          <div className="flex items-center gap-6">
            <img
              data-aos="zoom-out"
              data-aos-delay="300"
              className="rounded-full h-[170px]"
              src="src/imgs/a3cfe170-6c46-41eb-b6b4-e5e1c6d4b4e6_prev_ui.png"
              alt="Martin Otiende"
            />
            <div>
              <p data-aos="fade-down" data-aos-delay="100" className="lg:text-2xl text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus corporis esse cumque molestiae.
              </p>
              <h3 className="text-green-400 pt-5 text-xl font-semibold">Martin Otiende</h3>
            </div>
          </div>

          {/* Geofrey Kimani */}
          <div className="flex items-center gap-6">
            <img
              data-aos="zoom-out"
              data-aos-delay="300"
              className="rounded-full h-[170px]"
              src="src/imgs/e79c2ba3-bd80-4a33-b08d-bd5c69ae1d27_prev_ui.png"
              alt="Geofrey Kimani"
            />
            <div>
              <p data-aos="fade-down" data-aos-delay="100" className="lg:text-2xl text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus corporis esse cumque molestiae.
              </p>
              <h3 className="text-green-400 pt-5 text-xl font-semibold">Geofrey Kimani</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
