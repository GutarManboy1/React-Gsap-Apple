import {create} from 'zustand'

interface MacbookStore {
    color: string;
    setColor: (color: string) => void;
    scale: number;
    setScale: (scale: number) => void;
    reset: () => void;
    texture: string;
    setTexture: (texture: string) => void;
}

const useMacbookStore = create<MacbookStore>((set) => ({
    color: '#2e2c2e',
    setColor: (color: string) => set({color}),

    scale: 0.08,
    setScale: (scale: number) => set({scale}),

    texture: '/videos/feature-1.mp4',
    setTexture: (texture) => set({texture}),

    reset: () => set({color: '#2e2c2e', scale: 0.08, texture: '/videos/feature-1.mp4'})
}))

export default useMacbookStore

//this is a zustand store for managing the state of a MacBook product viewer