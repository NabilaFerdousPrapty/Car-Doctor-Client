import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className=' my-4'>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row relative gap-36">
    <div className='w-1/2 '>
    <img src={person} className=" rounded-lg shadow-2xl" />
    <img src={parts} className="absolute top-[60%]  left-[30%] w-1/4 border-8 border-white p-1 rounded-lg shadow-2xl" />
    </div>
    <div className='w-1/2'>
      <h1 className="text-xl font-bold text-[#FF3811]">About Us</h1>
      <p className="py-6 text-5xl font-extrabold">We are qualified <br /> & of experience <br /> in this field</p>
      <p className=' py-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className='py-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn bg-red-600 text-white ">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;