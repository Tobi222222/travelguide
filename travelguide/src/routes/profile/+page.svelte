<script lang="ts">
    import { getUserState } from '$lib/state/userStore.svelte';
    import ResultProfileCard from '$lib/components/ResultProfileCard.svelte';
    import { fade } from 'svelte/transition';
    import { MapPin, Settings, RotateCcw } from 'lucide-svelte';
    import { goto } from '$app/navigation';

    const userState = getUserState();
    let profile = $derived(userState?.userProfile || '');
    let savedCount = $derived(userState?.favorites.length || 0);

    function retakeQuiz() {
        if(confirm("Are you sure you want to retake the quiz? Your current personality will be reset.")) {
            userState?.resetQuiz();
            goto('/');
        }
    }
</script>

<div class="min-h-screen bg-cream-50 pt-8 pb-12 flex flex-col" in:fade={{duration: 300}}>
    <div class="px-4 sm:px-6 mb-8 flex justify-between items-center">
        <h1 class="text-3xl sm:text-4xl font-display font-bold text-slate-800">Profile</h1>
        <button class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-terracotta-600 transition-colors">
            <Settings size={20} />
        </button>
    </div>

    <div class="px-4 sm:px-6 space-y-6">
        
        {#if profile}
            <ResultProfileCard {profile} />
        {:else}
            <div class="bg-white rounded-3xl p-8 shadow-sm border border-cream-200 text-center">
                <h3 class="text-lg font-semibold text-slate-800 mb-2">You haven't taken the quiz yet!</h3>
                <p class="text-slate-500 mb-6">Discover your unique travel personality.</p>
                <a href="/quiz" class="inline-block px-6 py-3 bg-terracotta-500 text-white font-medium rounded-full hover:bg-terracotta-600 transition-colors shadow-md">
                    Take Quiz
                </a>
            </div>
        {/if}

        <div class="grid grid-cols-2 gap-4 mt-6">
            <div class="bg-white rounded-2xl p-5 shadow-sm border border-cream-200">
                <div class="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center mb-3">
                    <MapPin size={18} class="text-terracotta-500" />
                </div>
                <div class="text-2xl font-bold text-slate-800 mb-1">{savedCount}</div>
                <div class="text-sm font-medium text-slate-500">Saved Places</div>
            </div>
            
            <div class="bg-white rounded-2xl p-5 shadow-sm border border-cream-200">
                <div class="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-terracotta-500"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                </div>
                <div class="text-2xl font-bold text-slate-800 mb-1">1</div>
                <div class="text-sm font-medium text-slate-500">Active Guides</div>
            </div>
        </div>

        {#if profile}
            <button 
                onclick={retakeQuiz}
                class="w-full mt-4 bg-white border border-cream-200 rounded-2xl p-4 flex items-center justify-center gap-2 text-slate-600 hover:bg-cream-100 hover:text-terracotta-600 transition-colors font-medium shadow-sm"
            >
                <RotateCcw size={18} />
                Retake Travel Quiz
            </button>
        {/if}
    </div>
</div>
