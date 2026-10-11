import PageBanner from '../components/PageBanner'

function About() {
  return (
    <div className="about-page">
      <PageBanner title="About US" />
      <section className="container page-content">
        <div className="description" data-anim="up">
          <p>
            Foroly Technologies is a web and mobile application development
            company with Indian roots specializing in offering various IT
            services and digital solutions, including professional online
            services to multiple tech organizations and digital marketing
            firms. We are a well-known digital solution provider with expertise
            in various fields, including web development, web design, and
            mobile app development. We are a group of capable and skilled
            professionals that are continually working on expanding our network
            and community reach. We started our operations in June 2020 in
            Ahmedabad, India.
          </p>
          <p>
            Even in digital marketing and SEO strategies, we prioritize client
            satisfaction and strive to provide excellent services. All of this
            while remaining honest to our work and true to our mission and
            vision, which is why we strive to be the best in all we do, whether
            for our clients or for ourselves and move closer to our goal of
            becoming one of India's top-notch web design and android mobile app
            development companies in India
          </p>

          <h3>Mission</h3>
          <p>
            Our mission is to provide digital solutions that have user-friendly
            and attractive UI. Additionally, its functionality must help in web
            design or mobile app development companies' business growth in India
            and worldwide.
          </p>

          <h3>Vision</h3>
          <p>
            Our primary vision is to understand our customers' requirements and
            provide secure IT solutions. We believe in providing the utmost
            satisfaction to our clients with our services.
          </p>
          <p>
            This makes us a distinguished web development &amp; web design
            agency and one of the best Mobile App Development companies in
            India.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
