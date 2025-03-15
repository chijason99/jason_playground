import Modal from '../../../../../../components/Modal';
import { photos } from '../../../../../../data/photos';

export default async function PhotoModal({ params }: { params: { id: string } }) {
  const { id } = await params;

  const photo = photos.find(p => p.id === id);
  
  if (!photo) return <div>Photo not found</div>;
  
  return (
    <Modal>
      <div className="p-4">
        <img src={photo.url} alt={photo.title} className="w-full h-auto" />
        <h2 className="text-xl text-black mt-2">{photo.title}</h2>
        <p className='text-black'>{photo.description}</p>
      </div>
    </Modal>
  );
}