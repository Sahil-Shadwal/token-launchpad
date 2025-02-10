import Button from "./Button";
import Input from "./Input";

export function TokenLaunchpad() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="mb-10">Solana Token Launchpad</h1>
        <Input placeholder="Name"></Input>
        <Input placeholder="Symbol"></Input>
        <Input placeholder="Image URL"></Input>
        <Input placeholder="Initial Supply"></Input>
        <Button></Button>
      </div>
    </div>
  );
}
