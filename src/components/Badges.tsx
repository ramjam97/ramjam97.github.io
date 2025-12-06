export default function Badges() {
    return <>
        <span className='flex flex-wrap flex-row gap-1 items-center'>
            <img alt="Status" src="https://img.shields.io/badge/status-available-success" />
            <a href="https://hits.sh/ramjam97.github.io/">
                <img alt="Views" src="https://hits.sh/ramjam97.github.io.svg?label=views" />
            </a>
        </span>
    </>
}