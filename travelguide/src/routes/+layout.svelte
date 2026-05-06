<script lang="ts">
    import './layout.css';
    import { setUserState } from '$lib/state/userStore.svelte';
    import BottomNav from '$lib/components/BottomNav.svelte';
    import { page } from '$app/state';
    
    let { children } = $props();

    // Initialize the Svelte 5 user state context
    const userState = setUserState();
    
    // In client-side, start persistence effects
    $effect(() => {
        userState.initEffects();
    });

    // Hide BottomNav on welcome screen and quiz
    let showBottomNav = $derived(
        page.url.pathname !== '/' && !page.url.pathname.startsWith('/quiz')
    );
</script>

<div class="min-h-screen bg-cream-50 font-sans text-slate-800 selection:bg-terracotta-200 selection:text-terracotta-900">
    <div class="mx-auto max-w-md min-h-screen relative bg-white shadow-xl overflow-hidden flex flex-col">
        <main class="flex-1 w-full pb-24 relative z-10 overflow-x-hidden">
            {@render children()}
        </main>
        
        {#if showBottomNav}
            <BottomNav />
        {/if}
    </div>
</div>
