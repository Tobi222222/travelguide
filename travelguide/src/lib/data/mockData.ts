export interface Place {
    id: string;
    title: string;
    description: string;
    category: 'attraction' | 'restaurant' | 'cafe' | 'beach' | 'rooftop' | 'hidden-gem' | 'nightlife';
    image: string;
    tags: string[];
    localScore: number; // 0-10
    priceLevel: '$' | '$$' | '$$$' | '$$$$';
    vibeTags: string[];
    coordinates: { lat: number, lng: number }; // placeholder
    recommendationTags: string[];
}

export const mockPlaces: Place[] = [
    // Attractions
    {
        id: 'a1',
        title: 'Sagrada Familia',
        description: 'Antoni Gaudí\'s unfinished masterpiece and Barcelona\'s most famous landmark. A spectacular display of architecture and light.',
        category: 'attraction',
        image: 'https://images.unsplash.com/photo-1583422409516-15eba5336080?auto=format&fit=crop&q=80&w=800',
        tags: ['Architecture', 'Must See', 'Historic'],
        localScore: 9.8,
        priceLevel: '$$',
        vibeTags: ['Cultural', 'Touristy'],
        coordinates: { lat: 41.4036, lng: 2.1744 },
        recommendationTags: ['Culture Lover']
    },
    {
        id: 'a2',
        title: 'Park Güell',
        description: 'A colorful public park system composed of gardens and architectonic elements designed by Gaudí.',
        category: 'attraction',
        image: 'https://images.unsplash.com/photo-1523531294919-4bab31ecd8cc?auto=format&fit=crop&q=80&w=800',
        tags: ['Nature', 'Art', 'Viewpoint'],
        localScore: 9.2,
        priceLevel: '$$',
        vibeTags: ['Relaxed', 'Touristy'],
        coordinates: { lat: 41.4145, lng: 2.1527 },
        recommendationTags: ['Culture Lover', 'Relaxed']
    },
    {
        id: 'a3',
        title: 'Casa Batlló',
        description: 'One of Antoni Gaudí\'s masterpieces, a remodel of a previously built house, famous for its skeletal, organic facade.',
        category: 'attraction',
        image: 'https://images.unsplash.com/photo-1614088820490-e37456bc99eb?auto=format&fit=crop&q=80&w=800',
        tags: ['Architecture', 'Museum'],
        localScore: 9.5,
        priceLevel: '$$$',
        vibeTags: ['Cultural'],
        coordinates: { lat: 41.3917, lng: 2.1649 },
        recommendationTags: ['Culture Lover', 'Luxury Traveler']
    },
    {
        id: 'a4',
        title: 'Gothic Quarter (Barri Gòtic)',
        description: 'The historic center of the old city of Barcelona, full of narrow medieval streets, trendy bars, and local boutiques.',
        category: 'attraction',
        image: 'https://images.unsplash.com/photo-1605342410884-21f456fb4890?auto=format&fit=crop&q=80&w=800',
        tags: ['History', 'Walking', 'Shopping'],
        localScore: 9.6,
        priceLevel: '$',
        vibeTags: ['Energetic', 'Local lifestyle'],
        coordinates: { lat: 41.3828, lng: 2.1769 },
        recommendationTags: ['Local Lifestyle Explorer', 'Hidden Gem Hunter']
    },
    
    // Hidden Gems
    {
        id: 'hg1',
        title: 'Bunkers del Carmel',
        description: 'Former anti-aircraft warfare bunkers that now offer the most breathtaking panoramic views of the entire city.',
        category: 'hidden-gem',
        image: 'https://images.unsplash.com/photo-1549449830-ecb8b3b3ba98?auto=format&fit=crop&q=80&w=800',
        tags: ['Viewpoint', 'Sunset', 'Free'],
        localScore: 9.9,
        priceLevel: '$',
        vibeTags: ['Chill', 'Romantic', 'Adventurous'],
        coordinates: { lat: 41.4190, lng: 2.1616 },
        recommendationTags: ['Hidden Gem Hunter', 'Relaxed']
    },
    {
        id: 'hg2',
        title: 'Parc del Laberint d\'Horta',
        description: 'The oldest conserved garden in the city, featuring a beautiful neoclassical maze.',
        category: 'hidden-gem',
        image: 'https://images.unsplash.com/photo-1627960320499-28ec3a0c5bd6?auto=format&fit=crop&q=80&w=800',
        tags: ['Nature', 'Quiet', 'Romantic'],
        localScore: 9.0,
        priceLevel: '$',
        vibeTags: ['Relaxed', 'Romantic'],
        coordinates: { lat: 41.4397, lng: 2.1466 },
        recommendationTags: ['Hidden Gem Hunter', 'Relaxed']
    },

    // Beaches
    {
        id: 'b1',
        title: 'Bogatell Beach',
        description: 'A cleaner, slightly quieter alternative to Barceloneta. Popular with locals for volleyball and relaxing.',
        category: 'beach',
        image: 'https://images.unsplash.com/photo-1518335440626-4ee8fb827376?auto=format&fit=crop&q=80&w=800',
        tags: ['Beach', 'Sports', 'Chiringuitos'],
        localScore: 8.8,
        priceLevel: '$',
        vibeTags: ['Energetic', 'Local lifestyle', 'Chill'],
        coordinates: { lat: 41.3934, lng: 2.2045 },
        recommendationTags: ['Beach Lover', 'Local Lifestyle Explorer']
    },
    {
        id: 'b2',
        title: 'Ocata Beach',
        description: 'Located just outside Barcelona (quick train ride), offering wide, flat, and quiet golden sands.',
        category: 'beach',
        image: 'https://images.unsplash.com/photo-1596414995743-1579b18361b7?auto=format&fit=crop&q=80&w=800',
        tags: ['Beach', 'Quiet', 'Day Trip'],
        localScore: 9.3,
        priceLevel: '$',
        vibeTags: ['Chill', 'Relaxed'],
        coordinates: { lat: 41.4789, lng: 2.3160 },
        recommendationTags: ['Beach Lover', 'Relaxed', 'Hidden Gem Hunter']
    },

    // Restaurants/Cafes
    {
        id: 'r1',
        title: 'Satan\'s Coffee Corner',
        description: 'Pioneers of specialty coffee in Barcelona. A tucked-away local favorite in the Gothic Quarter.',
        category: 'cafe',
        image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800',
        tags: ['Coffee', 'Breakfast', 'Hip'],
        localScore: 9.5,
        priceLevel: '$$',
        vibeTags: ['Local lifestyle', 'Chill'],
        coordinates: { lat: 41.3824, lng: 2.1764 },
        recommendationTags: ['Foodie Explorer', 'Local Lifestyle Explorer']
    },
    {
        id: 'r2',
        title: 'El Nacional',
        description: 'An elegant, multi-space culinary destination offering different areas to experience traditional recipes from the Iberian Peninsula.',
        category: 'restaurant',
        image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800',
        tags: ['Tapas', 'Premium', 'Atmosphere'],
        localScore: 8.9,
        priceLevel: '$$$',
        vibeTags: ['Energetic', 'Social', 'Luxury'],
        coordinates: { lat: 41.3896, lng: 2.1678 },
        recommendationTags: ['Foodie Explorer', 'Luxury Traveler']
    },
    {
        id: 'r3',
        title: 'Bar Cañete',
        description: 'Vibrant, classic tapas bar known for excellent seafood, traditional dishes, and a lively atmosphere.',
        category: 'restaurant',
        image: 'https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?auto=format&fit=crop&q=80&w=800',
        tags: ['Tapas', 'Seafood', 'Authentic'],
        localScore: 9.6,
        priceLevel: '$$$',
        vibeTags: ['Energetic', 'Local lifestyle'],
        coordinates: { lat: 41.3787, lng: 2.1739 },
        recommendationTags: ['Foodie Explorer', 'Local Lifestyle Explorer']
    },

    // Rooftops & Nightlife
    {
        id: 'rt1',
        title: 'Ayre Hotel Rosellón Rooftop',
        description: 'Offers arguably the most spectacular, unobstructed, and up-close view of the Sagrada Familia.',
        category: 'rooftop',
        image: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&q=80&w=800',
        tags: ['Cocktails', 'Views', 'Sunset'],
        localScore: 9.4,
        priceLevel: '$$$',
        vibeTags: ['Romantic', 'Chill'],
        coordinates: { lat: 41.4052, lng: 2.1731 },
        recommendationTags: ['Luxury Traveler', 'Romantic']
    },
    {
        id: 'n1',
        title: 'Paradiso',
        description: 'A speakeasy hidden behind a pastrami shop, ranked as one of the World\'s Best Bars. Incredible mixology.',
        category: 'nightlife',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
        tags: ['Cocktails', 'Speakeasy', 'World Class'],
        localScore: 9.8,
        priceLevel: '$$$',
        vibeTags: ['Social', 'Energetic', 'Luxury'],
        coordinates: { lat: 41.3840, lng: 2.1831 },
        recommendationTags: ['Party Traveler', 'Luxury Traveler', 'Foodie Explorer']
    }
];

// Helper to determine match percentage based on profile
export function getMatchPercentage(place: Place, profile: string): number {
    if (place.recommendationTags.includes(profile)) {
        return Math.floor(Math.random() * (99 - 90 + 1) + 90); // 90-99
    }
    return Math.floor(Math.random() * (85 - 65 + 1) + 65); // 65-85
}
