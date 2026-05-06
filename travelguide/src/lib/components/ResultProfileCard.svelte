<script lang="ts">
    import { Compass, Star, Map } from 'lucide-svelte';

    let { profile } = $props<{
        profile: string;
    }>();

    const profileDetails: Record<string, { desc: string, icon: any, color: string }> = {
        'Foodie Explorer': { desc: 'You travel through your taste buds.', icon: Star, color: 'text-orange-500' },
        'Hidden Gem Hunter': { desc: 'You love finding places not on the tourist map.', icon: Compass, color: 'text-emerald-500' },
        'Luxury Traveler': { desc: 'Premium experiences and comfort are key.', icon: Star, color: 'text-amber-500' },
        'Beach Lover': { desc: 'Sun, sand, and sea are all you need.', icon: Map, color: 'text-blue-500' },
        'Party Traveler': { desc: 'You are here for the energetic nightlife.', icon: Star, color: 'text-purple-500' },
        'Local Lifestyle Explorer': { desc: 'You want to live like a local.', icon: Map, color: 'text-terracotta-500' },
        'Culture Lover': { desc: 'History and art are your main passions.', icon: Compass, color: 'text-indigo-500' },
    };

    let details = $derived(profileDetails[profile] || { desc: 'A unique traveler.', icon: Compass, color: 'text-terracotta-500' });
    let Icon = $derived(details.icon);
</script>

<div class="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-cream-200 relative overflow-hidden">
    <!-- Decorative background element -->
    <div class="absolute -right-10 -top-10 w-32 h-32 bg-cream-100 rounded-full opacity-50 blur-2xl"></div>
    
    <div class="relative z-10 flex flex-col items-center text-center">
        <div class="w-16 h-16 rounded-2xl bg-cream-100 flex items-center justify-center mb-4">
            <Icon size={32} class={details.color} />
        </div>
        
        <h3 class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Your Travel Personality</h3>
        <h2 class="font-display text-3xl font-bold text-slate-800 mb-3 text-balance">{profile}</h2>
        <p class="text-slate-600 text-lg max-w-sm text-balance">
            {details.desc} We've curated a personalized Barcelona guide just for you.
        </p>
    </div>
</div>
