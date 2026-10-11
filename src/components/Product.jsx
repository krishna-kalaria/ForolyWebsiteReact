import { Link } from 'react-router-dom'
import promo from '../assets/inviteapp-promo.png'
import StoreButtons from './StoreButtons'

function Product() {
  return (
    <section className="product home-page">
      <div className="container product-inner">
        <h2 className="section-title" data-anim="left">Our Product</h2>
        <div className="product-row">
          <div className="product-image-col" data-anim="left">
            <img
              className="product-promo"
              src={promo}
              alt="InviteApp: turn your guest list into personalized invitations"
              loading="lazy"
            />
          </div>
          <div className="product-detail" data-anim="right">
          <h3>InviteApp</h3>
          <p>
            InviteApp is a mobile app for iPhone and Android by Foroly Technologies that lets you
            create personalised wedding and event invitation PDFs for every guest in minutes.
          </p>
          <p>
            Upload your invitation PDF, tap where the guest&apos;s name should go, add your guest
            list, and choose the print language. InviteApp creates one PDF per guest and packs them
            in a ZIP that you can share on WhatsApp, Email or Drive, or save to your phone.
          </p>
          <p>
            Guest names can be printed in 13 languages and scripts, including Hindi, Gujarati and
            Marathi. Add guests by typing their names, uploading a .csv, .xlsx or .txt file, or
            taking a photo of a guest list, even a handwritten one.
          </p>
          <StoreButtons />
          <p className="product-more">
            <Link to="/inviteapp">Learn more about InviteApp</Link>
          </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
