import ServiceDetail from '../components/ServiceDetail'
import image from '../assets/digital-marketing.webp'

const paragraphs = [
  'With Digital Marketing trends soaring high continuously, Foroly Technologies made sure not to stay behind. Hence, we now provide services specific to digital marketing and update ourselves with the latest adaptive and efficient digital marketing trends to help businesses grow online and be among the top digital marketing agencies in India.',
  'We focus on providing digital marketing solutions for local and global public companies and agencies. Our team is regularly researching and updating themselves with the digital market hacks so that we can give your digital marketing efforts an edge above the others.',
]

function DigitalMarketing() {
  return (
    <ServiceDetail
      title="Digital Marketing"
      image={image}
      imageAlt="Digital marketing"
      paragraphs={paragraphs}
      imageRight
    />
  )
}

export default DigitalMarketing
