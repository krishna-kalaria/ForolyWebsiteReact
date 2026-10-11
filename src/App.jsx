import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import WebDesign from './pages/WebDesign'
import WebDevelopment from './pages/WebDevelopment'
import AppDevelopment from './pages/AppDevelopment'
import DigitalMarketing from './pages/DigitalMarketing'
import Seo from './pages/Seo'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Copyright from './pages/Copyright'
import CommunityGuidelines from './pages/CommunityGuidelines'
import InviteApp from './pages/inviteapp/InviteApp'
import InviteAppPrivacy from './pages/inviteapp/Privacy'
import InviteAppTerms from './pages/inviteapp/Terms'
import InviteAppRefund from './pages/inviteapp/Refund'
import InviteAppSupport from './pages/inviteapp/Support'
import InviteAppDeleteAccount from './pages/inviteapp/DeleteAccount'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="page-shell">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/app-development" element={<AppDevelopment />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/seo" element={<Seo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/copyright" element={<Copyright />} />
        <Route path="/community-guidelines" element={<CommunityGuidelines />} />
        <Route path="/inviteapp" element={<InviteApp />} />
        <Route path="/inviteapp/privacy-policy" element={<InviteAppPrivacy />} />
        <Route path="/inviteapp/terms" element={<InviteAppTerms />} />
        <Route path="/inviteapp/refund-policy" element={<InviteAppRefund />} />
        <Route path="/inviteapp/support" element={<InviteAppSupport />} />
        <Route path="/inviteapp/delete-account" element={<InviteAppDeleteAccount />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
