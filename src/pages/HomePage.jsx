import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
// Remove duplicate Navbar import and initialization
AOS.init({ duration: 1000 });

const HomePage = () => {
  return (
    <>
      <div className='container p-[10px] m-auto'>
      <div className='grid grid-cols-2 gap-20 items-center'>

        {/* grid section col 1 */}

        <div className='font-bold lg:text-4xl font-sans'>
          <h1 data-aos="fade-down" data-aos-delay="200" className='lg:text-4xl text-cyan-950 pb-25'>Empowering Communities One data Point at a Time</h1>
          <p className='text-gray-900' data-aos="fade-down" data-aos-delay="400" >n an era where every number tells a story, our platform empowers governments, NGOs, and local leaders with the insights they need to make a real difference. By capturing individual income records, mapping social backgrounds, and classifying vulnerability levels, we turn raw data into targeted action plans. This holistic view uncovers hidden pockets of need, guides resource allocation, and measures the impact of every program. Together, we build a future where no one is left behind—because when we track the real numbers, we unlock real change.</p>
          
        </div>

        {/* grid section col 2 */}

        <div className='items-center m-auto'><img data-aos="fade-down" data-aos-delay="300" src="src/imgs/Ai Generative happy business man in a suit white…_prev_ui.png" className='h-[900px] w-[1500px] object-cover bg-transparent'/></div>
      </div>
      <div className='mt-32'>

           <div className='m-auto text-center pb-15'>
        <h1 data-aos="fade-up" data-aos-delay="100" className='lg:text-4xl text-amber-300 font-bold'>Transforming Lives Through Data</h1>
        </div>

        {/* card section */}

        <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
          
          <div data-aos="fade-down" data-aos-delay="200" className='w-full h-[500px] shadow-2xl rounded-4xl bg-cyan-950'><img className='rounded-full m-auto h-[190px] animate-pulse' src="src/imgs/012b64bb-6067-4f03-8fb1-f50fbadf15a3.jpeg" alt=""/><p className='text-center md:text-2xl py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In unde omnis neque assumenda eum mollitia fugit architecto minima eius, necessitatibus natus. Rem dolores quos aliquam quam. Quo natus dolorum alias!</p></div>
          <div data-aos="fade-down" data-aos-delay="200"  className='w-full h-[500px] shadow-2xl rounded-4xl bg-cyan-950 '><img className='rounded-full m-auto h-[190px] animate-pulse' src="src/imgs/212a2c6e-9f1a-463f-9f8a-8f602129948d.jpeg" alt="" /><p className='text-center md:text-2xl py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam non dicta fuga repellat sit ab! Aspernatur, perspiciatis vitae. Magnam laborum quibusdam velit eum cumque? Commodi consequatur cumque excepturi eligendi nemo?</p></div>
          <div data-aos="fade-down" data-aos-delay="200"  className='w-full h-[500px] shadow-2xl rounded-4xl bg-cyan-950'><img className='rounded-full m-auto items-center h-[190px] animate-pulse' src="src/imgs/Vetor Ícone de ponto de pino com símbolo….jpeg" alt="" /><p className='text-center md:text-2xl py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatum sit nam qui reprehenderit similique eveniet repellat numquam quod? Fuga vel voluptates quod nostrum autem, veritatis vero nam rerum reiciendis!</p></div>


        </div>

      </div>
      <div className='container m-auto my-20 '>
        {/* another section */}
        <div className='grid grid-cols-2 '>

          {/* section 1 */}
          <div><img data-aos="fade-down" data-aos-delay="200" className='object-cover w-[700px] bg-transparent' src="src/imgs/kmanatham about happy black woman jumping, 3d character, money, body png, and money 3d 12120514_prev_ui.png" alt="" /></div>
          {/* section 2 */}
          <div className='text-center m-auto'><h1 data-aos="fade-down" data-aos-delay="100" className='mb-25 text-4xl text-blue-400 font-bold'>Turning Data into Actionable Impact</h1>
          <p data-aos="fade-down" data-aos-delay="200" className='text-4xl text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse amet qui error laboriosam vitae facere maxime quia? Quae, dicta sit. Minus nisi cumque ad culpa perferendis dolores eius nesciunt rerum.</p></div>

        </div>
      </div>
      <div className='m-15'>
        {/* testimonials section */}
        <h1 className='text-center pb-30  text-4xl text-amber-400 font-bold'>What Clients Say About Us</h1>

        <div className='grid grid-cols-2 gap-10'>

          <div className='grid grid-cols-2 '><img data-aos="zoom-out" data-aos-delay="300"  className='rounded-full h-[170px] bg-transparent' src="src/imgs/1e4708bc-5cad-4fd8-ae5b-ff21471f93da_prev_ui.png" alt="" /><p data-aos="fade-down" data-aos-delay="100"  className='lg:text-3xl text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae in tenetur, magni consequatur cum corrupti dolores odit architecto nam accusamus facilis, nisi omnis voluptatum. Nihil doloremque nemo eius omnis labore. <h1 className='text-green-400 pt-5'>Ken Ochieng</h1></p></div>
          <div className='grid grid-cols-2'><img data-aos="zoom-out" data-aos-delay="300"  className='rounded-full h-[170px] bg-transparent' src="src/imgs/9d8fa3b3-ea36-4f04-a043-4b2b0ed29022_prev_ui.png" alt="" /><p data-aos="fade-down" data-aos-delay="200"  className='lg:text-3xl text-gray-900'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae deserunt sequi sunt sint. Vel id ratione dolore est necessitatibus, reiciendis ullam culpa quasi molestiae voluptatum, nesciunt quam officia error quaerat. <h1 className='text-green-400 pt-5'>Eliud Wauna</h1></p></div>
          <div className='grid grid-cols-2'><img data-aos="zoom-out" data-aos-delay="300"  className='rounded-full h-[170px] bg-transparent' src="src/imgs/d1be1549-6684-4e43-af6b-41bc21b9a006_prev_ui.png" alt="" /><p data-aos="fade-down" data-aos-delay="300"  className='lg:text-3xl text-gray-900'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nulla dignissimos dolorum vitae. Est incidunt soluta officia dolores enim repellat sunt, veritatis facere, quam, dolorem id voluptates veniam provident et <h1 className='text-green-400 pt-5'>Martin Otiende</h1></p></div>
          <div className='grid grid-cols-2'><img data-aos="zoom-out" data-aos-delay="300" className='rounded-full h-[170px] bg-transparent' src="src/imgs/f58a0f5f-8bfc-4ea6-8574-26bbd4350767_prev_ui.png" alt="" /><p data-aos="fade-down" data-aos-delay="400"  className='lg:text-3xl text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto nobis repellendus animi, fuga illum est provident laudantium quam ea deserunt, sunt fugit nihil fugiat odit totam quia molestias accusantium?<h1 className='text-green-400 pt-5'>Geofrey Kimani</h1></p></div>

        </div>

      </div>
      <div>
        {/* about team section */}
        <div className='grid lg:grid-cols-3 gap-10'>
          {/* card sections */}

          <div data-aos="fade-down" data-aos-delay="100" className='w-full h-[400px] rounded-4xl bg-cyan-950'><img className='rounded-[100%] m-auto h-[190px] -translate-y-14 animate-pulse bg-transparent' src="src/imgs/138e43db-bdc7-4d91-ad5f-6a037b0cae73_prev_ui.png" alt=""/><p className='text-center md:text-2xl py-20'>Stevo SimpleBoy</p></div>
          <div data-aos="fade-down" data-aos-delay="100"  className='w-full h-[400px] rounded-4xl bg-cyan-950'><img className='rounded-[100%] m-auto h-[190px] -translate-y-14 animate-pulse bg-transparent' src="src/imgs/8d8c1ec3-43d0-4b53-828b-3ace4c281fd3_prev_ui.png" alt="" /><p className='text-center md:text-2xl py-20'>Malaika Atieno</p></div>
          <div data-aos="fade-down" data-aos-delay="100"  className='w-full h-[400px] rounded-4xl bg-cyan-950'><img className='rounde-[100%] m-auto h-[190px] -translate-y-14 animate-pulse bg-transparent' src="src/imgs/0b5c0e83-902f-4b04-9ac6-65d3cc9f5e7f_prev_ui.png" alt="" /><p className='text-center md:text-2xl py-20'>Zeina Yoshua</p></div>

        </div>
      </div>
      <div className='container m-20'>
        <h1 data-aos="fade-down" data-aos-delay="300"  className='m-auto text-center mb-10 text-3xl text-amber-500 font-bold'>Together, We Track.Together,We Transform</h1>
        <div className='sm:grid grid-cols-2 gap-10'>
          <div data-aos="fade-down" data-aos-delay="100"><img className='rounded- bg-transparent' src="src/imgs/background by nywthn about businessman, business men png, colleagues, business, and job 6300549_prev_ui.png" alt="" /></div>
          <div className='m-auto'><p data-aos="fade-down" data-aos-delay="200" className='m-auto text-3xl text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vitae tempora, veritatis iste eveniet nobis? Obcaecati impedit deleniti nemo! Perferendis eaque aliquam aut soluta, itaque quasi tenetur facere deleniti. Culpa!</p></div>
        </div>
      </div>
 
    </div>
    </>
  )
}

export default HomePage