<script lang="ts">
    import { getUserState } from '$lib/state/userStore.svelte';
    import ResultProfileCard from '$lib/components/ResultProfileCard.svelte';
    import { fade } from 'svelte/transition';
    import { MapPin, Settings, RotateCcw, Bookmark, FileText, Compass } from 'lucide-svelte';
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
    <div class="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-12">
        
        <!-- Header -->
        <div class="mb-8 flex justify-between items-center">
            <h1 class="text-3xl sm:text-4xl font-display font-bold text-slate-800">Profile</h1>
            <button class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-terracotta-600 transition-colors">
                <Settings size={20} />
            </button>
        </div>

        <!-- Desktop: Two Column Layout -->
        <div class="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-10">
            
            <!-- Left Column: Profile Card -->
            <div class="md:col-span-3">
                {#if profile}
                    <ResultProfileCard {profile} />
                {:else}
                    <div class="bg-white rounded-3xl p-8 shadow-sm border border-cream-200 text-center">
                        <div class="w-20 h-20 bg-terracotta-50 rounded-full flex items-center justify-center mx-auto mb-5">
                            <Compass size={36} class="text-terracotta-400" />
                        </div>
                        <h3 class="text-xl font-display font-semibold text-slate-800 mb-2">Discover your travel personality</h3>
                        <p class="text-slate-500 mb-6 max-w-xs mx-auto">Take a short quiz and we'll curate Barcelona just for you.</p>
                        <a href="/quiz" class="inline-block px-8 py-3.5 bg-terracotta-500 text-white font-semibold rounded-full hover:bg-terracotta-600 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
                            Take the Quiz
                        </a>
                    </div>
                {/if}
            </div>

            <!-- Right Column: Stats & Actions -->
            <div class="md:col-span-2 space-y-4">
                <!-- Stats Grid -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-white rounded-2xl p-5 shadow-sm border border-cream-200 hover:shadow-md transition-shadow">
                        <div class="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center mb-3">
                            <Bookmark size={18} class="text-terracotta-500" />
                        </div>
                        <div class="text-2xl font-bold text-slate-800 mb-1">{savedCount}</div>
                        <div class="text-sm font-medium text-slate-500">Saved Places</div>
                    </div>
                    
                    <div class="bg-white rounded-2xl p-5 shadow-sm border border-cream-200 hover:shadow-md transition-shadow">
                        <div class="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center mb-3">
                            <FileText size={18} class="text-terracotta-500" />
                        </div>
                        <div class="text-2xl font-bold text-slate-800 mb-1">1</div>
                        <div class="text-sm font-medium text-slate-500">Active Guides</div>
                    </div>
                </div>

                <!-- Quick Actions -->
                {#if profile}
                    <button 
                        onclick={retakeQuiz}
                        class="w-full bg-white border border-cream-200 rounded-2xl p-4 flex items-center justify-center gap-2 text-slate-600 hover:bg-cream-100 hover:text-terracotta-600 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
                    >
                        <RotateCcw size={18} />
                        Retake Travel Quiz
                    </button>
                {/if}

                <a 
                    href="/favorites"
                    class="block w-full bg-white border border-cream-200 rounded-2xl p-4 text-center text-slate-600 hover:bg-cream-100 hover:text-terracotta-600 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
                >
                    View Saved Collection →
                </a>
            </div>
        </div>
    </div>
</div>
