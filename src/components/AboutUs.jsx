import mission from '../assets/mission.png'
import vision from '../assets/vision.png'

function AboutUs() {
  return (
    <section className="about-us home-page">
      <div className="container about-us-inner">
        <h2 className="section-title" data-anim="up">About Us</h2>
        <div className="about-us-wrapper">
          <div className="about mission-wrap" data-anim="left">
            <h3>
              <img src={mission} alt="" />
              Mission
            </h3>
            <p>
              Provide digital solutions which have user friendly UI and
              functionality which helps in customer's business growth.
            </p>
          </div>
          <div className="about" data-anim="right">
            <h3>
              <img src={vision} alt="" />
              Vision
            </h3>
            <p>
              Understand customer needs and requirements and provide good and
              secure IT solutions/services with customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
