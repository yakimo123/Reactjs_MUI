import Container  from "@mui/material/Container"
import AppBar from "../../components/AppBar"

function Board() {
  return (
    <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh'
    }}>
        <AppBar />        
    </Container>
    )
}

export default Board