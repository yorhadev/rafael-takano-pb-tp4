import classes from "./SignUp.module.css";
import { Button, TextField } from "../../inputs";
import { Card } from "../../surfaces";

export default function SignUp() {
  return (
    <Card>
      <div className={classes.signup}>
        <h1>Cadastrar</h1>
        <form>
          <TextField labelName="Nome" placeholder="Alan Turing" />
          <TextField labelName="E-mail" placeholder="exemplo@email.com" />
          <TextField labelName="Senha" placeholder="**********" />
          <Button>Cadastrar</Button>
        </form>
      </div>
    </Card>
  );
}
