# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


para poder usar react - redux y sockets, es necesario si usar el context
pero de la siguiente manera 


<Provider store={store}> //el socket redux se pone primero
    <SocketProvider> //el socket provider ira despues
        <BrowserRouter> //estas seria ya dentro del proyecto
            <AppRouter/> // estas seria ya dentro del proyecto
        </BrowserRouter> // estas seria ya dentro del proyecto
    </SocketProvider>
</Provider>