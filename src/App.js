import { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Header() {
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
      </ol>
    </nav>
  );
}

function Article() {
  const [open, setOpen] = useState(false);
  return (
    <article>
      <h2>Welcome</h2>
      Lorem aldskfjdaskfjdaslkjfdsajfkladsjf dsfk jdasfidsajf alkj dfi jdsafli
      jdaslfi jdaslifjads iljasdilj Lorem aldskfjdaskfjdaslkjfdsajfkladsjf dsfk
      jdasfidsajf alkj dfi jdsafli jdaslfi jdaslifjads iljasdilj Lorem
      aldskfjdaskfjdaslkjfdsajfkladsjf dsfk jdasfidsajf alkj dfi jdsafli jdaslfi
      jdaslifjads iljasdilj
      <br></br>
      <br></br>
      <Stack direction="row" spacing={2} justifyContent="center">
        <ButtonGroup variant="contained">
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            Create
          </Button>
          <Button color="success">Success</Button>
        </ButtonGroup>
        <Button variant="contained" color="error">
          DELETE
        </Button>
      </Stack>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>타이틀</DialogTitle>
        <DialogContent>
          <DialogContentText>
            이곳은 바로 컨텐츠 텍스트입니다.
          </DialogContentText>
          <TextField
            label="Email Address"
            autoFocus
            fullWidth
            variant="standard"
          ></TextField>
        </DialogContent>
        {/* <TextField></TextField> */}
        <DialogActions>
          <Button variant="contained" color="success">
            생성
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              setOpen(false);
            }}
          >
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </article>
  );
}

function App() {
  return (
    <Container maxWidth="sm">
      <Header></Header>
      <Grid container>
        <Grid item sm={3}>
          <Nav></Nav>
        </Grid>
        <Grid item sm={9}>
          <Article></Article>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
