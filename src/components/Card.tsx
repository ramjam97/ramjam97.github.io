interface CardProps {
    title?: string;
    id?: string;
    children?: React.ReactNode
}

export default function Card({ id, title, children }: CardProps) {
    return <>
        <div className="card bg-base-200 w-full shadow shadow-md border border-base-300" id={id}>
            <div className="card-body p-3">
                {title && <h2 className="card-title text-primary text-xl py-1">{title}</h2>}
                {children}
            </div>
        </div>
    </>
}