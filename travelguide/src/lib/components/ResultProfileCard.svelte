<script lang="ts">
    import { Compass, Star, Map, Utensils, Waves, PartyPopper, Crown, Coffee } from 'lucide-svelte';
    import ProgressiveImage from './ProgressiveImage.svelte';

    let { profile } = $props<{
        profile: string;
    }>();

    const profileDetails: Record<string, { desc: string, icon: any, color: string, heroImage: string, fallback: string }> = {
        'Foodie Explorer': {
            desc: 'You travel through your taste buds. From tapas bars to Michelin-starred kitchens, every meal is an adventure.',
            icon: Utensils,
            color: 'text-orange-400',
            heroImage: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1600&h=1200',
            fallback: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=1600'
        },
        'Hidden Gem Hunter': {
            desc: 'You love finding places tourists never see. Secret courtyards, local bars, and hidden viewpoints are your thing.',
            icon: Compass,
            color: 'text-emerald-400',
            heroImage: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1600&h=1200',
            fallback: 'https://images.unsplash.com/photo-1583422409516-15eba5336080?w=1600'
        },
        'Luxury Traveler': {
            desc: 'Premium experiences and exquisite comfort define your journey. Rooftop pools, fine dining, and five-star elegance.',
            icon: Crown,
            color: 'text-amber-400',
            heroImage: 'https://images.unsplash.com/photo-1564227506-69eb858a7da0?auto=format&fit=crop&q=80&w=1600&h=1200',
            fallback: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600'
        },
        'Beach Lover': {
            desc: 'Sun, sand, and the sound of Mediterranean waves are all you need. Golden hour is your favorite time.',
            icon: Waves,
            color: 'text-sky-400',
            heroImage: 'https://images.unsplash.com/photo-1518335440626-4ee8fb827376?auto=format&fit=crop&q=80&w=1600&h=1200',
            fallback: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600'
        },
        'Party Traveler': {
            desc: 'Barcelona after dark is your playground. Beach clubs, speakeasies, and rooftop DJs fuel your energy.',
            icon: PartyPopper,
            color: 'text-purple-400',
            heroImage: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1600&h=1200',
            fallback: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=1600'
        },
        'Local Lifestyle Explorer': {
            desc: 'You want to live like a true Barceloní. Morning coffee at the corner café, afternoon vermut, and evening paseo.',
            icon: Coffee,
            color: 'text-terracotta-400',
            heroImage: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1600&h=1200',
            fallback: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600'
        },
        'Culture Lover': {
            desc: 'History, art, and architecture are your guiding lights. Every street in Barcelona tells a story you want to hear.',
            icon: Compass,
            color: 'text-indigo-400',
            heroImage: 'https://images.unsplash.com/photo-1523531294919-4bab31ecd8cc?auto=format&fit=crop&q=80&w=1600&h=1200',
            fallback: 'https://images.unsplash.com/photo-1523531294919-4bcd76189c9c?w=1600'
        },
    };

    let details = $derived(profileDetails[profile] || {
        desc: 'A unique traveler with a one-of-a-kind perspective on Barcelona.',
        icon: Compass,
        color: 'text-terracotta-400',
        heroImage: 'https://images.unsplash.com/photo-1583422409516-15eba5336080?auto=format&fit=crop&q=80&w=1600&h=1200',
        fallback: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1600'
    });
    let Icon = $derived(details.icon);
</script>

<div class="rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden h-[360px] sm:h-[420px] bg-slate-900 group">
    <!-- Cinematic Background Image with Zoom Effect -->
    <div class="absolute inset-0 z-0">
        <ProgressiveImage 
            src={details.heroImage} 
            alt="{profile} background" 
            fallbackSrc={details.fallback}
            priority={true}
            aspectRatio="h-full"
            className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[10s] ease-out"
        >
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20 z-10"></div>
            <div class="absolute inset-0 bg-black/20 z-10"></div>
        </ProgressiveImage>
    </div>

    <!-- Content -->
    <div class="relative z-20 flex flex-col items-center text-center p-8 sm:p-10 justify-end h-full">
        <div class="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-6 shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
            <Icon size={32} class={details.color} />
        </div>
        
        <h3 class="text-[10px] font-black text-white/60 uppercase tracking-[0.3em] mb-3 drop-shadow-sm">Your Travel Persona</h3>
        <h2 class="font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">{profile}</h2>
        <p class="text-white/90 text-base sm:text-lg max-w-md text-balance leading-relaxed font-medium drop-shadow-lg">
            {details.desc}
        </p>
    </div>
</div>

<style>
    /* Subtle slow zoom animation for that "alive" feeling */
    :global(.group:hover img) {
        transform: scale(1.1);
    }
</style>
