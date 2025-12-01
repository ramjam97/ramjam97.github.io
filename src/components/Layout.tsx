import About from "@/components/About"
import Contact from "@/components/Contact"
import Links from "@/components/Links"
import Interests from "@/components/Interests"
import Profile from "@/components/Profile"
import Skills from "@/components/Skills"
import ThemeDrawer from "@/components/ThemeDrawer"
import Experiences from "@/components/Experience"
import Footer from "@/components/Footer"
import Menu from "@/components/Menu"
import Education from "@/components/Education"
import Bio from "@/components/Bio"
import Certificates from "@/components/Certificates"

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
                <Certificates />
                <Education />
            </div>
        </div>
        <Footer />
    </>
}