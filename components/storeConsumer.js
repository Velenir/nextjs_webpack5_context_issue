import { useStore } from "../store/context"


export const StoreConsumer = () => {
  const store = useStore()

  return (
    <div>
      <h3>Store data:</h3>
      <pre>{JSON.stringify(store, null, 2)}</pre>
    </div>
  )
}