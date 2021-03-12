import logo from './logo.svg';
import {Typography, AppBar, Card, Button, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons';
//import { makeStyles } from '@material-ui/core/styles'
import useStyles from './styles'
import './App.css';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function App() {
  const classes = useStyles()
  return (
    <>
      <CssBaseline/>
      <AppBar position="relative">
          <Toolbar>
             <PhotoCamera className={classes.icon}/>
             <Typography variant="h6">
                Photo Album
             </Typography>
          </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
            <Container maxWidth="sm">
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                  Photo Album
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  The quick brown fox jumoed over the lazy dogs, the quick brown fox jumped over the lazy dogs
              </Typography>
              <div className={classes.buttons}>
                <Grid container spacing={2} justify="center">
                   <Grid item>
                     <Button variant="contained" color="primary">
                       See my photos
                     </Button>
                   </Grid>
                   <Grid item>
                     <Button variant="outlined" color="primary">
                       Secondary action
                     </Button>
                   </Grid>
                </Grid>
              </div>
            </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map(()=>(
               <Grid item xs={12} sm={6} md={4}>
               <Card className={classes.card}>
                  <CardMedia
                     className={classes.cardMedia}
                     image='https://source.unsplash.com/random'
                     title="image title"
                  />
                  <CardContent className={classes.cardContent}>
                       <Typography gutterBottom variant='h5'>
                           Heading
                       </Typography>
                       <Typography>
                           This is a media card. You can use this section to describe the content
                       </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>View</Button>
                    <Button size='small' color='primary'>Edit</Button>
                  </CardActions>
               </Card>
             </Grid>
            ))}
            
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center">
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color='textSecondary'>
        Something here is suppused to give purpose
        </Typography>
      </footer>
    </>
  );
}

export default App;
