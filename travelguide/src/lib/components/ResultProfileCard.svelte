<script lang="ts">
    import { Compass, Star, Map, Utensils, Waves, PartyPopper, Crown, Coffee } from 'lucide-svelte';

    let { profile } = $props<{
        profile: string;
    }>();

    const profileDetails: Record<string, { desc: string, icon: any, color: string, heroImage: string }> = {
        'Foodie Explorer': {
            desc: 'You travel through your taste buds. From tapas bars to Michelin-starred kitchens, every meal is an adventure.',
            icon: Utensils,
            color: 'text-orange-400',
            heroImage: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&q=80&w=1600&h=900'
        },
        'Hidden Gem Hunter': {
            desc: 'You love finding places tourists never see. Secret courtyards, local bars, and hidden viewpoints are your thing.',
            icon: Compass,
            color: 'text-emerald-400',
            heroImage: 'https://images.unsplash.com/photo-1583422409516-15eba5336080?auto=format&fit=crop&q=80&w=1600&h=900'
        },
        'Luxury Traveler': {
            desc: 'Premium experiences and exquisite comfort define your journey. Rooftop pools, fine dining, and five-star elegance.',
            icon: Crown,
            color: 'text-amber-400',
            heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1600&h=900'
        },
        'Beach Lover': {
            desc: 'Sun, sand, and the sound of Mediterranean waves are all you need. Golden hour is your favorite time.',
            icon: Waves,
            color: 'text-sky-400',
            heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1600&h=900'
        },
        'Party Traveler': {
            desc: 'Barcelona after dark is your playground. Beach clubs, speakeasies, and rooftop DJs fuel your energy.',
            icon: PartyPopper,
            color: 'text-purple-400',
            heroImage: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=1600&h=900'
        },
        'Local Lifestyle Explorer': {
            desc: 'You want to live like a true Barceloní. Morning coffee at the corner café, afternoon vermut, and evening paseo.',
            icon: Coffee,
            color: 'text-terracotta-400',
            heroImage: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1600&h=900'
        },
        'Culture Lover': {
            desc: 'History, art, and architecture are your guiding lights. Every street in Barcelona tells a story you want to hear.',
            icon: Compass,
            color: 'text-indigo-400',
            heroImage: 'https://images.unsplash.com/photo-1523531294919-4bcd76189c9c?auto=format&fit=crop&q=80&w=1600&h=900'
        },
    };

    let details = $derived(profileDetails[profile] || {
        desc: 'A unique traveler with a one-of-a-kind perspective on Barcelona.',
        icon: Compass,
        color: 'text-terracotta-400',
        heroImage: 'https://images.unsplash.com/photo-1583422409516-15eba5336080?auto=format&fit=crop&q=80&w=1600&h=900'
    });
    let Icon = $derived(details.icon);

    let imgLoaded = $state(false);
</script>

<div class="rounded-3xl shadow-lg border border-cream-200 relative overflow-hidden min-h-[280px] sm:min-h-[320px]">
    <!-- Cinematic Background Image -->
    <img
        src={details.heroImage}
        alt="{profile} background"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 {imgLoaded ? 'opacity-100' : 'opacity-0'}"
        loading="eager"
        onload={() => imgLoaded = true}
    />

    <!-- Dark gradient overlay for text readability -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center text-center p-6 sm:p-8 justify-end h-full min-h-[280px] sm:min-h-[320px]">
        <div class="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 shadow-lg">
            <Icon size={28} class={details.color} />
        </div>
        
        <h3 class="text-xs font-bold text-white/70 uppercase tracking-[0.2em] mb-2">Your Travel Personality</h3>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-white mb-3 text-balance drop-shadow-lg">{profile}</h2>
        <p class="text-white/85 text-base sm:text-lg max-w-md text-balance leading-relaxed drop-shadow-md">
            {details.desc}
        </p>
    </div>
</div>
