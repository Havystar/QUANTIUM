import { Chat } from "./components/Chat";
import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./http/client";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <section>
        <Chat />
      </section>
    </QueryClientProvider>
  );
}

export default App;
