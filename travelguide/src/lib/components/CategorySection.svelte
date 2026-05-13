<script lang="ts">
    import type { Place } from '$lib/data/mockData';
    import PlaceCard from './PlaceCard.svelte';
    import { ArrowRight } from 'lucide-svelte';

    let { 
        title, 
        places,
        subtitle = "",
        showMatch = false,
        userProfile = ""
    } = $props<{
        title: string;
        places: Place[];
        subtitle?: string;
        showMatch?: boolean;
        userProfile?: string;
    }>();

    import { getMatchPercentage } from '$lib/data/mockData';
</script>

{#if places.length > 0}
<section class="py-6 max-w-7xl mx-auto w-full">
    <div class="px-4 sm:px-6 lg:px-12 mb-4 flex justify-between items-end">
        <div>
            <h2 class="font-display text-2xl font-semibold text-slate-800">{title}</h2>
            {#if subtitle}
                <p class="text-slate-500 text-sm mt-1">{subtitle}</p>
            {/if}
        </div>
        <a href="/explore" class="text-terracotta-600 font-medium text-sm flex items-center gap-1 hover:text-terracotta-700 transition-colors">
            See all <ArrowRight size={16} />
        </a>
    </div>

    <div class="w-full overflow-x-auto no-scrollbar pb-4">
        <div class="flex gap-4 px-4 sm:px-6 lg:px-12 w-max">
            {#each places as place}
                <div class="w-[280px] sm:w-[320px] snap-center">
                    <PlaceCard 
                        {place} 
                        matchPercentage={showMatch ? getMatchPercentage(place, userProfile) : null} 
                    />
                </div>
            {/each}
        </div>
    </div>
</section>
{/if}

<style>
    /* Add scroll snapping for a native feel */
    .overflow-x-auto {
        scroll-snap-type: x mandatory;
        scroll-padding-left: 1rem;
    }
    @media (min-width: 640px) {
        .overflow-x-auto {
            scroll-padding-left: 1.5rem;
        }
    }
</style>
