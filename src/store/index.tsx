import {create} from 'zustand'

interface MacbookStore {
    color: string;
    setColor: (color: string) => void;
    scale: number;
    setScale: (scale: number) => void;
    reset: () => void;
}

const useMacbookStore = create<MacbookStore>((set) => ({
    color: '#2e2c2e',
    setColor: (color: string) => set({color}),

    scale: 0.08,
    setScale: (scale: number) => set({scale}),

    reset: () => set({color: '#2e2c2e', scale: 0.08})
}))

export default useMacbookStore

//this is a zustand store for managing the state of a MacBook product viewer