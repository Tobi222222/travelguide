<script lang="ts">
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { getUserState } from '$lib/state/userStore.svelte';
    import QuizQuestion from '$lib/components/QuizQuestion.svelte';
    import QuizProgress from '$lib/components/QuizProgress.svelte';
    import ResultProfileCard from '$lib/components/ResultProfileCard.svelte';
    import { fade, fly } from 'svelte/transition';
    import { 
        Sun, Waves, Compass, Mountain, Sparkles, Crown, 
        Coffee, Map, Music, Wine, Landmark, Palette,
        Wallet, CreditCard, Gem, ArrowLeft, ArrowRight
    } from 'lucide-svelte';

    const userState = getUserState();

    const questions = [
        {
            id: 'vibe',
            text: 'How do you want to experience Barcelona?',
            subtext: 'We\'ll tailor the recommendations to your perfect pace.',
            options: [
                { id: 'Relaxed', label: 'Relaxed', subtitle: 'Slow mornings, beaches and easy-going city vibes', Icon: Sun },
                { id: 'Adventurous', label: 'Adventurous', subtitle: 'Viewpoints, bike rides and active discoveries', Icon: Compass },
                { id: 'Luxury', label: 'Luxury', subtitle: 'Rooftops, elegant restaurants and stylish hotels', Icon: Sparkles },
                { id: 'Local lifestyle', label: 'Local Lifestyle', subtitle: 'Markets, cafés and authentic neighborhoods', Icon: Coffee },
                { id: 'Party focused', label: 'Party Focused', subtitle: 'Bars, clubs and unforgettable nights', Icon: Music },
                { id: 'Cultural', label: 'Cultural', subtitle: 'Architecture, museums and historic streets', Icon: Landmark }
            ]
        },
        {
            id: 'budget',
            text: 'What is your travel budget?',
            subtext: 'This helps us filter the best spots for your wallet.',
            options: [
                { id: 'Budget', label: 'Budget-friendly', subtitle: 'Tapas, free viewpoints, and street life', Icon: Wallet },
                { id: 'Mid-range', label: 'Mid-range', subtitle: 'Nice dinners, some paid attractions', Icon: CreditCard },
                { id: 'Luxury', label: 'Luxury & Premium', subtitle: 'Fine dining, exclusive clubs, high-end', Icon: Gem }
            ]
        },
        {
            id: 'preference',
            text: 'If you had one free afternoon...',
            subtext: 'Choose your ideal escape.',
            options: [
                { id: 'Beaches', label: 'By the water', subtitle: 'Lounging on the sand with a cold drink', Icon: Waves },
                { id: 'City exploration', label: 'In the streets', subtitle: 'Getting lost in the Gothic Quarter', Icon: Map },
                { id: 'Mix of both', label: 'Up high', subtitle: 'Finding a scenic viewpoint', Icon: Mountain }
            ]
        },
        {
            id: 'interest',
            text: 'What is your evening priority?',
            subtext: 'When the sun goes down, where are you?',
            options: [
                { id: 'Food', label: 'Culinary journey', subtitle: 'Tasting menus and incredible wine', Icon: Wine },
                { id: 'Nightlife', label: 'Dancing till dawn', subtitle: 'Beach clubs and underground spots', Icon: Music },
                { id: 'Architecture', label: 'Evening strolls', subtitle: 'Illuminated monuments and quiet plazas', Icon: Palette },
                { id: 'Rooftops', label: 'Golden hour', subtitle: 'Cocktails with a panoramic view', Icon: Crown }
            ]
        }
    ];

    let currentStep = $state(0);
    let answers = $state<Record<string, string>>({});
    let showResult = $state(false);

    let isSelectionMade = $derived(!!answers[questions[currentStep]?.id]);

    function handleSelect(optionId: string) {
        const qId = questions[currentStep].id;
        answers[qId] = optionId;
    }

    function handleContinue() {
        if (currentStep < questions.length - 1) {
            currentStep++;
        } else {
            calculateAndShowResult();
        }
    }

    function handleBack() {
        if (currentStep > 0) {
            currentStep--;
        }
    }

    function calculateAndShowResult() {
        let profile = 'Culture Lover';
        if (answers['vibe'] === 'Local lifestyle') profile = 'Hidden Gem Hunter';
        if (answers['interest'] === 'Food') profile = 'Foodie Explorer';
        if (answers['vibe'] === 'Luxury' || answers['budget'] === 'Luxury') profile = 'Luxury Traveler';
        if (answers['preference'] === 'Beaches') profile = 'Beach Lover';
        if (answers['interest'] === 'Nightlife' || answers['vibe'] === 'Party focused') profile = 'Party Traveler';
        if (answers['vibe'] === 'Local lifestyle' && answers['interest'] !== 'Nightlife') profile = 'Local Lifestyle Explorer';

        userState?.setProfile(profile);
        showResult = true;
    }

    function finishQuiz() {
        goto(`${base}/home`);
    }
