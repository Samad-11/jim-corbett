import Image from "next/image";
import hero from '../../public/hero.jpg'
import { CiUser } from "react-icons/ci";

const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${hero.src})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content flex md:gap-32 justify-center items-start flex-wrap">
                <div className="max-w-lg">
                    <h1 className="mb-5 max-md:text-3xl text-5xl text-base-content- font-bold">Welcome to Jim Corbett Travel Guide</h1>
                    <p className="mb-5 max-md:text-sx text-base">Discover the Wild: Your Gateway to Adventure and Tranquility in Jim Corbett! Explore, Book, and Experience Nature&apos;ss Beauty with Us.</p>
                    <button className="btn btn-neutral">Explore</button>
                </div>
                <div className="max-w-md">
                    <h1 className="mb-5 max-md:text-3xl text-5xl font-bold">Check Availability</h1>
                    <form action="">
                        <input type="text" placeholder={`Full Name`} className="input text-neutral font-semibold input-bordered  w-full max-w-xs bg-base-content mb-2  placeholder:text-neutral placeholder:font-normal" required />
                        <input type="tel" placeholder="Phone Number" className="input text-neutral font-semibold  input-bordered  w-full max-w-xs bg-base-content mb-2 placeholder:text-neutral placeholder:font-normal" required />
                        <button type="submit" className="btn btn-neutral w-full max-w-xs">Submit</button>
                    </form>
                </div>
            </div>
            <h1 className="absolute font-extrabold tracking-wider max-md:text-lg text-2xl left-5 top-5">
                Jim <span className="text-primary">Corbett </span> <br /> <span className="text-primary">Travell </span> Guide
            </h1 >
        </div >
    )
}

export default Hero