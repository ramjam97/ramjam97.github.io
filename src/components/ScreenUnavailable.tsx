import Profile from '@/assets/profile.jpg';

export default function ScreenUnavailable() {

    const portfolioLink = 'https://ramjam.netlify.app';

    return (
        <div className="min-h-[90vh] flex flex-col items-center justify-center text-base-content px-6 py-10">
            <div className="max-w-md text-center space-y-6">

                <div className="avatar mb-3">
                    <div className="w-30 rounded-full ring ring-primary ring-offset-base-100 ring-offset-3 shadow-lg flex items-center justify-center">
                        <img src={Profile} alt="Profile" className='w-full h-auto' />
                    </div>
                </div>

                <h1 className="text-4xl font-bold">Hi there!</h1>

                <p className="leading-relaxed">
                    Sorry, this page is currently unavailable.
                    <br />
                    You can visit my main portfolio instead:
                    <br />
                    <a href={portfolioLink} className="link link-primary font-semibold break-all">{portfolioLink}</a>
                </p>

                <a href={portfolioLink} className="btn btn-primary mt-4 flex items-center gap-2">
                    <span>🚀 Visit Portfolio</span>
                </a>

            </div>
        </div>
    );
}