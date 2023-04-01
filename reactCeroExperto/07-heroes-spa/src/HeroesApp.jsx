import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"
// test
export const HeroesApp = () => {
  return (
    <AuthProvider>
        <AppRouter/>
    </AuthProvider>
  )
}