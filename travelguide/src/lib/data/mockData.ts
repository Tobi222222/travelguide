import { imageMap } from './imageMap';

export type PlaceCategory = 'attraction' | 'restaurant' | 'cafe' | 'beach' | 'rooftop' | 'hidden-gem' | 'nightlife' | 'market' | 'viewpoint' | 'romantic';

export interface Place {
    id: string;
    title: string;
    description: string;
    category: PlaceCategory;
    image: string;
    fallbackSrc: string; // New: Fallback image for safety
    tags: string[];
    localScore: number;
    priceLevel: '$' | '$$' | '$$$' | '$$$$';
    district: string; // New: District string
    vibeTags: string[];
    coordinates: { lat: number, lng: number };
    recommendationTags: string[];
    bestVisitingHours: string;
    isQuietNow: boolean;
    trending: boolean;
    editorialCollection?: string;
    sunsetTime?: string;
    localTip?: string; // New: Local tip
}

// Helper for generating Unsplash URLs safely
const getImageUrl = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=1200&h=800`; // Updated to landscape 3:2

// Helper for category fallbacks
const getFallback = (category: PlaceCategory) => {
    const fallbacks: Record<PlaceCategory, string> = {
        'attraction': 'https://images.unsplash.com/photo-1583422409516-15eba5336080?w=800',
        'restaurant': 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800',
        'cafe': 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800',
        'beach': 'https://images.unsplash.com/photo-1518335440626-4ee8fb827376?w=800',
        'rooftop': 'https://images.unsplash.com/photo-1534008897995-27a23e859048?w=800',
        'hidden-gem': 'https://images.unsplash.com/photo-1549449830-ecb8b3b3ba98?w=800',
        'nightlife': 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800',
        'market': 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
        'viewpoint': 'https://images.unsplash.com/photo-1549449830-ecb8b3b3ba98?w=800',
        'romantic': 'https://images.unsplash.com/photo-1515238152791-8225bf451d80?w=800',
    };
    return fallbacks[category];
};

const _rawPlaces: Place[] = [
    // --- ATTRACTIONS (10) ---
    {
        id: 'a1', title: 'Sagrada Familia',
        description: 'Gaudí\'s unfinished masterpiece. The interior light during late afternoon is an unparalleled spiritual experience.',
        category: 'attraction', image: getImageUrl('1583422409516-15eba5336080'), fallbackSrc: getFallback('attraction'),
        tags: ['Architecture', 'Must See', 'Historic'], localScore: 9.8, priceLevel: '$$', district: 'Eixample',
        vibeTags: ['Cultural', 'Awe-inspiring'], coordinates: { lat: 41.4036, lng: 2.1744 }, recommendationTags: ['Culture Lover', 'Luxury Traveler'],
        bestVisitingHours: '16:00 - 18:00', isQuietNow: false, trending: true, editorialCollection: 'Iconic Barcelona',
        localTip: 'Book tickets weeks in advance and aim for the Nativity facade tower climb.'
    },
    {
        id: 'a2', title: 'Park Güell',
        description: 'A colorful public park system composed of gardens and architectonic elements designed by Gaudí.',
        category: 'attraction', image: getImageUrl('1523531294919-4bab31ecd8cc'), fallbackSrc: getFallback('attraction'),
        tags: ['Nature', 'Art', 'Viewpoint'], localScore: 9.2, priceLevel: '$$', district: 'Gràcia',
        vibeTags: ['Relaxed', 'Scenic'], coordinates: { lat: 41.4145, lng: 2.1527 }, recommendationTags: ['Culture Lover', 'Relaxed'],
        bestVisitingHours: '08:00 - 10:00', isQuietNow: true, trending: false, editorialCollection: 'Morning Strolls',
        localTip: 'Go right at opening time to beat the heavy crowds.'
    },
    {
        id: 'a3', title: 'Casa Batlló',
        description: 'Famous for its skeletal, organic facade. A true testament to Modernisme right on Passeig de Gràcia.',
        category: 'attraction', image: getImageUrl('1614088820490-e37456bc99eb'), fallbackSrc: getFallback('attraction'),
        tags: ['Architecture', 'Museum'], localScore: 9.5, priceLevel: '$$$', district: 'Eixample',
        vibeTags: ['Cultural', 'Elegant'], coordinates: { lat: 41.3917, lng: 2.1649 }, recommendationTags: ['Culture Lover', 'Luxury Traveler'],
        bestVisitingHours: '10:00 - 12:00', isQuietNow: false, trending: true, editorialCollection: 'Masterpieces',
        localTip: 'Get the premium audio guide, it uses AR.'
    },
    {
        id: 'a4', title: 'Gothic Quarter',
        description: 'Lose yourself in the labyrinthine streets of the old city, full of hidden squares and trendy bars.',
        category: 'attraction', image: getImageUrl('1527030280862-64139fba04ca'), fallbackSrc: getFallback('attraction'),
        tags: ['History', 'Walking', 'Shopping'], localScore: 9.6, priceLevel: '$', district: 'Ciutat Vella',
        vibeTags: ['Energetic', 'Mysterious', 'Local lifestyle'], coordinates: { lat: 41.3828, lng: 2.1769 }, recommendationTags: ['Local Lifestyle Explorer'],
        bestVisitingHours: '19:00 - 22:00', isQuietNow: false, trending: true, editorialCollection: 'Local Favorites', localTip: 'Wander aimlessly without a map.'
    },
    {
        id: 'a5', title: 'Palau de la Música Catalana',
        description: 'A breathtaking concert hall in the Modernista style. The stained glass skylight is a masterpiece.',
        category: 'attraction', image: getImageUrl('1561580979-9944690ea88d'), fallbackSrc: getFallback('attraction'),
        tags: ['Architecture', 'Music'], localScore: 9.7, priceLevel: '$$', district: 'El Born',
        vibeTags: ['Cultural', 'Elegant'], coordinates: { lat: 41.3875, lng: 2.1753 }, recommendationTags: ['Culture Lover'],
        bestVisitingHours: '11:00 - 13:00', isQuietNow: true, trending: false, localTip: 'Try to catch an actual guitar concert here.'
    },
    {
        id: 'a6', title: 'Casa Milà (La Pedrera)',
        description: 'Another Gaudí masterpiece, famous for its undulating stone facade and surreal rooftop chimneys.',
        category: 'attraction', image: getImageUrl('1558284564-218a5ce2e2ff'), fallbackSrc: getFallback('attraction'),
        tags: ['Architecture', 'Modernisme'], localScore: 9.3, priceLevel: '$$$', district: 'Eixample',
        vibeTags: ['Cultural', 'Historical'], coordinates: { lat: 41.3954, lng: 2.1619 }, recommendationTags: ['Culture Lover'],
        bestVisitingHours: '09:00 - 11:00', isQuietNow: false, trending: true, localTip: 'The summer night experience on the roof includes jazz and Cava.'
    },
    {
        id: 'a7', title: 'Montjuïc Castle',
        description: 'An old military fortress with roots dating back to 1640, offering stunning sea and city views.',
        category: 'attraction', image: getImageUrl('1588612165034-e40b377fc0d4'), fallbackSrc: getFallback('attraction'),
        tags: ['History', 'Views', 'Castle'], localScore: 8.9, priceLevel: '$', district: 'Sants-Montjuïc',
        vibeTags: ['Historical', 'Scenic'], coordinates: { lat: 41.3633, lng: 2.1664 }, recommendationTags: ['Culture Lover', 'Relaxed'],
        bestVisitingHours: '16:00 - 19:00', isQuietNow: true, trending: false, localTip: 'Take the cable car up for incredible aerial views.'
    },
    {
        id: 'a8', title: 'Poble Espanyol',
        description: 'An open-air architectural museum built for the 1929 International Exhibition.',
        category: 'attraction', image: getImageUrl('1570081326-cd07df3cf4bc'), fallbackSrc: getFallback('attraction'),
        tags: ['Museum', 'Architecture'], localScore: 8.7, priceLevel: '$$', district: 'Sants-Montjuïc',
        vibeTags: ['Cultural', 'Family'], coordinates: { lat: 41.3732, lng: 2.1481 }, recommendationTags: ['Culture Lover'],
        bestVisitingHours: '14:00 - 17:00', isQuietNow: false, trending: false, localTip: 'Great place to buy authentic regional crafts.'
    },
    {
        id: 'a9', title: 'Camp Nou',
        description: 'The iconic stadium of FC Barcelona. The museum tour is a must for any football fan.',
        category: 'attraction', image: getImageUrl('1614917637841-f60bb116cc8c'), fallbackSrc: getFallback('attraction'),
        tags: ['Sports', 'Stadium'], localScore: 9.4, priceLevel: '$$$', district: 'Les Corts',
        vibeTags: ['Energetic', 'Iconic'], coordinates: { lat: 41.3809, lng: 2.1228 }, recommendationTags: ['Party Traveler', 'Local Lifestyle Explorer'],
        bestVisitingHours: '10:00 - 13:00', isQuietNow: false, trending: true, localTip: 'Check if there is a match, the atmosphere is electric.'
    },
    {
        id: 'a10', title: 'Magic Fountain of Montjuïc',
        description: 'A spectacular display of color, light, motion, music, and water acrobatics.',
        category: 'attraction', image: getImageUrl('1554559288-0f11d1983eb4'), fallbackSrc: getFallback('attraction'),
        tags: ['Free', 'Night', 'Show'], localScore: 9.1, priceLevel: '$', district: 'Sants-Montjuïc',
        vibeTags: ['Romantic', 'Family'], coordinates: { lat: 41.3712, lng: 2.1517 }, recommendationTags: ['Romantic', 'Relaxed'],
        bestVisitingHours: '20:30 - 22:00', isQuietNow: false, trending: true, localTip: 'Arrive 30 minutes early to get a good viewing spot on the steps.'
    },

    // --- RESTAURANTS (10) ---
    {
        id: 'r1', title: 'El Nacional',
        description: 'An elegant, multi-space culinary destination offering different areas to experience traditional Iberian recipes.',
        category: 'restaurant', image: getImageUrl('1514933651103-005eec06c04b'), fallbackSrc: getFallback('restaurant'),
        tags: ['Tapas', 'Premium', 'Atmosphere'], localScore: 8.9, priceLevel: '$$$', district: 'Eixample',
        vibeTags: ['Energetic', 'Luxury'], coordinates: { lat: 41.3896, lng: 2.1678 }, recommendationTags: ['Foodie Explorer', 'Luxury Traveler'],
        bestVisitingHours: '20:30 - 23:30', isQuietNow: false, trending: true, editorialCollection: 'Fine Dining', localTip: 'Grab a cocktail at the central bar while waiting.'
    },
    {
        id: 'r2', title: 'Bar Cañete',
        description: 'Vibrant, classic tapas bar known for excellent seafood, traditional dishes, and waiters in crisp white jackets.',
        category: 'restaurant', image: getImageUrl('1525648199074-cee30ba79a4a'), fallbackSrc: getFallback('restaurant'),
        tags: ['Tapas', 'Seafood', 'Authentic'], localScore: 9.6, priceLevel: '$$$', district: 'Raval',
        vibeTags: ['Energetic', 'Local lifestyle'], coordinates: { lat: 41.3787, lng: 2.1739 }, recommendationTags: ['Foodie Explorer'],
        bestVisitingHours: '13:30 - 15:30', isQuietNow: false, trending: true, editorialCollection: 'Best Tapas', localTip: 'Sit at the bar to watch the chefs work their magic.'
    },
    {
        id: 'r3', title: 'Gala',
        description: 'A surreal, Dalí-inspired dining experience with a carousel inside and a stunning hidden courtyard.',
        category: 'restaurant', image: getImageUrl('1550966871-3ed3cdb5ed0c'), fallbackSrc: getFallback('restaurant'),
        tags: ['Aesthetic', 'Mediterranean', 'Trendy'], localScore: 9.1, priceLevel: '$$$', district: 'Eixample',
        vibeTags: ['Aesthetic', 'Social', 'Luxury'], coordinates: { lat: 41.3931, lng: 2.1554 }, recommendationTags: ['Luxury Traveler', 'Party Traveler'],
        bestVisitingHours: '21:00 - 00:00', isQuietNow: false, trending: true, editorialCollection: 'Vibrant Spaces', localTip: 'Dress to impress here.'
    },
    {
        id: 'r4', title: 'La Pepita',
        description: 'A lively, graffiti-covered tapas bar in Gràcia serving inventive small plates. Always buzzing.',
        category: 'restaurant', image: getImageUrl('1555396273-367ea4eb4db5'), fallbackSrc: getFallback('restaurant'),
        tags: ['Tapas', 'Modern', 'Bustling'], localScore: 9.4, priceLevel: '$$', district: 'Gràcia',
        vibeTags: ['Social', 'Energetic', 'Local lifestyle'], coordinates: { lat: 41.3985, lng: 2.1595 }, recommendationTags: ['Foodie Explorer'],
        bestVisitingHours: '19:30 - 22:30', isQuietNow: false, trending: false, editorialCollection: 'Local Favorites', localTip: 'Try the smoked eggplant fritters.'
    },
    {
        id: 'r5', title: 'Disfrutar',
        description: 'Consistently ranked among the best restaurants in the world. A mind-bending culinary journey.',
        category: 'restaurant', image: getImageUrl('1595295333155-94464ea01bfb'), fallbackSrc: getFallback('restaurant'),
        tags: ['Michelin', 'Avant-garde', 'Tasting Menu'], localScore: 9.9, priceLevel: '$$$$', district: 'Eixample',
        vibeTags: ['Luxury', 'Exclusive'], coordinates: { lat: 41.3879, lng: 2.1534 }, recommendationTags: ['Foodie Explorer', 'Luxury Traveler'],
        bestVisitingHours: '20:00 - 23:00', isQuietNow: true, trending: true, editorialCollection: 'Fine Dining', localTip: 'Book literally months in advance.'
    },
    {
        id: 'r6', title: 'Tickets',
        description: 'Theatrical, avant-garde tapas in a playful circus-themed setting.',
        category: 'restaurant', image: getImageUrl('1551183053866-5433a0276632'), fallbackSrc: getFallback('restaurant'),
        tags: ['Michelin', 'Creative', 'Tapas'], localScore: 9.6, priceLevel: '$$$$', district: 'Poble Sec',
        vibeTags: ['Theatrical', 'Lively'], coordinates: { lat: 41.3756, lng: 2.1601 }, recommendationTags: ['Foodie Explorer'],
        bestVisitingHours: '20:00 - 23:00', isQuietNow: false, trending: true, localTip: 'The liquid olives are legendary.'
    },
    {
        id: 'r7', title: 'Paco Meralgo',
        description: 'High-quality, traditional tapas served at high tables in a bustling, authentic atmosphere.',
        category: 'restaurant', image: getImageUrl('1511690655022-0d601cf4f369'), fallbackSrc: getFallback('restaurant'),
        tags: ['Traditional', 'Seafood'], localScore: 9.3, priceLevel: '$$$', district: 'Eixample',
        vibeTags: ['Authentic', 'Bustling'], coordinates: { lat: 41.3891, lng: 2.1501 }, recommendationTags: ['Local Lifestyle Explorer', 'Foodie Explorer'],
        bestVisitingHours: '14:00 - 16:00', isQuietNow: false, trending: false, localTip: 'Order the razor clams and pan con tomate.'
    },
    {
        id: 'r8', title: 'Can Culleretes',
        description: 'The oldest restaurant in Barcelona, established in 1786. Traditional Catalan cuisine.',
        category: 'restaurant', image: getImageUrl('1550966871-3ed3cdb5ed0c'), fallbackSrc: getFallback('restaurant'),
        tags: ['Historic', 'Catalan', 'Traditional'], localScore: 8.8, priceLevel: '$$', district: 'Gothic Quarter',
        vibeTags: ['Classic', 'Cozy'], coordinates: { lat: 41.3813, lng: 2.1747 }, recommendationTags: ['Culture Lover'],
        bestVisitingHours: '13:30 - 15:30', isQuietNow: true, trending: false, localTip: 'Try the wild boar stew.'
    },
    {
        id: 'r9', title: 'Kibuka',
        description: 'Excellent and creative sushi with Brazilian influences in the heart of Gràcia.',
        category: 'restaurant', image: getImageUrl('1579871494447-08e1ef38950c'), fallbackSrc: getFallback('restaurant'),
        tags: ['Sushi', 'Fusion', 'Casual'], localScore: 9.0, priceLevel: '$$', district: 'Gràcia',
        vibeTags: ['Hip', 'Casual'], coordinates: { lat: 41.4022, lng: 2.1583 }, recommendationTags: ['Local Lifestyle Explorer'],
        bestVisitingHours: '21:00 - 23:00', isQuietNow: false, trending: false, localTip: 'They don\'t take reservations, so arrive early.'
    },
    {
        id: 'r10', title: 'Cervecería Catalana',
        description: 'A legendary spot for classic tapas. Always packed, vibrant, and delicious.',
        category: 'restaurant', image: getImageUrl('1543822165-dbd0877ddb22'), fallbackSrc: getFallback('restaurant'),
        tags: ['Tapas', 'Classic', 'Busy'], localScore: 9.4, priceLevel: '$$', district: 'Eixample',
        vibeTags: ['Energetic', 'Classic'], coordinates: { lat: 41.3923, lng: 2.1610 }, recommendationTags: ['Foodie Explorer'],
        bestVisitingHours: '19:00 - 20:30', isQuietNow: false, trending: true, localTip: 'Go right before Spanish dinner time (around 7:30 PM) to get a table.'
    },

    // --- CAFES (10) ---
    {
        id: 'c1', title: 'Satan\'s Coffee Corner',
        description: 'Pioneers of specialty coffee in Barcelona. A tucked-away local favorite in the Gothic Quarter.',
        category: 'cafe', image: getImageUrl('1497935586351-b67a49e012bf'), fallbackSrc: getFallback('cafe'),
        tags: ['Coffee', 'Breakfast', 'Hip'], localScore: 9.5, priceLevel: '$$', district: 'Gothic Quarter',
        vibeTags: ['Local lifestyle', 'Chill'], coordinates: { lat: 41.3824, lng: 2.1764 }, recommendationTags: ['Foodie Explorer'],
        bestVisitingHours: '09:00 - 12:00', isQuietNow: false, trending: true, editorialCollection: 'Best Coffee Shops', localTip: 'No decaf, no wifi, just great coffee.'
    },
    {
        id: 'c2', title: 'Nomad Coffee Lab',
        description: 'A minimalist oasis for true coffee purists. Roasting some of the best beans in the entire city.',
        category: 'cafe', image: getImageUrl('1442512595331-e89e73853f31'), fallbackSrc: getFallback('cafe'),
        tags: ['Specialty Coffee', 'Minimalist'], localScore: 9.6, priceLevel: '$$', district: 'El Born',
        vibeTags: ['Aesthetic', 'Quiet'], coordinates: { lat: 41.3892, lng: 2.1763 }, recommendationTags: ['Foodie Explorer'],
        bestVisitingHours: '10:00 - 15:00', isQuietNow: true, trending: false, localTip: 'Ask the barista for their current favorite pour-over.'
    },
    {
        id: 'c3', title: 'Brunch & Cake',
        description: 'Famous for extravagant, highly photogenic brunch dishes served in a bright, beautifully decorated space.',
        category: 'cafe', image: getImageUrl('1484723091782-42ed45b438ea'), fallbackSrc: getFallback('cafe'),
        tags: ['Brunch', 'Aesthetic', 'Sweet'], localScore: 8.7, priceLevel: '$$', district: 'Eixample',
        vibeTags: ['Social', 'Vibrant'], coordinates: { lat: 41.3893, lng: 2.1611 }, recommendationTags: ['Party Traveler'],
        bestVisitingHours: '11:00 - 14:00', isQuietNow: false, trending: true, editorialCollection: 'Instagrammable Spots', localTip: 'Portions are huge, consider sharing.'
    },
    {
        id: 'c4', title: 'Syra Coffee',
        description: 'A tiny, beautifully designed takeaway coffee window offering exquisite single-origin blends.',
        category: 'cafe', image: getImageUrl('1509042239860-f550ce710b93'), fallbackSrc: getFallback('cafe'),
        tags: ['Takeaway', 'Quick', 'Specialty'], localScore: 9.2, priceLevel: '$', district: 'Gràcia',
        vibeTags: ['Local lifestyle', 'Fast'], coordinates: { lat: 41.4011, lng: 2.1581 }, recommendationTags: ['Hidden Gem Hunter'],
        bestVisitingHours: '08:00 - 10:00', isQuietNow: true, trending: false, localTip: 'Grab a coffee and walk around the beautiful streets of Gràcia.'
    },
    {
        id: 'c5', title: 'Morrow Coffee',
        description: 'A bright, spacious café perfect for digital nomads, serving excellent coffee right near Plaza Espanya.',
        category: 'cafe', image: getImageUrl('1554118811-1e0d58224f24'), fallbackSrc: getFallback('cafe'),
        tags: ['Laptop Friendly', 'Pastries', 'Bright'], localScore: 9.0, priceLevel: '$$', district: 'Sants',
        vibeTags: ['Productive', 'Chill'], coordinates: { lat: 41.3758, lng: 2.1511 }, recommendationTags: ['Relaxed'],
        bestVisitingHours: '09:00 - 13:00', isQuietNow: true, trending: false, localTip: 'Great spot to work for a few hours.'
    },
    {
        id: 'c6', title: 'Hidden Café Barcelona',
        description: 'A cozy spot serving matcha, specialty coffee, and healthy bowls in Les Corts.',
        category: 'cafe', image: getImageUrl('1525610553991-2bede1a236e2'), fallbackSrc: getFallback('cafe'),
        tags: ['Matcha', 'Healthy', 'Cozy'], localScore: 9.1, priceLevel: '$$', district: 'Les Corts',
        vibeTags: ['Healthy', 'Quiet'], coordinates: { lat: 41.3855, lng: 2.1332 }, recommendationTags: ['Relaxed'],
        bestVisitingHours: '10:00 - 12:00', isQuietNow: true, trending: false, localTip: 'Their matcha latte is highly rated.'
    },
    {
        id: 'c7', title: 'Three Marks Coffee',
        description: 'Industrial-chic espresso bar located in the up-and-coming Fort Pienc neighborhood.',
        category: 'cafe', image: getImageUrl('1600093463592-8e36ae95ef56'), fallbackSrc: getFallback('cafe'),
        tags: ['Minimalist', 'Specialty', 'Design'], localScore: 9.3, priceLevel: '$$', district: 'Fort Pienc',
        vibeTags: ['Aesthetic', 'Modern'], coordinates: { lat: 41.3989, lng: 2.1812 }, recommendationTags: ['Local Lifestyle Explorer'],
        bestVisitingHours: '09:30 - 11:30', isQuietNow: false, trending: true, localTip: 'Great upstairs seating area for reading.'
    },
    {
        id: 'c8', title: 'Café Cometa',
        description: 'A bright, colorful café on the vibrant Carrer del Parlament. Famous for fresh juices and cakes.',
        category: 'cafe', image: getImageUrl('1520696956627-99ed8a8349cb'), fallbackSrc: getFallback('cafe'),
        tags: ['Juices', 'Cakes', 'Colorful'], localScore: 8.9, priceLevel: '$$', district: 'Sant Antoni',
        vibeTags: ['Cute', 'Social'], coordinates: { lat: 41.3768, lng: 2.1614 }, recommendationTags: ['Relaxed'],
        bestVisitingHours: '16:00 - 18:00', isQuietNow: false, trending: false, localTip: 'Perfect for an afternoon cake break.'
    },
    {
        id: 'c9', title: 'Nømad Radio',
        description: 'A tiny spin-off of Nomad Coffee with a cool radio station vibe and incredible brews.',
        category: 'cafe', image: getImageUrl('1495474472205-162847d15532'), fallbackSrc: getFallback('cafe'),
        tags: ['Takeaway', 'Music', 'Hip'], localScore: 9.2, priceLevel: '$$', district: 'Poblenou',
        vibeTags: ['Alternative', 'Local'], coordinates: { lat: 41.4011, lng: 2.1966 }, recommendationTags: ['Local Lifestyle Explorer'],
        bestVisitingHours: '10:00 - 14:00', isQuietNow: true, trending: false, localTip: 'Grab a flat white before heading to the beach.'
    },
    {
        id: 'c10', title: 'Dalston Coffee',
        description: 'Small but mighty specialty coffee shop in El Raval with a London-inspired edge.',
        category: 'cafe', image: getImageUrl('1497935586351-b67a49e012bf'), fallbackSrc: getFallback('cafe'),
        tags: ['Specialty', 'Tiny', 'Urban'], localScore: 9.4, priceLevel: '$', district: 'Raval',
        vibeTags: ['Urban', 'Fast'], coordinates: { lat: 41.3821, lng: 2.1691 }, recommendationTags: ['Hidden Gem Hunter'],
        bestVisitingHours: '08:30 - 11:00', isQuietNow: false, trending: true, localTip: 'Best flat white in the Raval neighborhood.'
    },

    // --- BEACHES (10) ---
    {
        id: 'b1', title: 'Bogatell Beach',
        description: 'A cleaner, slightly quieter alternative to Barceloneta. Popular for volleyball.',
        category: 'beach', image: getImageUrl('1518335440626-4ee8fb827376'), fallbackSrc: getFallback('beach'),
        tags: ['Beach', 'Sports', 'Chiringuitos'], localScore: 8.8, priceLevel: '$', district: 'Poblenou',
        vibeTags: ['Energetic', 'Local lifestyle'], coordinates: { lat: 41.3934, lng: 2.2045 }, recommendationTags: ['Beach Lover'],
        bestVisitingHours: '10:00 - 16:00', isQuietNow: false, trending: true, editorialCollection: 'Sun & Sand', localTip: 'Great beach volleyball courts here.'
    },
    {
        id: 'b2', title: 'Ocata Beach',
        description: 'Located just outside Barcelona, offering wide, flat, and quiet golden sands.',
        category: 'beach', image: getImageUrl('1596414995743-1579b18361b7'), fallbackSrc: getFallback('beach'),
        tags: ['Beach', 'Quiet', 'Day Trip'], localScore: 9.3, priceLevel: '$', district: 'El Masnou',
        vibeTags: ['Chill', 'Relaxed'], coordinates: { lat: 41.4789, lng: 2.3160 }, recommendationTags: ['Beach Lover', 'Hidden Gem Hunter'],
        bestVisitingHours: '11:00 - 18:00', isQuietNow: true, trending: false, localTip: 'Take the R1 train, it drops you right on the sand.'
    },
    {
        id: 'b3', title: 'Nova Icaria',
        description: 'Perfect for a late afternoon swim followed by cocktails at a beachside chiringuito.',
        category: 'beach', image: getImageUrl('1507525428034-b723cf961d3e'), fallbackSrc: getFallback('beach'),
        tags: ['Sunset', 'Cocktails', 'Social'], localScore: 8.5, priceLevel: '$$', district: 'Vila Olímpica',
        vibeTags: ['Social', 'Vibrant'], coordinates: { lat: 41.3900, lng: 2.1985 }, recommendationTags: ['Beach Lover', 'Party Traveler'],
        bestVisitingHours: '17:00 - 21:00', isQuietNow: false, trending: true, sunsetTime: '20:30', localTip: 'Great spot for sunset drinks.'
    },
    {
        id: 'b4', title: 'Garraf Beach',
        description: 'A stunning cove dotted with charming green and white fishermen\'s huts.',
        category: 'beach', image: getImageUrl('1618843479313-40f8afb4b4d8'), fallbackSrc: getFallback('beach'),
        tags: ['Scenic', 'Day Trip', 'Aesthetic'], localScore: 9.6, priceLevel: '$$', district: 'Garraf',
        vibeTags: ['Romantic', 'Relaxed'], coordinates: { lat: 41.2536, lng: 1.9015 }, recommendationTags: ['Beach Lover', 'Romantic'],
        bestVisitingHours: '09:00 - 15:00', isQuietNow: true, trending: false, editorialCollection: 'Coastal Escapes', localTip: 'Eat at the restaurant overlooking the cove.'
    },
    {
        id: 'b5', title: 'Barceloneta Beach',
        description: 'The iconic, bustling heart of Barcelona\'s coastline. Vibrant, loud, and fun.',
        category: 'beach', image: getImageUrl('1563806718-d7ba37a1f26d'), fallbackSrc: getFallback('beach'),
        tags: ['Iconic', 'Bustling', 'Surfing'], localScore: 8.0, priceLevel: '$', district: 'Barceloneta',
        vibeTags: ['Energetic', 'Social'], coordinates: { lat: 41.3784, lng: 2.1925 }, recommendationTags: ['Party Traveler', 'Beach Lover'],
        bestVisitingHours: '12:00 - 18:00', isQuietNow: false, trending: true, localTip: 'Keep an eye on your belongings here.'
    },
    {
        id: 'b6', title: 'Mar Bella Beach',
        description: 'Known for its youthful vibe, water sports, and a designated nudist section.',
        category: 'beach', image: getImageUrl('1507525428034-b723cf961d3e'), fallbackSrc: getFallback('beach'),
        tags: ['Watersports', 'Youthful', 'Nudist'], localScore: 8.9, priceLevel: '$', district: 'Poblenou',
        vibeTags: ['Free', 'Active'], coordinates: { lat: 41.3996, lng: 2.2104 }, recommendationTags: ['Beach Lover'],
        bestVisitingHours: '14:00 - 19:00', isQuietNow: false, trending: false, localTip: 'Rent a paddleboard at the nautical base.'
    },
    {
        id: 'b7', title: 'Sitges Beach (San Sebastian)',
        description: 'A beautiful, family-friendly beach in the charming coastal town of Sitges.',
        category: 'beach', image: getImageUrl('1562095241-8c67ceef2d62'), fallbackSrc: getFallback('beach'),
        tags: ['Day Trip', 'Picturesque', 'Gay Friendly'], localScore: 9.4, priceLevel: '$$', district: 'Sitges',
        vibeTags: ['Charming', 'Social'], coordinates: { lat: 41.2355, lng: 1.8124 }, recommendationTags: ['Beach Lover', 'Culture Lover'],
        bestVisitingHours: '11:00 - 17:00', isQuietNow: false, trending: true, localTip: 'Wander the old town of Sitges after your swim.'
    },
    {
        id: 'b8', title: 'Nova Mar Bella',
        description: 'A quieter, more relaxed beach preferred by locals from the Sant Martí district.',
        category: 'beach', image: getImageUrl('1518335440626-4ee8fb827376'), fallbackSrc: getFallback('beach'),
        tags: ['Quiet', 'Local', 'Clean'], localScore: 8.6, priceLevel: '$', district: 'Sant Martí',
        vibeTags: ['Relaxed', 'Quiet'], coordinates: { lat: 41.4035, lng: 2.2162 }, recommendationTags: ['Beach Lover', 'Relaxed'],
        bestVisitingHours: '10:00 - 15:00', isQuietNow: true, trending: false, localTip: 'Great spot for a quiet read.'
    },
    {
        id: 'b9', title: 'Castelldefels Beach',
        description: 'A massive, 5km long wide sandy beach popular with kite surfers.',
        category: 'beach', image: getImageUrl('1596414995743-1579b18361b7'), fallbackSrc: getFallback('beach'),
        tags: ['Vast', 'Kite Surfing', 'Day Trip'], localScore: 9.1, priceLevel: '$', district: 'Castelldefels',
        vibeTags: ['Active', 'Spacious'], coordinates: { lat: 41.2644, lng: 1.9961 }, recommendationTags: ['Beach Lover'],
        bestVisitingHours: '12:00 - 18:00', isQuietNow: false, trending: false, localTip: 'Windy in the afternoons, perfect for sports.'
    },
    {
        id: 'b10', title: 'Somorrostro Beach',
        description: 'Close to the nightlife clubs, this beach is vibrant and full of energy all day.',
        category: 'beach', image: getImageUrl('1563806718-d7ba37a1f26d'), fallbackSrc: getFallback('beach'),
        tags: ['Nightlife', 'Central', 'Busy'], localScore: 8.2, priceLevel: '$$', district: 'Barceloneta',
        vibeTags: ['Party', 'Loud'], coordinates: { lat: 41.3831, lng: 2.1963 }, recommendationTags: ['Party Traveler'],
        bestVisitingHours: '15:00 - 20:00', isQuietNow: false, trending: true, localTip: 'Transition smoothly from beach to the clubs behind it.'
    },

    // --- ROOFTOPS (10) ---
    {
        id: 'rt1', title: 'Ayre Hotel Rosellón Rooftop',
        description: 'Offers arguably the most spectacular, unobstructed view of the Sagrada Familia.',
        category: 'rooftop', image: getImageUrl('1534008897995-27a23e859048'), fallbackSrc: getFallback('rooftop'),
        tags: ['Cocktails', 'Views', 'Sunset'], localScore: 9.4, priceLevel: '$$$', district: 'Eixample',
        vibeTags: ['Romantic', 'Chill'], coordinates: { lat: 41.4052, lng: 2.1731 }, recommendationTags: ['Luxury Traveler', 'Romantic'],
        bestVisitingHours: '18:00 - 21:00', isQuietNow: false, trending: true, sunsetTime: '20:15', editorialCollection: 'Best Sunset Spots', localTip: 'You must book this online in advance.'
    },
    {
        id: 'rt2', title: 'La Isabela at Hotel 1898',
        description: 'An elegant oasis above Las Ramblas. Enjoy luxurious lounging beds and 360-degree views.',
        category: 'rooftop', image: getImageUrl('1564227506-69eb858a7da0'), fallbackSrc: getFallback('rooftop'),
        tags: ['Luxury', 'Pool', 'Tapas'], localScore: 9.1, priceLevel: '$$$$', district: 'Gothic Quarter',
        vibeTags: ['Luxury', 'Relaxed'], coordinates: { lat: 41.3837, lng: 2.1706 }, recommendationTags: ['Luxury Traveler'],
        bestVisitingHours: '17:00 - 20:00', isQuietNow: true, trending: false, localTip: 'Great escape from the crazy Ramblas below.'
    },
    {
        id: 'rt3', title: 'Skybar at Grand Hotel Central',
        description: 'Featuring one of the most famous infinity pools in Barcelona.',
        category: 'rooftop', image: getImageUrl('1580223743594-5510651662fb'), fallbackSrc: getFallback('rooftop'),
        tags: ['Infinity Pool', 'Exclusive', 'DJ'], localScore: 9.5, priceLevel: '$$$$', district: 'El Born',
        vibeTags: ['Luxury', 'Energetic'], coordinates: { lat: 41.3854, lng: 2.1764 }, recommendationTags: ['Luxury Traveler', 'Party Traveler'],
        bestVisitingHours: '20:00 - 01:00', isQuietNow: false, trending: true, editorialCollection: 'Iconic Barcelona', localTip: 'Only open to non-guests after 8PM.'
    },
    {
        id: 'rt4', title: 'Terrat at Mandarin Oriental',
        description: 'Peruvian gastronomy by Gastón Acurio served with stunning views of Passeig de Gràcia.',
        category: 'rooftop', image: getImageUrl('1550005896-1c80126da361'), fallbackSrc: getFallback('rooftop'),
        tags: ['Fine Dining', 'Luxury', 'Views'], localScore: 9.7, priceLevel: '$$$$', district: 'Eixample',
        vibeTags: ['Sophisticated', 'Exclusive'], coordinates: { lat: 41.3908, lng: 2.1643 }, recommendationTags: ['Luxury Traveler'],
        bestVisitingHours: '19:00 - 23:00', isQuietNow: false, trending: true, localTip: 'Try the ceviche, it is spectacular.'
    },
    {
        id: 'rt5', title: 'Pulitzer Terrace',
        description: 'Vibrant rooftop known for its live music sessions, DJ sets, and great local vibe.',
        category: 'rooftop', image: getImageUrl('1561005891-236b281f62d9'), fallbackSrc: getFallback('rooftop'),
        tags: ['Live Music', 'Trendy', 'Social'], localScore: 9.0, priceLevel: '$$', district: 'Eixample',
        vibeTags: ['Vibrant', 'Social'], coordinates: { lat: 41.3861, lng: 2.1678 }, recommendationTags: ['Party Traveler', 'Local Lifestyle Explorer'],
        bestVisitingHours: '18:00 - 22:00', isQuietNow: false, trending: true, localTip: 'Check their schedule for the live music nights.'
    },
    {
        id: 'rt6', title: 'Azimuth Rooftop Bar',
        description: 'Located atop the Almanac hotel, offering a stylish setting and creative cocktails.',
        category: 'rooftop', image: getImageUrl('1534008897995-27a23e859048'), fallbackSrc: getFallback('rooftop'),
        tags: ['Chic', 'Cocktails', 'Lounge'], localScore: 9.2, priceLevel: '$$$', district: 'Eixample',
        vibeTags: ['Elegant', 'Relaxed'], coordinates: { lat: 41.3915, lng: 2.1691 }, recommendationTags: ['Luxury Traveler'],
        bestVisitingHours: '17:00 - 21:00', isQuietNow: true, trending: false, localTip: 'Has a great glass-enclosed area if it gets windy.'
    },
    {
        id: 'rt7', title: 'Rooftop at Sir Victor',
        description: 'Overlooking Casa Milà, this stylish roof features great Mediterranean food and cocktails.',
        category: 'rooftop', image: getImageUrl('1580223743594-5510651662fb'), fallbackSrc: getFallback('rooftop'),
        tags: ['Views', 'Trendy', 'Food'], localScore: 9.1, priceLevel: '$$$', district: 'Eixample',
        vibeTags: ['Stylish', 'Social'], coordinates: { lat: 41.3965, lng: 2.1604 }, recommendationTags: ['Luxury Traveler', 'Foodie Explorer'],
        bestVisitingHours: '13:00 - 17:00', isQuietNow: false, trending: false, localTip: 'Great spot for a sunny rooftop lunch.'
    },
    {
        id: 'rt8', title: 'Eclipse at W Hotel',
        description: 'Not technically a rooftop, but a 26th-floor lounge with panoramic ocean and city views.',
        category: 'rooftop', image: getImageUrl('1514362545857-3bc16c4c7d1b'), fallbackSrc: getFallback('rooftop'),
        tags: ['Club', 'Views', 'Glamorous'], localScore: 8.8, priceLevel: '$$$$', district: 'Barceloneta',
        vibeTags: ['Party', 'Exclusive'], coordinates: { lat: 41.3686, lng: 2.1899 }, recommendationTags: ['Party Traveler', 'Luxury Traveler'],
        bestVisitingHours: '23:00 - 03:00', isQuietNow: false, trending: true, localTip: 'Strict dress code applies.'
    },
    {
        id: 'rt9', title: 'Robadora Rooftop',
        description: 'A lesser-known rooftop in the Raval with a gritty, authentic, yet comfortable vibe.',
        category: 'rooftop', image: getImageUrl('1550005896-1c80126da361'), fallbackSrc: getFallback('rooftop'),
        tags: ['Local', 'Casual', 'Hidden'], localScore: 8.9, priceLevel: '$$', district: 'Raval',
        vibeTags: ['Alternative', 'Chill'], coordinates: { lat: 41.3794, lng: 2.1693 }, recommendationTags: ['Hidden Gem Hunter'],
        bestVisitingHours: '19:00 - 23:00', isQuietNow: true, trending: false, localTip: 'Cheaper drinks than most hotel rooftops.'
    },
    {
        id: 'rt10', title: 'La Dolce Vitae at Majestic',
        description: 'One of the most classic and elegant rooftops in the city with sweeping views.',
        category: 'rooftop', image: getImageUrl('1564227506-69eb858a7da0'), fallbackSrc: getFallback('rooftop'),
        tags: ['Classic', 'Luxury', 'Champagne'], localScore: 9.3, priceLevel: '$$$$', district: 'Eixample',
        vibeTags: ['Elegant', 'Sophisticated'], coordinates: { lat: 41.3917, lng: 2.1633 }, recommendationTags: ['Luxury Traveler', 'Romantic'],
        bestVisitingHours: '18:00 - 21:00', isQuietNow: false, trending: true, sunsetTime: '20:15', localTip: 'Perfect place to watch the sunset with a glass of Cava.'
    },

    // --- HIDDEN GEMS (10) ---
    {
        id: 'hg1', title: 'Bunkers del Carmel',
        description: 'Former anti-aircraft bunkers offering the most raw, panoramic, 360-degree views of the entire city.',
        category: 'hidden-gem', image: getImageUrl('1549449830-ecb8b3b3ba98'), fallbackSrc: getFallback('hidden-gem'),
        tags: ['Viewpoint', 'Sunset', 'Free'], localScore: 9.9, priceLevel: '$', district: 'Carmel',
        vibeTags: ['Chill', 'Romantic', 'Adventurous'], coordinates: { lat: 41.4190, lng: 2.1616 }, recommendationTags: ['Hidden Gem Hunter', 'Romantic'],
        bestVisitingHours: '18:00 - 20:30', isQuietNow: false, trending: true, sunsetTime: '20:15', editorialCollection: 'Best Sunset Spots', localTip: 'Bring your own drinks and snacks, there are no shops up there.'
    },
    {
        id: 'hg2', title: 'Parc del Laberint d\'Horta',
        description: 'The oldest conserved garden in the city, featuring a beautiful neoclassical maze.',
        category: 'hidden-gem', image: getImageUrl('1627960320499-28ec3a0c5bd6'), fallbackSrc: getFallback('hidden-gem'),
        tags: ['Nature', 'Quiet', 'Romantic'], localScore: 9.0, priceLevel: '$', district: 'Horta',
        vibeTags: ['Relaxed', 'Romantic'], coordinates: { lat: 41.4397, lng: 2.1466 }, recommendationTags: ['Hidden Gem Hunter'],
        bestVisitingHours: '15:00 - 17:00', isQuietNow: true, trending: false, localTip: 'Free entry on Wednesdays and Sundays.'
    },
    {
        id: 'hg3', title: 'El Born Cultural Centre',
        description: 'A stunning cast-iron market building preserving an archeological site of 1700s Barcelona.',
        category: 'hidden-gem', image: getImageUrl('1555881400-74d7acaacd8b'), fallbackSrc: getFallback('hidden-gem'),
        tags: ['History', 'Architecture', 'Free'], localScore: 8.8, priceLevel: '$', district: 'El Born',
        vibeTags: ['Cultural', 'Quiet'], coordinates: { lat: 41.3854, lng: 2.1834 }, recommendationTags: ['Culture Lover'],
        bestVisitingHours: '10:00 - 14:00', isQuietNow: true, trending: false, localTip: 'You can see the ruins for free from the balconies inside.'
    },
    {
        id: 'hg4', title: 'Carrer de Blai',
        description: 'The famous pincho street of Poble Sec. A vibrant pedestrian street packed with cheap tapas bars.',
        category: 'hidden-gem', image: getImageUrl('1551044733-5c8e31005eb5'), fallbackSrc: getFallback('hidden-gem'),
        tags: ['Food', 'Tapas', 'Cheap'], localScore: 9.3, priceLevel: '$', district: 'Poble Sec',
        vibeTags: ['Energetic', 'Social'], coordinates: { lat: 41.3746, lng: 2.1643 }, recommendationTags: ['Foodie Explorer', 'Local Lifestyle Explorer'],
        bestVisitingHours: '19:00 - 23:00', isQuietNow: false, trending: true, editorialCollection: 'Local Favorites', localTip: 'Don\'t stay in one bar; have one pincho and move to the next.'
    },
    {
        id: 'hg5', title: 'Hospital de Sant Pau',
        description: 'The largest Art Nouveau site in the world. Stunning mosaic domes often missed by tourists.',
        category: 'hidden-gem', image: getImageUrl('1681285217424-df357ef6d628'), fallbackSrc: getFallback('hidden-gem'),
        tags: ['Architecture', 'Quiet', 'Modernisme'], localScore: 9.4, priceLevel: '$$', district: 'Eixample',
        vibeTags: ['Cultural', 'Aesthetic'], coordinates: { lat: 41.4118, lng: 2.1743 }, recommendationTags: ['Culture Lover', 'Hidden Gem Hunter'],
        bestVisitingHours: '10:00 - 13:00', isQuietNow: true, trending: false, localTip: 'Walk up the beautiful Avinguda de Gaudí from the Sagrada Familia to get here.'
    },
    {
        id: 'hg6', title: 'Jardins de Mossèn Costa i Llobera',
        description: 'A huge, quiet cactus garden on Montjuïc with exotic species and views of the port.',
        category: 'hidden-gem', image: getImageUrl('1508624210492-d98c7674ed4e'), fallbackSrc: getFallback('hidden-gem'),
        tags: ['Nature', 'Cactus', 'Views'], localScore: 8.9, priceLevel: '$', district: 'Sants-Montjuïc',
        vibeTags: ['Quiet', 'Aesthetic'], coordinates: { lat: 41.3697, lng: 2.1706 }, recommendationTags: ['Hidden Gem Hunter', 'Relaxed'],
        bestVisitingHours: '16:00 - 18:00', isQuietNow: true, trending: false, localTip: 'Great spot for unique, aesthetic photography.'
    },
    {
        id: 'hg7', title: 'Palau Macaya',
        description: 'A beautiful Modernista palace with a stunning white courtyard that is completely free to enter.',
        category: 'hidden-gem', image: getImageUrl('1558284564-218a5ce2e2ff'), fallbackSrc: getFallback('hidden-gem'),
        tags: ['Architecture', 'Free', 'Courtyard'], localScore: 8.7, priceLevel: '$', district: 'Eixample',
        vibeTags: ['Quiet', 'Cultural'], coordinates: { lat: 41.3986, lng: 2.1697 }, recommendationTags: ['Culture Lover'],
        bestVisitingHours: '11:00 - 13:00', isQuietNow: true, trending: false, localTip: 'Check the basement for small free art exhibitions.'
    },
    {
        id: 'hg8', title: 'Casa Vicens',
        description: 'Gaudí\'s first house. Colorful, Moorish-inspired, and much less crowded than his other works.',
        category: 'hidden-gem', image: getImageUrl('1561580979-9944690ea88d'), fallbackSrc: getFallback('hidden-gem'),
        tags: ['Gaudí', 'Architecture', 'Colorful'], localScore: 9.1, priceLevel: '$$', district: 'Gràcia',
        vibeTags: ['Cultural', 'Aesthetic'], coordinates: { lat: 41.4038, lng: 2.1507 }, recommendationTags: ['Culture Lover', 'Hidden Gem Hunter'],
        bestVisitingHours: '10:00 - 12:00', isQuietNow: true, trending: false, localTip: 'The cafe in the garden serves excellent coffee.'
    },
    {
        id: 'hg9', title: 'Antic Teatre',
        description: 'An old theatre with a massive, fairy-light lit courtyard perfect for cheap beers.',
        category: 'hidden-gem', image: getImageUrl('1551044733-5c8e31005eb5'), fallbackSrc: getFallback('hidden-gem'),
        tags: ['Courtyard', 'Drinks', 'Bohemian'], localScore: 9.3, priceLevel: '$', district: 'El Born',
        vibeTags: ['Bohemian', 'Social'], coordinates: { lat: 41.3872, lng: 2.1764 }, recommendationTags: ['Local Lifestyle Explorer', 'Party Traveler'],
        bestVisitingHours: '18:00 - 21:00', isQuietNow: false, trending: true, localTip: 'Finding the entrance door can be tricky; it looks like a normal apartment door.'
    },
    {
        id: 'hg10', title: 'Mirador Torre Glòries',
        description: 'The newly opened 360-degree observation deck inside the iconic bullet-shaped building.',
        category: 'hidden-gem', image: getImageUrl('1534008897995-27a23e859048'), fallbackSrc: getFallback('hidden-gem'),
        tags: ['Viewpoint', 'Modern', 'Interactive'], localScore: 9.0, priceLevel: '$$', district: 'Poblenou',
        vibeTags: ['Awe-inspiring', 'Modern'], coordinates: { lat: 41.4034, lng: 2.1895 }, recommendationTags: ['Culture Lover'],
        bestVisitingHours: '19:00 - 21:00', isQuietNow: false, trending: true, sunsetTime: '20:15', localTip: 'Climb the Cloud Cities interactive art installation at the top.'
    },

    // --- NIGHTLIFE (10) ---
    {
        id: 'n1', title: 'Paradiso',
        description: 'A speakeasy hidden behind a pastrami shop. Incredible mixology and theater.',
        category: 'nightlife', image: getImageUrl('1514362545857-3bc16c4c7d1b'), fallbackSrc: getFallback('nightlife'),
        tags: ['Cocktails', 'Speakeasy', 'World Class'], localScore: 9.8, priceLevel: '$$$', district: 'El Born',
        vibeTags: ['Social', 'Energetic', 'Luxury'], coordinates: { lat: 41.3840, lng: 2.1831 }, recommendationTags: ['Party Traveler', 'Luxury Traveler'],
        bestVisitingHours: '22:00 - 02:00', isQuietNow: false, trending: true, editorialCollection: 'Nightlife', localTip: 'Expect a queue, get there early.'
    },
    {
        id: 'n2', title: 'Razzmatazz',
        description: 'A massive, industrial multi-space club offering five different rooms with indie rock, techno, and pop.',
        category: 'nightlife', image: getImageUrl('1566737236500-c8ac43014a67'), fallbackSrc: getFallback('nightlife'),
        tags: ['Club', 'Live Music', 'Huge'], localScore: 8.5, priceLevel: '$$', district: 'Poblenou',
        vibeTags: ['Wild', 'Energetic'], coordinates: { lat: 41.3976, lng: 2.1911 }, recommendationTags: ['Party Traveler'],
        bestVisitingHours: '01:00 - 06:00', isQuietNow: true, trending: true, localTip: 'Don\'t lose your friends, the place is a labyrinth.'
    },
    {
        id: 'n3', title: 'Dr. Stravinsky',
        description: 'An alchemy-themed cocktail bar in El Born. Distilling and infusing their own spirits.',
        category: 'nightlife', image: getImageUrl('1574096079513-d8225ba67711'), fallbackSrc: getFallback('nightlife'),
        tags: ['Mixology', 'Unique', 'Intimate'], localScore: 9.4, priceLevel: '$$$', district: 'El Born',
        vibeTags: ['Mysterious', 'Aesthetic'], coordinates: { lat: 41.3845, lng: 2.1818 }, recommendationTags: ['Foodie Explorer'],
        bestVisitingHours: '21:00 - 01:00', isQuietNow: false, trending: false, localTip: 'Try the Camp Nou cocktail.'
    },
    {
        id: 'n4', title: 'Opium Barcelona',
        description: 'The quintessential beachside club experience. Glamorous crowds and international DJs.',
        category: 'nightlife', image: getImageUrl('1561005891-236b281f62d9'), fallbackSrc: getFallback('nightlife'),
        tags: ['Beach Club', 'VIP', 'EDM'], localScore: 8.2, priceLevel: '$$$$', district: 'Barceloneta',
        vibeTags: ['Luxury', 'Wild', 'Energetic'], coordinates: { lat: 41.3846, lng: 2.1969 }, recommendationTags: ['Party Traveler', 'Luxury Traveler'],
        bestVisitingHours: '00:00 - 05:00', isQuietNow: true, trending: false, localTip: 'Dress code is very strict, dress nicely.'
    },
    {
        id: 'n5', title: 'Sala Apolo',
        description: 'A historic theatre turned into one of the best indie/electronic clubs in the city. Famous for Nasty Mondays.',
        category: 'nightlife', image: getImageUrl('1554559288-0f11d1983eb4'), fallbackSrc: getFallback('nightlife'),
        tags: ['Club', 'Indie', 'Historic'], localScore: 9.1, priceLevel: '$$', district: 'Poble Sec',
        vibeTags: ['Wild', 'Alternative'], coordinates: { lat: 41.3742, lng: 2.1691 }, recommendationTags: ['Party Traveler', 'Local Lifestyle Explorer'],
        bestVisitingHours: '00:00 - 05:00', isQuietNow: false, trending: true, localTip: 'Nasty Mondays is legendary, book tickets online.'
    },
    {
        id: 'n6', title: 'Boca Chica',
        description: 'Opulent, glamorous cocktail bar attached to Boca Grande. The bathroom is famously beautiful.',
        category: 'nightlife', image: getImageUrl('1514362545857-3bc16c4c7d1b'), fallbackSrc: getFallback('nightlife'),
        tags: ['Glamorous', 'Cocktails', 'DJ'], localScore: 9.0, priceLevel: '$$$$', district: 'Eixample',
        vibeTags: ['Luxury', 'Elegant'], coordinates: { lat: 41.3934, lng: 2.1610 }, recommendationTags: ['Luxury Traveler'],
        bestVisitingHours: '23:00 - 02:00', isQuietNow: false, trending: false, localTip: 'The DJ literally plays inside the restrooms.'
    },
    {
        id: 'n7', title: 'Moog',
        description: 'A tiny, dark, and intimate techno club just off Las Ramblas. A purist techno institution.',
        category: 'nightlife', image: getImageUrl('1566737236500-c8ac43014a67'), fallbackSrc: getFallback('nightlife'),
        tags: ['Techno', 'Intimate', 'Underground'], localScore: 8.7, priceLevel: '$$', district: 'Raval',
        vibeTags: ['Underground', 'Dark'], coordinates: { lat: 41.3789, lng: 2.1741 }, recommendationTags: ['Party Traveler'],
        bestVisitingHours: '01:00 - 05:00', isQuietNow: true, trending: false, localTip: 'Open 365 days a year.'
    },
    {
        id: 'n8', title: 'Mariposa Negra',
        description: 'Cocktail bar inspired by the novel "The Shadow of the Wind". 3D-printed custom cocktail glasses.',
        category: 'nightlife', image: getImageUrl('1574096079513-d8225ba67711'), fallbackSrc: getFallback('nightlife'),
        tags: ['Cocktails', 'Themed', 'Creative'], localScore: 9.3, priceLevel: '$$$', district: 'El Born',
        vibeTags: ['Mysterious', 'Aesthetic'], coordinates: { lat: 41.3855, lng: 2.1812 }, recommendationTags: ['Culture Lover', 'Hidden Gem Hunter'],
        bestVisitingHours: '20:00 - 00:00', isQuietNow: false, trending: true, localTip: 'Every drink comes with an elaborate presentation.'
    },
    {
        id: 'n9', title: 'Sutton Club',
        description: 'Exclusive, high-end nightclub in the upper zone frequented by celebrities.',
        category: 'nightlife', image: getImageUrl('1561005891-236b281f62d9'), fallbackSrc: getFallback('nightlife'),
        tags: ['VIP', 'Commercial', 'Exclusive'], localScore: 8.4, priceLevel: '$$$$', district: 'Sarrià-Sant Gervasi',
        vibeTags: ['Luxury', 'Glamorous'], coordinates: { lat: 41.3951, lng: 2.1523 }, recommendationTags: ['Luxury Traveler', 'Party Traveler'],
        bestVisitingHours: '01:00 - 06:00', isQuietNow: false, trending: false, localTip: 'Book a VIP table to avoid the massive lines.'
    },
    {
        id: 'n10', title: 'Macera TallerBar',
        description: 'They make their own artisanal spirits by macerating raw alcohol with fruits and spices.',
        category: 'nightlife', image: getImageUrl('1514362545857-3bc16c4c7d1b'), fallbackSrc: getFallback('nightlife'),
        tags: ['Artisanal', 'Cocktails', 'Hip'], localScore: 9.2, priceLevel: '$$', district: 'Raval',
        vibeTags: ['Alternative', 'Chill'], coordinates: { lat: 41.3811, lng: 2.1688 }, recommendationTags: ['Local Lifestyle Explorer'],
        bestVisitingHours: '22:00 - 02:00', isQuietNow: false, trending: true, localTip: 'Try the strawberry-infused gin.'
    },

    // --- MARKETS (10) ---
    {
        id: 'm1', title: 'Mercat de la Boqueria',
        description: 'The most famous market in Barcelona. A colorful, chaotic feast for the senses.',
        category: 'market', image: getImageUrl('1555881400-74d7acaacd8b'), fallbackSrc: getFallback('market'),
        tags: ['Food', 'Iconic', 'Bustling'], localScore: 8.5, priceLevel: '$$', district: 'Raval',
        vibeTags: ['Energetic', 'Loud'], coordinates: { lat: 41.3818, lng: 2.1716 }, recommendationTags: ['Foodie Explorer'],
        bestVisitingHours: '08:00 - 10:00', isQuietNow: false, trending: true, editorialCollection: 'Iconic Barcelona', localTip: 'Go right at opening to avoid the massive tourist crowds.'
    },
    {
        id: 'm2', title: 'Mercat de Santa Caterina',
        description: 'Recognizable by its undulating, colorful ceramic roof. More authentic and less crowded than Boqueria.',
        category: 'market', image: getImageUrl('1533653112349-f9c2d1b822d3'), fallbackSrc: getFallback('market'),
        tags: ['Architecture', 'Food', 'Local'], localScore: 9.3, priceLevel: '$$', district: 'El Born',
        vibeTags: ['Authentic', 'Vibrant'], coordinates: { lat: 41.3860, lng: 2.1783 }, recommendationTags: ['Local Lifestyle Explorer', 'Foodie Explorer'],
        bestVisitingHours: '10:00 - 13:00', isQuietNow: true, trending: false, localTip: 'Eat at the excellent tapas bar right inside the market.'
    },
    {
        id: 'm3', title: 'Mercat de Sant Antoni',
        description: 'A stunning cross-shaped iron building. Features food, and a Sunday book/coin market.',
        category: 'market', image: getImageUrl('1555881400-74d7acaacd8b'), fallbackSrc: getFallback('market'),
        tags: ['Architecture', 'Books', 'Local'], localScore: 9.5, priceLevel: '$$', district: 'Sant Antoni',
        vibeTags: ['Cultural', 'Local lifestyle'], coordinates: { lat: 41.3785, lng: 2.1623 }, recommendationTags: ['Culture Lover', 'Local Lifestyle Explorer'],
        bestVisitingHours: '09:00 - 14:00', isQuietNow: false, trending: true, localTip: 'Visit on Sunday mornings for the vintage book market.'
    },
    {
        id: 'm4', title: 'Mercat dels Encants',
        description: 'One of Europe\'s oldest flea markets, now housed under a spectacular mirrored canopy.',
        category: 'market', image: getImageUrl('1533653112349-f9c2d1b822d3'), fallbackSrc: getFallback('market'),
        tags: ['Flea Market', 'Vintage', 'Antiques'], localScore: 8.8, priceLevel: '$', district: 'Glòries',
        vibeTags: ['Chaotic', 'Alternative'], coordinates: { lat: 41.4011, lng: 2.1866 }, recommendationTags: ['Hidden Gem Hunter'],
        bestVisitingHours: '09:00 - 12:00', isQuietNow: false, trending: false, localTip: 'The actual auction happens very early on the ground floor.'
    },
    {
        id: 'm5', title: 'Palo Market Fest',
        description: 'A trendy weekend market in Poblenou featuring food trucks, local designers, and live music.',
        category: 'market', image: getImageUrl('1555396273-367ea4eb4db5'), fallbackSrc: getFallback('market'),
        tags: ['Trendy', 'Food Trucks', 'Music'], localScore: 9.2, priceLevel: '$$', district: 'Poblenou',
        vibeTags: ['Hip', 'Social'], coordinates: { lat: 41.3970, lng: 2.2018 }, recommendationTags: ['Local Lifestyle Explorer', 'Party Traveler'],
        bestVisitingHours: '13:00 - 18:00', isQuietNow: false, trending: true, localTip: 'Buy tickets online beforehand, it always sells out.'
    },
    {
        id: 'm6', title: 'Mercat de la Concepció',
        description: 'Known for its beautiful 24-hour flower market attached to a great local food market.',
        category: 'market', image: getImageUrl('1555881400-74d7acaacd8b'), fallbackSrc: getFallback('market'),
        tags: ['Flowers', 'Local', 'Quiet'], localScore: 9.0, priceLevel: '$$', district: 'Eixample',
        vibeTags: ['Aesthetic', 'Relaxed'], coordinates: { lat: 41.3963, lng: 2.1687 }, recommendationTags: ['Relaxed', 'Hidden Gem Hunter'],
        bestVisitingHours: '10:00 - 13:00', isQuietNow: true, trending: false, localTip: 'The flower stalls on the backside are open 24/7.'
    },
    {
        id: 'm7', title: 'Fira de Santa Llúcia',
        description: 'The historic Christmas market held in front of the Cathedral (seasonal).',
        category: 'market', image: getImageUrl('1533653112349-f9c2d1b822d3'), fallbackSrc: getFallback('market'),
        tags: ['Christmas', 'Seasonal', 'Tradition'], localScore: 9.4, priceLevel: '$$', district: 'Gothic Quarter',
        vibeTags: ['Festive', 'Traditional'], coordinates: { lat: 41.3840, lng: 2.1762 }, recommendationTags: ['Culture Lover', 'Family'],
        bestVisitingHours: '18:00 - 21:00', isQuietNow: false, trending: true, localTip: 'Look for the traditional "Caganer" figures.'
    },
    {
        id: 'm8', title: 'Mercat del Ninot',
        description: 'A beautifully renovated market with great tapas bars where they cook what you just bought.',
        category: 'market', image: getImageUrl('1555881400-74d7acaacd8b'), fallbackSrc: getFallback('market'),
        tags: ['Food', 'Modern', 'Tapas'], localScore: 9.1, priceLevel: '$$', district: 'Eixample',
        vibeTags: ['Local lifestyle', 'Foodie'], coordinates: { lat: 41.3888, lng: 2.1553 }, recommendationTags: ['Foodie Explorer'],
        bestVisitingHours: '12:00 - 15:00', isQuietNow: false, trending: false, localTip: 'Have a glass of wine and tapas at one of the central bars.'
    },
    {
        id: 'm9', title: 'Mercat de Galvany',
        description: 'An upscale, elegant market in the wealthy Sarrià-Sant Gervasi district.',
        category: 'market', image: getImageUrl('1533653112349-f9c2d1b822d3'), fallbackSrc: getFallback('market'),
        tags: ['Upscale', 'Gourmet', 'Architecture'], localScore: 8.9, priceLevel: '$$$', district: 'Sarrià-Sant Gervasi',
        vibeTags: ['Elegant', 'Quiet'], coordinates: { lat: 41.3965, lng: 2.1436 }, recommendationTags: ['Luxury Traveler'],
        bestVisitingHours: '10:00 - 13:00', isQuietNow: true, trending: false, localTip: 'Great place to buy high-end charcuterie.'
    },
    {
        id: 'm10', title: 'Flea Market Barcelona',
        description: 'A lively second-hand market held monthly in the Raval.',
        category: 'market', image: getImageUrl('1555396273-367ea4eb4db5'), fallbackSrc: getFallback('market'),
        tags: ['Second Hand', 'Vintage', 'Sustainable'], localScore: 8.7, priceLevel: '$', district: 'Raval',
        vibeTags: ['Alternative', 'Hip'], coordinates: { lat: 41.3780, lng: 2.1711 }, recommendationTags: ['Local Lifestyle Explorer'],
        bestVisitingHours: '11:00 - 15:00', isQuietNow: false, trending: false, localTip: 'Bargaining is expected.'
    },

    // --- VIEWPOINTS (10) ---
    {
        id: 'v1', title: 'Tibidabo',
        description: 'The highest mountain in Barcelona, featuring a retro amusement park and a stunning church.',
        category: 'viewpoint', image: getImageUrl('1549449830-ecb8b3b3ba98'), fallbackSrc: getFallback('viewpoint'),
        tags: ['Panoramic', 'Amusement Park', 'Church'], localScore: 9.5, priceLevel: '$$', district: 'Sarrià-Sant Gervasi',
        vibeTags: ['Awe-inspiring', 'Family'], coordinates: { lat: 41.4225, lng: 2.1186 }, recommendationTags: ['Relaxed', 'Culture Lover'],
        bestVisitingHours: '16:00 - 19:00', isQuietNow: false, trending: true, sunsetTime: '20:15', editorialCollection: 'Iconic Barcelona', localTip: 'Take the romantic blue tram up the mountain.'
    },
    {
        id: 'v2', title: 'Montjuïc Castle',
        description: 'Historic fortress with sweeping views over the commercial port and the sea.',
        category: 'viewpoint', image: getImageUrl('1588612165034-e40b377fc0d4'), fallbackSrc: getFallback('viewpoint'),
        tags: ['Castle', 'Port View', 'History'], localScore: 9.0, priceLevel: '$', district: 'Sants-Montjuïc',
        vibeTags: ['Historical', 'Scenic'], coordinates: { lat: 41.3633, lng: 2.1664 }, recommendationTags: ['Culture Lover'],
        bestVisitingHours: '15:00 - 18:00', isQuietNow: true, trending: false, localTip: 'Walk the perimeter wall for the best ocean views.'
    },
    {
        id: 'v3', title: 'Mirador de l\'Alcalde',
        description: 'A terraced belvedere on Montjuïc with fountains, mosaics, and excellent city views.',
        category: 'viewpoint', image: getImageUrl('1549449830-ecb8b3b3ba98'), fallbackSrc: getFallback('viewpoint'),
        tags: ['Gardens', 'City View', 'Mosaics'], localScore: 8.8, priceLevel: 'Free', district: 'Sants-Montjuïc',
        vibeTags: ['Relaxed', 'Quiet'], coordinates: { lat: 41.3681, lng: 2.1691 }, recommendationTags: ['Hidden Gem Hunter', 'Relaxed'],
        bestVisitingHours: '17:00 - 19:00', isQuietNow: true, trending: false, localTip: 'The floor mosaics made of broken glass and bottles are fascinating.'
    },
    {
        id: 'v4', title: 'Las Arenas Rooftop',
        description: 'A former bullring turned shopping mall with a free 360-degree viewing walkway on the roof.',
        category: 'viewpoint', image: getImageUrl('1534008897995-27a23e859048'), fallbackSrc: getFallback('viewpoint'),
        tags: ['360 View', 'Plaza Espanya', 'Shopping'], localScore: 8.9, priceLevel: 'Free', district: 'Eixample',
        vibeTags: ['Urban', 'Convenient'], coordinates: { lat: 41.3765, lng: 2.1492 }, recommendationTags: ['Local Lifestyle Explorer'],
        bestVisitingHours: '19:00 - 21:00', isQuietNow: false, trending: false, sunsetTime: '20:15', localTip: 'Don\'t pay for the external elevator; go inside and use the escalators for free.'
    },
    {
        id: 'v5', title: 'Columbus Monument (Mirador)',
        description: 'A tiny elevator inside the column takes you to a narrow viewing platform over the port.',
        category: 'viewpoint', image: getImageUrl('1605342410884-21f456fb4890'), fallbackSrc: getFallback('viewpoint'),
        tags: ['Monument', 'Port', 'High'], localScore: 8.2, priceLevel: '$', district: 'Ciutat Vella',
        vibeTags: ['Historic', 'Claustrophobic'], coordinates: { lat: 41.3758, lng: 2.1777 }, recommendationTags: ['Culture Lover'],
        bestVisitingHours: '10:00 - 12:00', isQuietNow: false, trending: false, localTip: 'Not recommended if you are claustrophobic.'
    },
    {
        id: 'v6', title: 'Torre de Collserola',
        description: 'The futuristic telecommunications tower designed by Norman Foster with a massive observation deck.',
        category: 'viewpoint', image: getImageUrl('1549449830-ecb8b3b3ba98'), fallbackSrc: getFallback('viewpoint'),
        tags: ['Architecture', 'Highest View', 'Modern'], localScore: 8.7, priceLevel: '$$', district: 'Sarrià-Sant Gervasi',
        vibeTags: ['Awe-inspiring', 'Modern'], coordinates: { lat: 41.4172, lng: 2.1138 }, recommendationTags: ['Culture Lover'],
        bestVisitingHours: '12:00 - 15:00', isQuietNow: true, trending: false, localTip: 'It is the highest viewpoint you can physically stand on in the city.'
    },
    {
        id: 'v7', title: 'Bunkers del Carmel',
        description: 'The absolute best sunset spot. Raw, 360-degree views of the entire grid of Barcelona.',
        category: 'viewpoint', image: getImageUrl('1549449830-ecb8b3b3ba98'), fallbackSrc: getFallback('viewpoint'),
        tags: ['Sunset', 'Iconic', 'Free'], localScore: 9.9, priceLevel: 'Free', district: 'Carmel',
        vibeTags: ['Chill', 'Social', 'Romantic'], coordinates: { lat: 41.4190, lng: 2.1616 }, recommendationTags: ['Hidden Gem Hunter', 'Romantic'],
        bestVisitingHours: '18:00 - 20:30', isQuietNow: false, trending: true, sunsetTime: '20:15', editorialCollection: 'Best Sunset Spots', localTip: 'Very crowded at sunset, arrive early.'
    },
    {
        id: 'v8', title: 'MNAC Rooftop',
        description: 'The roof of the National Art Museum offers commanding views straight down the Avenida Reina Maria Cristina.',
        category: 'viewpoint', image: getImageUrl('1570081326-cd07df3cf4bc'), fallbackSrc: getFallback('viewpoint'),
        tags: ['Museum', 'Palace', 'Classic'], localScore: 9.1, priceLevel: '$', district: 'Sants-Montjuïc',
        vibeTags: ['Elegant', 'Cultural'], coordinates: { lat: 41.3686, lng: 2.1534 }, recommendationTags: ['Culture Lover', 'Luxury Traveler'],
        bestVisitingHours: '16:00 - 18:00', isQuietNow: true, trending: false, localTip: 'Great place to watch the Magic Fountain show from above.'
    },
    {
        id: 'v9', title: 'Parc del Guinardó',
        description: 'A steeply sloping park with pine forests and incredible, quiet viewpoints.',
        category: 'viewpoint', image: getImageUrl('1627960320499-28ec3a0c5bd6'), fallbackSrc: getFallback('viewpoint'),
        tags: ['Nature', 'Hike', 'Quiet'], localScore: 8.9, priceLevel: 'Free', district: 'Guinardó',
        vibeTags: ['Active', 'Peaceful'], coordinates: { lat: 41.4195, lng: 2.1666 }, recommendationTags: ['Hidden Gem Hunter', 'Relaxed'],
        bestVisitingHours: '09:00 - 12:00', isQuietNow: true, trending: false, localTip: 'Prepare for a steep hike, but the peace is worth it.'
    },
    {
        id: 'v10', title: 'Mirador Torre Glòries',
        description: 'The newly opened 360-degree observation deck inside the iconic bullet-shaped building.',
        category: 'viewpoint', image: getImageUrl('1534008897995-27a23e859048'), fallbackSrc: getFallback('viewpoint'),
        tags: ['Modern', 'Interactive', 'Views'], localScore: 9.0, priceLevel: '$$', district: 'Poblenou',
        vibeTags: ['Modern', 'Aesthetic'], coordinates: { lat: 41.4034, lng: 2.1895 }, recommendationTags: ['Culture Lover'],
        bestVisitingHours: '19:00 - 21:00', isQuietNow: false, trending: true, sunsetTime: '20:15', localTip: 'Go at sunset to see the city light up.'
    },

    // --- ROMANTIC (10) ---
    {
        id: 'rm1', title: 'Jardins de la Tamarita',
        description: 'A secret, enclosed garden with romantic statues, fountains, and lush greenery.',
        category: 'romantic', image: getImageUrl('1515238152791-8225bf451d80'), fallbackSrc: getFallback('romantic'),
        tags: ['Garden', 'Secret', 'Quiet'], localScore: 9.2, priceLevel: 'Free', district: 'Sarrià-Sant Gervasi',
        vibeTags: ['Romantic', 'Peaceful'], coordinates: { lat: 41.4116, lng: 2.1352 }, recommendationTags: ['Romantic', 'Hidden Gem Hunter'],
        bestVisitingHours: '10:00 - 13:00', isQuietNow: true, trending: false, editorialCollection: 'Romantic Escapes', localTip: 'Perfect spot for reading a book together.'
    },
    {
        id: 'rm2', title: 'Plaça de Sant Felip Neri',
        description: 'A tragic but profoundly beautiful hidden square in the Gothic Quarter with a soothing fountain.',
        category: 'romantic', image: getImageUrl('1605342410884-21f456fb4890'), fallbackSrc: getFallback('romantic'),
        tags: ['Square', 'Historic', 'Quiet'], localScore: 9.6, priceLevel: 'Free', district: 'Gothic Quarter',
        vibeTags: ['Melancholic', 'Romantic'], coordinates: { lat: 41.3833, lng: 2.1751 }, recommendationTags: ['Romantic', 'Culture Lover'],
        bestVisitingHours: '21:00 - 23:00', isQuietNow: true, trending: true, localTip: 'Go at night when it is empty and echoey.'
    },
    {
        id: 'rm3', title: 'Observ Fabra',
        description: 'An astronomical observatory offering dinners under the stars during summer.',
        category: 'romantic', image: getImageUrl('1549449830-ecb8b3b3ba98'), fallbackSrc: getFallback('romantic'),
        tags: ['Stars', 'Dinner', 'Views'], localScore: 9.5, priceLevel: '$$$$', district: 'Collserola',
        vibeTags: ['Romantic', 'Awe-inspiring'], coordinates: { lat: 41.4184, lng: 2.1245 }, recommendationTags: ['Romantic', 'Luxury Traveler'],
        bestVisitingHours: '20:30 - 23:30', isQuietNow: true, trending: false, editorialCollection: 'Romantic Escapes', localTip: 'Book the "Dinner with Stars" experience months ahead.'
    },
    {
        id: 'rm4', title: 'El Bosc de les Fades',
        description: 'A magical café decorated like an enchanted forest with thunderstorms and waterfalls.',
        category: 'romantic', image: getImageUrl('1550966871-3ed3cdb5ed0c'), fallbackSrc: getFallback('romantic'),
        tags: ['Themed', 'Cafe', 'Magical'], localScore: 8.6, priceLevel: '$$', district: 'Gothic Quarter',
        vibeTags: ['Whimsical', 'Romantic'], coordinates: { lat: 41.3768, lng: 2.1772 }, recommendationTags: ['Romantic', 'Family'],
        bestVisitingHours: '16:00 - 19:00', isQuietNow: false, trending: true, localTip: 'Great for a unique cocktail, but skip the food.'
    },
    {
        id: 'rm5', title: 'Carretera de les Aigües',
        description: 'A long, flat dirt path overlooking the entire city. Perfect for a romantic sunset walk or cycle.',
        category: 'romantic', image: getImageUrl('1549449830-ecb8b3b3ba98'), fallbackSrc: getFallback('romantic'),
        tags: ['Nature', 'Walking', 'Sunset'], localScore: 9.3, priceLevel: 'Free', district: 'Collserola',
        vibeTags: ['Active', 'Romantic'], coordinates: { lat: 41.4055, lng: 2.1105 }, recommendationTags: ['Relaxed', 'Romantic'],
        bestVisitingHours: '18:00 - 21:00', isQuietNow: true, trending: false, sunsetTime: '20:15', localTip: 'Rent e-bikes and ride the full length.'
    },
    {
        id: 'rm6', title: 'Ciutadella Park Boating Lake',
        description: 'Rent a small rowboat and paddle around the romantic lake under the waterfall.',
        category: 'romantic', image: getImageUrl('1627960320499-28ec3a0c5bd6'), fallbackSrc: getFallback('romantic'),
        tags: ['Park', 'Boating', 'Classic'], localScore: 8.9, priceLevel: '$', district: 'El Born',
        vibeTags: ['Classic', 'Romantic'], coordinates: { lat: 41.3884, lng: 2.1874 }, recommendationTags: ['Romantic', 'Relaxed'],
        bestVisitingHours: '10:00 - 13:00', isQuietNow: false, trending: false, localTip: 'Watch out for the ducks.'
    },
    {
        id: 'rm7', title: 'La Caseta del Migdia',
        description: 'A hidden open-air bar in a pine forest on Montjuïc facing the sea. They serve simple BBQs and incredible sunsets.',
        category: 'romantic', image: getImageUrl('1518335440626-4ee8fb827376'), fallbackSrc: getFallback('romantic'),
        tags: ['Hidden', 'BBQ', 'Sunset'], localScore: 9.4, priceLevel: '$$', district: 'Sants-Montjuïc',
        vibeTags: ['Chill', 'Romantic'], coordinates: { lat: 41.3601, lng: 2.1643 }, recommendationTags: ['Hidden Gem Hunter', 'Romantic'],
        bestVisitingHours: '19:00 - 22:00', isQuietNow: true, trending: true, sunsetTime: '20:15', editorialCollection: 'Best Sunset Spots', localTip: 'Only open on weekends during summer.'
    },
    {
        id: 'rm8', title: 'Torre d\'Alta Mar',
        description: 'A fine dining restaurant located at the very top of the old port cable car tower.',
        category: 'romantic', image: getImageUrl('1514933651103-005eec06c04b'), fallbackSrc: getFallback('romantic'),
        tags: ['Fine Dining', 'Views', 'Expensive'], localScore: 8.8, priceLevel: '$$$$', district: 'Barceloneta',
        vibeTags: ['Luxury', 'Romantic'], coordinates: { lat: 41.3734, lng: 2.1884 }, recommendationTags: ['Luxury Traveler', 'Romantic'],
        bestVisitingHours: '20:00 - 23:00', isQuietNow: false, trending: false, localTip: 'Ask for a window table facing the sea.'
    },
    {
        id: 'rm9', title: 'Sensorial Spa at Aire de Barcelona',
        description: 'Ancient Arab baths located in underground brick vaults. Incredibly relaxing and intimate.',
        category: 'romantic', image: getImageUrl('1515238152791-8225bf451d80'), fallbackSrc: getFallback('romantic'),
        tags: ['Spa', 'Relaxation', 'Underground'], localScore: 9.7, priceLevel: '$$$', district: 'El Born',
        vibeTags: ['Relaxed', 'Intimate'], coordinates: { lat: 41.3861, lng: 2.1822 }, recommendationTags: ['Romantic', 'Luxury Traveler'],
        bestVisitingHours: '21:00 - 23:00', isQuietNow: true, trending: true, localTip: 'Book the wine bath experience.'
    },
    {
        id: 'rm10', title: 'Hotel Neri Restaurant Courtyard',
        description: 'Dining in the beautiful, tragic Plaça de Sant Felip Neri surrounded by history.',
        category: 'romantic', image: getImageUrl('1514933651103-005eec06c04b'), fallbackSrc: getFallback('romantic'),
        tags: ['Fine Dining', 'Courtyard', 'Historic'], localScore: 9.3, priceLevel: '$$$', district: 'Gothic Quarter',
        vibeTags: ['Elegant', 'Romantic'], coordinates: { lat: 41.3833, lng: 2.1751 }, recommendationTags: ['Romantic', 'Culture Lover'],
        bestVisitingHours: '20:30 - 22:30', isQuietNow: true, trending: false, localTip: 'Stunning ambiance at night with the candles.'
    }
];

// Apply unique images from the centralized image map
export const mockPlaces: Place[] = _rawPlaces.map(place => {
    const imgs = imageMap[place.id];
    if (imgs) {
        return { ...place, image: imgs.image, fallbackSrc: imgs.fallbackSrc };
    }
    return place;
});

export function getMatchPercentage(place: Place, profile: string): number {
    if (place.recommendationTags.includes(profile)) {
        return Math.floor(Math.random() * (99 - 90 + 1) + 90); 
    }
    if ((profile === 'Foodie Explorer' && place.category === 'restaurant') ||
        (profile === 'Culture Lover' && place.category === 'attraction')) {
        return Math.floor(Math.random() * (89 - 80 + 1) + 80);
    }
    return Math.floor(Math.random() * (75 - 65 + 1) + 65); 
}
