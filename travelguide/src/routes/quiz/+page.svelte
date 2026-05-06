<script lang="ts">
    import { goto } from '$app/navigation';
    import { getUserState } from '$lib/state/userStore.svelte';
    import QuizQuestion from '$lib/components/QuizQuestion.svelte';
    import QuizProgress from '$lib/components/QuizProgress.svelte';
    import { fade } from 'svelte/transition';

    const userState = getUserState();

    const questions = [
        {
            id: 'vibe',
            text: 'How do you want to experience Barcelona?',
            options: [
                { id: 'Relaxed', label: 'Relaxed' },
                { id: 'Adventurous', label: 'Adventurous' },
                { id: 'Luxury', label: 'Luxury' },
                { id: 'Local lifestyle', label: 'Local lifestyle' },
                { id: 'Party focused', label: 'Party focused' },
                { id: 'Cultural', label: 'Cultural' }
            ]
        },
        {
            id: 'budget',
            text: 'What is your travel budget?',
            options: [
                { id: 'Budget', label: 'Budget' },
                { id: 'Mid-range', label: 'Mid-range' },
                { id: 'Luxury', label: 'Luxury' }
            ]
        },
        {
            id: 'preference',
            text: 'What do you prefer?',
            options: [
                { id: 'Beaches', label: 'Beaches', image: 'https://images.unsplash.com/photo-1518335440626-4ee8fb827376?auto=format&fit=crop&q=80&w=400' },
                { id: 'City exploration', label: 'City exploration', image: 'https://images.unsplash.com/photo-1583422409516-15eba5336080?auto=format&fit=crop&q=80&w=400' },
                { id: 'Mix of both', label: 'Mix of both', image: 'https://images.unsplash.com/photo-1523531294919-4bab31ecd8cc?auto=format&fit=crop&q=80&w=400' }
            ]
        },
        {
            id: 'places',
            text: 'What type of places do you prefer?',
            options: [
                { id: 'Famous spots', label: 'Famous tourist spots' },
                { id: 'Hidden gems', label: 'Hidden gems' },
                { id: 'Mix of both', label: 'Mix of both' }
            ]
        },
        {
            id: 'interest',
            text: 'What are you most interested in?',
            options: [
                { id: 'Food', label: 'Food & cafés' },
                { id: 'Nightlife', label: 'Nightlife' },
                { id: 'Architecture', label: 'Architecture' },
                { id: 'Rooftops', label: 'Rooftops' }
            ]
        }
    ];

    let currentStep = $state(0);
    let answers = $state<Record<string, string>>({});

    function handleSelect(optionId: string) {
        const qId = questions[currentStep].id;
        answers[qId] = optionId;
        
        setTimeout(() => {
            if (currentStep < questions.length - 1) {
                currentStep++;
            } else {
                finishQuiz();
            }
        }, 400); // Small delay for animation
    }

    function finishQuiz() {
        // Simple logic to determine profile based on some answers
        let profile = 'Culture Lover';
        if (answers['vibe'] === 'Local lifestyle' || answers['places'] === 'Hidden gems') profile = 'Hidden Gem Hunter';
        if (answers['interest'] === 'Food') profile = 'Foodie Explorer';
        if (answers['vibe'] === 'Luxury' || answers['budget'] === 'Luxury') profile = 'Luxury Traveler';
        if (answers['preference'] === 'Beaches') profile = 'Beach Lover';
        if (answers['interest'] === 'Nightlife' || answers['vibe'] === 'Party focused') profile = 'Party Traveler';
        if (answers['vibe'] === 'Local lifestyle' && answers['places'] !== 'Hidden gems') profile = 'Local Lifestyle Explorer';

        userState?.setProfile(profile);
        goto('/home');
    }
</script>

<div class="min-h-screen bg-cream-50 flex flex-col pt-4">
    <QuizProgress current={currentStep + 1} total={questions.length} />
    
    <div class="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 w-full max-w-md mx-auto">
        <!-- Key block to re-mount QuizQuestion for animations -->
        {#key currentStep}
            <QuizQuestion 
                question={questions[currentStep].text}
                options={questions[currentStep].options}
                selected={answers[questions[currentStep].id]}
                onselect={handleSelect}
            />
        {/key}
    </div>
</div>