</script>

<div class="min-h-screen bg-cream-50 flex flex-col pt-4 sm:pt-8 pb-24 overflow-x-hidden">
    {#if !showResult}
        <div class="px-4 max-w-2xl mx-auto w-full mb-8 relative z-20">
            <div class="flex items-center justify-between mb-4">
                <button 
                    class="p-2 -ml-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-cream-200 transition-colors disabled:opacity-0"
                    onclick={handleBack}
                    disabled={currentStep === 0}
                    aria-label="Previous question"
                >
                    <ArrowLeft size={24} />
                </button>
                <div class="text-sm font-semibold text-terracotta-500 tracking-wider">
                    {currentStep + 1} OF {questions.length}
                </div>
                <div class="w-10"></div> <!-- Spacer for centering -->
            </div>
            <QuizProgress current={currentStep + 1} total={questions.length} />
        </div>
        
        <div class="flex-1 flex flex-col items-center justify-start px-4 sm:px-6 w-full max-w-2xl mx-auto relative z-10">
            {#key currentStep}
                <div in:fly={{ x: 50, duration: 400, delay: 150 }} out:fly={{ x: -50, duration: 300 }} class="w-full">
                    <QuizQuestion 
                        question={questions[currentStep].text}
                        subtext={questions[currentStep].subtext}
                        options={questions[currentStep].options}
                        selected={answers[questions[currentStep].id]}
                        onselect={handleSelect}
                    />
                </div>
            {/key}
        </div>

        <div class="fixed bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-cream-50 via-cream-50 to-transparent z-30">
            <div class="max-w-2xl mx-auto">
                <button
                    class="w-full py-4 rounded-2xl font-bold text-lg shadow-lg transform transition-all duration-300 flex items-center justify-center gap-2
                           {isSelectionMade ? 'bg-navy-900 text-white hover:bg-navy-800 hover:shadow-xl active:scale-95 translate-y-0 opacity-100' : 'bg-slate-200 text-slate-400 translate-y-4 opacity-0 pointer-events-none'}"
                    onclick={handleContinue}
                >
                    <span>{currentStep === questions.length - 1 ? 'Reveal my match' : 'Continue'}</span>
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
    {:else}
        <!-- Final Result Screen -->
        <div class="flex-1 flex flex-col items-center justify-center px-4 w-full max-w-2xl mx-auto" in:fade={{duration: 500}}>
            <div class="text-center mb-10">
                <h2 class="font-display text-4xl font-bold text-navy-900 mb-4">Your Travel Vibe</h2>
                <p class="text-slate-600">We've analyzed your preferences to craft the perfect Barcelona experience.</p>
            </div>

            <div class="w-full mb-12 animate-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both">
                <ResultProfileCard profile={userState?.userProfile || 'Culture Lover'} />
            </div>

            <button
                class="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-[0.98] animate-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both"
                onclick={finishQuiz}
            >
                Start Exploring
            </button>
        </div>
    {/if}
</div>
