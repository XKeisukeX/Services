import { motion } from "motion/react";
import { SlideLeft } from "../../utility/animation";
import { SlideRight } from "../../utility/animation";
import { SlideUp } from "../../utility/animation";

const About = () => {
    const studData = [
        {
            id: 1,
            img: 'https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/450653756_451584451127559_6444233866878081611_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGmMHg4jGy9SWbyNLNUNa_dLemLmEaYz20t6YuYRpjPbVSK8cRN9Y1SjRW_QyX1C7jfZy-W8KcVCayxgy1-L-dg&_nc_ohc=w6jEe8HOpXYQ7kNvgE_NSYm&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=AwRvS5etS4v3KBzIqBwhpR5&oh=00_AYBgK0VL5dBqsuQnWp4cMs-jSPoGNGcmgSIkulV3h3iR2w&oe=67613C61',
            name: 'Mark Mejia',
            year: 'III - YEAR - BSIT',
            school: 'Pangasinan State University',
            delay: 0.3,
        },
        {
            id: 2,
            img: 'https://www.corporatephotographerslondon.com/wp-content/uploads/2023/02/LinkedIn_Profile_Photo.jpg',
            name: 'John Michael Smith',
            year: 'III - YEAR - BSIT',
            school: 'Pangasinan State University',
            delay: 0.6,
        },
        {
            id: 3,
            img: 'https://wallpapers.com/images/hd/professional-profile-pictures-1500-x-2100-bvjgzg0cwa8r051t.jpg',
            name: 'Sarah Elizabeth White',
            year: 'III - YEAR - BSIT',
            school: 'Pangasinan State University',
            delay: 0.9,
        },
        {
            id: 4,
            img: 'https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg',
            name: 'Emily Grace Wilson',
            year: 'III - YEAR - BSIT',
            school: 'Pangasinan State University',
            delay: 0.9,
        },
        {
            id: 5,
            img: 'https://lh4.googleusercontent.com/proxy/ZbC8BBfG0fiPuCCxkeSVTYwRgPTv483FUsy4MvI0iNW0_gv9RrHl1wnMOEnLuNBPvSWRY5eFRhzs2Y1rqSMjjX0yUk1I6qy6PHAiTAOT7mFmN-70wfY',
            name: 'Michael David Johnson',
            year: 'III - YEAR - BSIT',
            school: 'Pangasinan State University',
            delay: 1.2,
        },
        {
            id: 6,
            img: 'https://www.profilebakery.com/wp-content/uploads/2024/03/professional-headshot-with-dark-gray-background-blue-suit.jpg',
            name: 'David Alexander Brown',
            year: 'III - YEAR - BSIT',
            school: 'Pangasinan State University',
            delay: 1.5,
        },
        {
            id: 7,
            img: 'https://content1.getnarrativeapp.com/68f6039f-a2f9-4e15-9b91-4f7cebe2a378/img_ref/4e80a9d6-aef4-4875-ab94-5952b6926e07/Hamish-5_professional_headshots_photographer_headshot_750.jpg',
            name: 'James William Clark',
            year: 'III - YEAR - BSIT',
            school: 'Pangasinan State University',
            delay: 1.5,
        },
        {
            id: 8,
            img: 'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=',
            name: 'Olivia Marie Davis',
            year: 'III - YEAR - BSIT',
            school: 'Pangasinan State University',
            delay: 1.8,
        },
        {
            id: 9,
            img: 'https://media.istockphoto.com/id/1398385367/photo/happy-millennial-business-woman-in-glasses-posing-with-hands-folded.jpg?s=612x612&w=0&k=20&c=Wd2vTDd6tJ5SeEY-aw0WL0bew8TAkyUGVvNQRj3oJFw=',
            name: 'Sophia Anne Thomas',
            year: 'III - YEAR - BSIT',
            school: 'Pangasinan State University',
            delay: 2.1,
        }
    ];
  return (
    <>
      <section className="bg-primary">
        <div className="container py-14 px-4">
            <div className="flex justify-around items-center">
                <motion.div 
                variants={SlideRight(0.5)}
                initial="hidden"
                whileInView="visible"
                className="space-y-4 md:text-left text-center">
                    <h4 className="md:text-6xl text-4xl text-white font-medium max-w-lg font-roboto">Meet Our Team of BSIT Students</h4>
                    <p className="max-w-xl text-white leading-relaxed text-lg">We are a group of passionate BSIT students dedicated to helping you succeed. From capstone projects to system design, we offer creative solutions to support your academic and professional growth.</p>
                </motion.div>
                <motion.img 
                variants={SlideLeft(1.5)}
                initial="hidden"
                whileInView="visible"
                className="size-80 md:block hidden" src="https://advanced-gi.com/wp-content/uploads/2020/06/about-us.png" alt="" />
            </div>
            <div className="flex flex-wrap gap-4 justify-center items-center mt-10 group">
                {
                    studData.map((item) => {
                        return (
                            <motion.div 
                            variants={SlideUp(item.delay)}
                            initial="hidden"
                            whileInView="visible"
                            key={item.id} className="h-80 w-96 relative overflow-hidden custom-shadow">
                            <img className="bg-cover size-full rounded-lg" src={item.img} alt="" />
                                <div className="absolute size-full rounded-lg bg-white flex flex-col text-center items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-90 transition-all duration-500 space-y-1 px-4">
                                    <h4 className="text-4xl font-semibold text-primary">{item.name}</h4>
                                    <p className="text-lg font-semibold text-color">{item.year}</p>
                                    <small className="text-primary font-medium tracking-wide">{item.school}</small>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
      </section>
    </>
  )
}

export default About
