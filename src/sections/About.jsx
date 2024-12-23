import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState } from "react"

const About = () => {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText("vanguyen.work@gmail.com")
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 2000)
    }

  return (
    <section className='c-space my-20' id="about">
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:w-[276px] h-fit object-contain'/>
                    <div>
                        <p className="grid-headtext">Hi, I'm Chloe</p>
                        <p className="grid-subtext">
                            With 5 years of experience, I have honed my skills in the field of web development and design. I specialize in creating user-friendly and visually appealing websites that are both functional and aesthetically pleasing.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain'/>
                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">
                            I have a strong foundation in HTML, CSS, and JavaScript, and I am also proficient in popular frameworks such as React and Next.js.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe width={326} height={326} backgroundColor="rgba(0,0,0,0)" backgroundImageOpacity={0.5} showAtmosphere showGraticules globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" />
                    </div>
                    <div>
                        <p className="grid-headtext">I work remotely across most timezones</p>
                        <p className="grid-subtext">
                           I'm based in Vietnam, with remote work available.
                        </p>
                        <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                    </div>
                </div>
            </div>
            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain'/>
                    <div>
                        <p className="grid-headtext">My Passion for Coding</p>
                        <p className="grid-subtext">
                            I love solving problems and building things through code. Coding isn't just my profession, it's my passion.
                        </p>
                    </div>
                </div>
            </div>
            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-contain sm:object-top'/>
                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact me</p>
                        <div className="copy-container" onClick={handleCopy}>
                           <img src={isCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
                           <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient">vanguyen.work@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About