import ServiceDetail from '../components/ServiceDetail'
import image from '../assets/seo.webp'

const paragraphs = [
  "Search Engine Optimization (SEO) is the process of improving your website's visibility and popularity when users try to search for products or services related to your domain on search engines like Google, Bing, and others.",
  'Increasing the network and community reach is essential for any business online. Here at Foroly technologies, we also help your online businesses with effective SEO strategies to ensure your products and services are consistently among the top suggestions.',
  'There are very few SEO firms in India that even help emerging and small-scale businesses to grow their market online and help them direct their services to their target audiences. We profoundly express that Foroly Technologies is one of the top SEO agencies in India. This also comprises our donation to the digital marketing industry in India and aids in making India grow better industrially and economically.',
  "Suppose you choose Foroly Technologies to provide digital services for you. In that case, you'll most certainly not be disappointed. Regardless of whichever domain you select based on your demands, we guarantee to provide you with the optimal solution to your utmost satisfaction and a memorable user experience - a promise from one of the best upcoming Top-Notch Website and Mobile App Development companies in India.",
]

function Seo() {
  return <ServiceDetail title="SEO" image={image} imageAlt="SEO" paragraphs={paragraphs} />
}

export default Seo
