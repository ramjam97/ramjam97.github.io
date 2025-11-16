import { useContext } from 'react'
import { AppContext } from '@/context/AppContextProvider';
import Card from '@/components/Card';
import DownloadButton from '@/components/DownloadButton';
import ProfileImg from '@/assets/profile.jpg';
import Badges from './Badges';

export const ID_PROFILE = "profile";

export default function Profile() {

    const { data, showThemeController, setShowThemeController } = useContext(AppContext);

    return <>
        <Card id={ID_PROFILE}>

            <div className='flex flex-col gap-2'>

                <span className='absolute top-2 right-2'>
                    <button className='btn btn-soft btn-primary rounded-full btn-square btn-sm' onClick={() => setShowThemeController(true)} disabled={showThemeController}>
                        <i className='pi pi-palette'></i>
                    </button>
                </span>

                <span className='px-3 py-2 flex items-center justify-center'>
                    <div className='avatar'>
                        <div className='w-50 rounded-full ring ring-primary ring-offset-base-100 ring-offset-3 bg-base-300 overflow-hidden'>
                            <img src={ProfileImg} alt={data.name} />
                        </div>
                    </div>
                </span>

                <h2 className="card-title text-2xl text-primary">{data.name}</h2>

                <div className='flex flex-wrap flex-row gap-1 items-center'>
                    {data.roles.map((role, index) => <span className='badge badge-primary text-primary-content' key={index}>{role}</span>)}
                </div>

                <span className='text-sm text-base-content/70'>
                    <i className='pi pi-map-marker'></i> {data.address}
                </span>

                <Badges />
                <DownloadButton />

            </div>
        </Card>
    </>
}