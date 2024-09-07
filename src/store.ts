import { create } from "zustand"


const selectedCategoryStore = (set: any) => ({
    selectedCategory: "all",
    setSelectedCategory: (value: string) => set({ selectedCategory: value })
})
export const useSelectedCategory = create(selectedCategoryStore)
