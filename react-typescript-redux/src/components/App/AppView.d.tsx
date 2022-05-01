interface AppProps {
  current: number
  incrementAmount: number
  increment: () => void
  decrement: () => void
  reset: () => void
  setIncrement: (n: number) => void
}
