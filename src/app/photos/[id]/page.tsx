import { photos } from "../../../../data/photos"
import Link from 'next/link'

export default async function PhotoPage( { params } : { params: { id: string} } ) {
    const { id } = await params;

    const photo = photos.find(p => p.id === id);

    if (!photo) {
        return <h1>Photo Not Found</h1>
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Link href="/" className="text-blue-500 mb-4 block">← Back to gallery</Link>
            <img src={photo.url} alt={photo.title} className="w-full h-auto" />
            <h1 className="text-2xl font-bold mt-4">{photo.title}</h1>
            <p className="mt-2">{photo.description}</p>
      </div>
    )

}