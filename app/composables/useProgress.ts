import { useLocalStorage } from "@vueuse/core"
import { puzzles } from "./usePuzzles"

export function useProgress() {
  const solvedIds = useLocalStorage<number[]>("regex-cafe-solved", [])

  function isSolved(id: number): boolean {
    return solvedIds.value.includes(id)
  }

  function markSolved(id: number) {
    if (!solvedIds.value.includes(id)) {
      solvedIds.value = [...solvedIds.value, id]
    }
  }

  const solvedCount = computed(() => solvedIds.value.length)
  const totalPuzzles = puzzles.length
  const progressPercent = computed(() => Math.round((solvedCount.value / totalPuzzles) * 100))

  return {
    solvedIds,
    isSolved,
    markSolved,
    solvedCount,
    totalPuzzles,
    progressPercent,
  }
}
