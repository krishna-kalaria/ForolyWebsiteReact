import ServiceDetail from '../components/ServiceDetail'
import image from '../assets/web-development.webp'

const paragraphs = [
  "Our team understands that designing a website for somebody isn't only about how the website looks to the end-user but also how it works and uses the information and data once it goes online. That's why we give appropriate importance to web development and all the aspects that come within it as well - the presentation, reliability, speed, data storage, efficiency, usage of the given data, integration process between front-end and back-end, third party access, use, permissions, and security of the website. This attention to detail given by our team in compliance with the client's request distinguishes Foroly Technologies from other custom web development agencies across India.",
  'While creating efficient working websites/webapps for our clients, we use all modern and authentic architecture techniques and frameworks that work best for the given website functionality. Our developers are accomplished in some of the new-age frameworks, web application interfaces, web optimization techniques, and platforms such as - ASP.NET MVC (Modern View Controller) architecture, ASP.NET Core, ASP.NET Web Forms, ASP.NET REST API (Application Programming Interface), Angular custom web and mobile application platform, and SEO methods.',
  "Our team is adept in giving a wide range of web services to ensure that our clients may never have to compromise with their needs. Guaranteed as a token of our loyalty and professionalism, especially for our clients, by best upcoming Mobile App Development and Web Development Company in India.",
]

function WebDevelopment() {
  return (
    <ServiceDetail
      title="Web Development"
      image={image}
      imageAlt="web development"
      paragraphs={paragraphs}
    />
  )
}

export default WebDevelopment
