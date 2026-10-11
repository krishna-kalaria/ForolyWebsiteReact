import ServiceDetail from '../components/ServiceDetail'
import image from '../assets/ui-ux.webp'

const paragraphs = [
  'Foroly Technologies is proficient in providing professional web designing and web development services. Our capable team consists of some very skilful web designers who are brilliant with specific skills essential to design and implement various web designing functionalities.',
  'Our team prioritizes compelling user experience aspects such as visuals, convenience, and layout. It aims to produce a website compatible with various systems and web browsers to provide our clients with utmost satisfaction and become the best custom web designing and web development agency in India.',
  "Our team can handle both front-end and back-end aspects of website designing and web development as our designers have a good command of various languages and frameworks that are used while web development such as HyperText Markup Language (HTML), and HTML-5, styling tools like Cascading Style Sheet (CSS), CSS-3, and BootStrap. Integration framework languages, mainly JavaScript and its rich-featured libraries such as jQuery. Rich CSS styling extensions like SASS (Syntactically Awesome Style Sheets), SCSS, and LESS (Leaner Style Sheets). We are continuously upskilling and creating professional web designs to become one of the Best Web Development companies in India. We can guarantee our professionalism through our work as we honor our client's needs and requirements and provide them with the best possible solution while remaining true to our mission and goal.",
]

function WebDesign() {
  return <ServiceDetail title="Web Design" image={image} imageAlt="UI UX" paragraphs={paragraphs} />
}

export default WebDesign
