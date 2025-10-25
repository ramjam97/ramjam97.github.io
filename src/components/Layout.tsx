import About from "@/components/About"
import Contact from "@/components/Contact"
import Links from "@/components/Links"
import Profile from "@/components/Profile"
import Skills from "@/components/Skills"
import ThemeDrawer from "@/components/ThemeDrawer"
import Experiences from "@/components/Experience"
import Footer from "@/components/Footer"
import Menu from "@/components/Menu"
import Education from "@/components/Education"

const Layout = () => {
    return <>
        <ThemeDrawer />
        <Menu />
        <div className="max-w-6xl mx-auto grid md:grid-cols-[30%_1fr] lg:grid-cols-[25%_1fr] gap-3 py-3 px-2 text-base-content">
            <div className="w-full flex items-start flex-col justify-start gap-3">
                <Profile />
                <About />
                <Contact />
                <Links />
            </div>
            <div className="flex items-start flex-col justify-start gap-3">
                <Skills />
                <Experiences />
                <Education />
            </div>
        </div>
        <Footer />
    </>
}

export default Layout