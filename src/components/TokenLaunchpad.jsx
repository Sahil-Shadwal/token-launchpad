import Button from "./Button";
import Input from "./Input";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";

import {
  createInitializeMint2Instruction,
  getMinimumBalanceForRentExemptMint,
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export function TokenLaunchpad() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function createToken() {
    // const name = document.getElementById("name").value;
    // const symbol = document.getElementById("symbol").value;
    // const image = document.getElementById("image").value;
    // const initialSupply = document.getElementById("initialSupply").value;

    // createMint();
    const lamports = await getMinimumBalanceForRentExemptMint(connection);
    const keypair = Keypair.generate();

    const transaction = new Transaction().add(
      SystemProgram.createAccount({
        fromPubkey: wallet.publicKey,
        newAccountPubkey: keypair.publicKey,
        space: MINT_SIZE,
        lamports,
        programId: TOKEN_PROGRAM_ID,
      }),

      createInitializeMint2Instruction(
        keypair.publicKey,
        6,
        wallet.publicKey,
        wallet.publicKey,
        TOKEN_PROGRAM_ID
      )
    );

    const recentBlockhash = await connection.getLatestBlockhash();
    transaction.recentBlockhash = recentBlockhash.blockhash;
    transaction.feePayer = wallet.publicKey;

    transaction.partialSign(keypair);
    wallet.sendTransaction(transaction, connection);
  }
  return (
    <div>
      <div className=" p-20 flex flex-col items-center justify-center gap-2">
        <h1 className="mb-10 text-6xl text-cyan-50">Solana Token Launchpad</h1>
        <Input placeholder="Name"></Input>
        <Input placeholder="Symbol"></Input>
        <Input placeholder="Image URL"></Input>
        <Input placeholder="Initial Supply"></Input>
        <Button onClick={createToken}></Button>
      </div>
    </div>
  );
}
