import classes from "./SignIn.module.css";
import { Button, TextField } from "../../inputs";
import { Card } from "../../surfaces";

export default function SignIn() {
  return (
    <Card>
      <div className={classes.signin}>
        <h1>Entrar</h1>
        <form>
          <TextField labelName="E-mail" placeholder="exemplo@email.com" />
          <TextField labelName="Senha" placeholder="**********" />
          <Button>Entrar</Button>
        </form>
      </div>
    </Card>
  );
}
