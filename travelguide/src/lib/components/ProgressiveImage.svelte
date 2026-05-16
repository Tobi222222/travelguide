<script lang="ts">
    import type { Snippet } from 'svelte';

    let { 
        src, 
        alt, 
        fallbackSrc = '', 
        className = '',
        aspectRatio = 'aspect-square',
        priority = false,
        children
    } = $props<{
        src: string;
        alt: string;
        fallbackSrc?: string;
        className?: string;
        aspectRatio?: string;
        priority?: boolean;
        children?: Snippet;
    }>();

    let currentSrc = $state(src);
    let status = $state<'loading' | 'loaded' | 'error' | 'fallback'>('loading');

    // Preload if priority is set
    if (priority && typeof window !== 'undefined') {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    }

    function handleLoad() {
        status = 'loaded';
    }

    function handleError() {
        if (status === 'loading' || status === 'loaded') {
            if (fallbackSrc && currentSrc !== fallbackSrc) {
                currentSrc = fallbackSrc;
                status = 'fallback';
            } else {
                status = 'error';
            }
        }
    }

    // Effect to reset if src changes
    $effect(() => {
        if (src) {
            currentSrc = src;
            status = 'loading';
        }
    });
</script>

<div class="relative overflow-hidden {aspectRatio} {className} bg-slate-900">
    {#if status === 'loading'}
        <div class="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-900 to-slate-800"></div>
    {/if}

    {#if status === 'error'}
        <div class="absolute inset-0 bg-slate-900 flex items-center justify-center p-4 text-center">
            <span class="text-xs font-medium text-slate-500 uppercase tracking-wider">{alt}</span>
        </div>
    {/if}
    
    <img
        src={currentSrc}
        {alt}
        class="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out 
               {status === 'loading' ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}"
        loading={priority ? 'eager' : 'lazy'}
        onload={handleLoad}
        onerror={handleError}
    />
    
    <!-- Render children snippet if provided -->
    {#if children}
        {@render children()}
    {/if}
</div>
