import About from "@/components/About"
import Contact from "@/components/contact/Contact"
import Links from "@/components/Links"
import Interests from "@/components/Interests"
import Profile from "@/components/profile/Profile"
import Skills from "@/components/skills/Skills"
import ThemeDrawer from "@/components/theme/ThemeDrawer"
import Experiences from "@/components/experience/Experience"
import Footer from "@/components/Footer"
import Menu from "@/components/Menu"
import Education from "@/components/education/Education"
import Bio from "@/components/Bio"
import Certificates from "@/components/certificate/Certificates"
import ContactFormModal from "./contact/ContactFormModal"

export default function Layout() {
    return <>
        <ThemeDrawer />
        <Menu />
        <div className="max-w-6xl mx-auto grid md:grid-cols-[30%_1fr] lg:grid-cols-[25%_1fr] gap-3 md:py-3 md:px-2 text-base-content">
            <div className="w-full flex items-start flex-col justify-start gap-3">
                <Profile />
                <Bio />
                <About />
                <Contact />
                <Links />
                <Interests />
            </div>
            <div className="flex items-start flex-col justify-start gap-3">
                <Skills />
                <Experiences />
                <Education />
                <Certificates />
            </div>
        </div>
        <ContactFormModal />
        <Footer />
    </>
}