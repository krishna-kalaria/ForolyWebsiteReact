import ServiceDetail from '../components/ServiceDetail'
import image from '../assets/app.webp'

const paragraphs = [
  'Foroly App is proof of our excellence in building and modifying mobile applications from scratch. Foroly Technologies can create any mobile or web application compatible across various digital devices like smartphones, tablets, laptops, iPads, and different operating systems.',
  'Our expertise in designing mobile applications for both Android and iOS systems are some of the characteristics that put Foroly Technologies on the list of best Android Mobile app development, Web Development, and best iOS mobile app development companies in India.',
  "The apps that we create can be made available across different installing platforms such as Google Play Store or Apple apps, which indicates our project's authenticity and adaptability with other mobile app development agencies and clients. This quality is mostly lacking in the custom mobile app development companies situated in India and is another thing that sets us apart from other mobile app and web development companies across India.",
]

function AppDevelopment() {
  return (
    <ServiceDetail
      title="App Development"
      image={image}
      imageAlt="App development"
      paragraphs={paragraphs}
    />
  )
}

export default AppDevelopment
