import { getContext, setContext } from 'svelte';
import { browser } from '$app/environment';

export interface QuizAnswers {
    vibe: string;
    budget: string;
    preference: string;
    places: string;
    interest: string;
    companions: string;
}

export class UserStore {
    quizCompleted = $state(false);
    quizAnswers = $state<Partial<QuizAnswers>>({});
    userProfile = $state<string>('');
    favorites = $state<string[]>([]);

    constructor() {
        if (browser) {
            const storedFavorites = localStorage.getItem('favorites');
            if (storedFavorites) {
                this.favorites = JSON.parse(storedFavorites);
            }
            
            const storedProfile = localStorage.getItem('userProfile');
            if (storedProfile) {
                this.userProfile = storedProfile;
                this.quizCompleted = true;
            }
        }
    }

    // Call this inside a component's script block to set up the effects
    initEffects() {
        $effect(() => {
            if (browser) {
                localStorage.setItem('favorites', JSON.stringify(this.favorites));
            }
        });
        $effect(() => {
            if (browser && this.userProfile) {
                localStorage.setItem('userProfile', this.userProfile);
            }
        });
    }

    toggleFavorite(id: string) {
        if (this.favorites.includes(id)) {
            this.favorites = this.favorites.filter(fid => fid !== id);
        } else {
            this.favorites.push(id);
        }
    }
    
    isFavorite(id: string) {
        return this.favorites.includes(id);
    }
    
    setProfile(profile: string) {
        this.userProfile = profile;
        this.quizCompleted = true;
    }
    
    resetQuiz() {
        this.quizCompleted = false;
        this.userProfile = '';
        this.quizAnswers = {};
        if (browser) {
            localStorage.removeItem('userProfile');
        }
    }
}

const USER_CTX = Symbol('USER');

export function setUserState() {
    const state = new UserStore();
    setContext(USER_CTX, state);
    return state;
}

export function getUserState() {
    return getContext<UserStore>(USER_CTX);
}
