import Link from "next/link"
import { Photo } from "../data/photos"

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
    return (
        <div>
            {
                photos.map(p => (
                    <Link
                        key = {p.id}
                        href = {`/photos/${p.id}`}
                        className = "block hover:opacity-80 transition"
                    >
                        <img src={p.url} alt={p.title} className="w-full h-48 object-cover" />
                        <h3 className="mt-2 font-medium">{p.title}</h3>
                    </Link>
                ))
            }
        </div>
    )
}