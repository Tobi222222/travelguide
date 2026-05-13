<script lang="ts">
    import './layout.css';
    import { setUserState } from '$lib/state/userStore.svelte';
    import BottomNav from '$lib/components/BottomNav.svelte';
    import TopNav from '$lib/components/TopNav.svelte';
    import { page } from '$app/state';
    
    let { children } = $props();

    // Initialize the Svelte 5 user state context
    const userState = setUserState();
    
    // In client-side, start persistence effects
    $effect(() => {
        userState.initEffects();
    });

    // Hide BottomNav on welcome screen and quiz
    let showNav = $derived(
        page.url.pathname !== '/' && !page.url.pathname.startsWith('/quiz')
    );
</script>

<div class="min-h-screen bg-cream-50 font-sans text-slate-800 selection:bg-terracotta-200 selection:text-terracotta-900 flex flex-col">
    {#if showNav}
        <TopNav />
    {/if}

    <!-- The pt-20 handles the fixed TopNav on desktop. On mobile TopNav is hidden so it doesn't matter much (or we adjust conditionally if needed, but since mobile doesn't have top nav, we'll handle padding on pages) -->
    <div class="w-full flex-1 relative flex flex-col {showNav ? 'md:pt-20' : ''}">
        <main class="flex-1 w-full pb-24 md:pb-0 relative z-10">
            {@render children()}
        </main>
        
        {#if showNav}
            <BottomNav />
        {/if}
    </div>
</div>
