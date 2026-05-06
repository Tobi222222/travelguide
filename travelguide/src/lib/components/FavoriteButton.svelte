<script lang="ts">
    import { Heart } from 'lucide-svelte';
    import { getUserState } from '$lib/state/userStore.svelte';

    let { placeId, class: className = '' } = $props<{
        placeId: string;
        class?: string;
    }>();

    const userState = getUserState();
    let isFav = $derived(userState?.isFavorite(placeId) ?? false);

    function toggle(e: Event) {
        e.preventDefault();
        e.stopPropagation();
        userState?.toggleFavorite(placeId);
    }
</script>

<button 
    class="flex items-center justify-center p-2.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-all duration-300 active:scale-90 group {className}"
    onclick={toggle}
    aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
>
    <div class="transition-transform duration-300 {isFav ? 'scale-110' : 'group-hover:scale-110'}">
        <Heart 
            size={20} 
            class="transition-colors duration-300 {isFav ? 'fill-terracotta-500 text-terracotta-500' : 'text-slate-600'}" 
        />
    </div>
</button>
