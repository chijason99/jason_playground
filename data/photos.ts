export interface Photo {
    id: string,
    title: string,
    description: string,
    url: string
}

export const photos : Photo[] = [
    {
        id: '1',
        title: 'Mountain Landscape',
        description: 'Beautiful mountain range at sunset',
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'
      },
      {
        id: '2',
        title: 'Beach View',
        description: 'Sandy beach with crystal clear water',
        url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a'
      },
      {
        id: '3',
        title: 'City Skyline',
        description: 'Urban landscape at night with lights',
        url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785'
      },
]