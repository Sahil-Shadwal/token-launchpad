import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import "./App.css";
import { TokenLaunchpad } from "./components/TokenLaunchpad";

function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage:
          "url('https://cdnb.artstation.com/p/assets/images/images/065/778/947/large/alena-aenami-serenity-1k.jpg?1691184550')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="justify-end flex p-4">
              <WalletMultiButton />
              {/* <WalletDisconnectButton /> */}
            </div>
            <TokenLaunchpad></TokenLaunchpad>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App;
