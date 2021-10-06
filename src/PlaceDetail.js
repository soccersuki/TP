import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Chip, Fab, } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles';

import RoomIcon from '@material-ui/icons/Room';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PhoneIcon from '@material-ui/icons/Phone';
import PublicIcon from '@material-ui/icons/Public';
import SearchIcon from '@material-ui/icons/Search';

import { useContext, useEffect, useState, } from 'react';
import { AppContext } from './MyContext'

import { getDetail } from './funcs/googleMapAPI';

import { Card, CardHeader, CardContent, Avatar, ListSubheader} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  img: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
  }
}));

export default function PlaceDetail(props){
  const {place} = props;
  const classes = useStyles();
  const { google, map, plan, setPlan, } = useContext(AppContext);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    console.log(place)
    if(place == null) return;
    (async() => {
      const fields = ['opening_hours', 'formatted_phone_number', 'website', 'url', 'reviews']
      const detail = await getDetail(google, map, place.place_id, fields)
      setDetail(detail)
      console.log(detail)
    })()
  }, [])

  if(place == null) return;

  return(
    <Box className={classes.root}>
      <img src={place.photos == null ? null: place.photos[0].getUrl()} className={classes.img}/>
      <Box>
        <Box mx={2}>
        <Typography gutterBottom variant="h5" component="h2">
          {place.name}
        </Typography>
        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
          <Box display="flex" alignItems="center">
            {place.rating}
            <Rating name="read-only" value={place.rating} precision={0.5} readOnly size='small' />
            ({place.user_ratings_total})
          </Box>
        </Typography>
        </Box>
        <List>
          <ListItem button divider>
            <ListItemIcon>{<RoomIcon/>}</ListItemIcon>
            <ListItemText primary={<Typography variant='body2' style={{padding: '5px 0'}}>{place.formatted_address}</Typography>} />
          </ListItem>
          <ListItem button divider>
            <ListItemIcon>{<AccessTimeIcon />}</ListItemIcon>
            <ListItemText primary={<Typography variant='body2' style={{padding: '5px 0'}}>{'営業中'}</Typography>} />
          </ListItem>
          {detail != null && detail.formatted_phone_number != null && (
            <ListItem button divider>
              <ListItemIcon>{<PhoneIcon />}</ListItemIcon>
              <ListItemText primary={<Typography variant='body2' style={{padding: '5px 0'}}>{detail.formatted_phone_number}</Typography>} />
            </ListItem>
          )}
          {detail != null && detail.website != null && (
            <ListItem divider>
              <ListItemIcon>{<PublicIcon />}</ListItemIcon>
              <ListItemText primary={<Typography variant='body2' noWrap style={{padding: '5px 0'}}>{detail.website}</Typography>} />
            </ListItem>
          )}
          <ListItem button divider>
            <ListItemIcon>{<SearchIcon />}</ListItemIcon>
            <ListItemText primary={<Typography variant='body2' style={{padding: '5px 0'}}>{'googleで検索'}</Typography>} />
          </ListItem>
        </List>
        <Box my={2}>
        <List subheader={<ListSubheader disableSticky><Typography variant='h6'>クチコミ</Typography></ListSubheader>}>
          {detail?.reviews?.map?.(review => (
            <ListItem divider ><MyCard review={review}/></ListItem>
          ))}
        </List>
        </Box>
      </Box>
    </Box>
  )
}


function MyCard(props){
  const {review} = props
  return(
    <Box>
    <Box display='flex'alignItems="center">
      <Avatar aria-label="recipe" src={review.profile_photo_url}/>
      <Typography style={{marginLeft: 10}}>{review.author_name}</Typography>
    </Box>
    {<Rating name="read-only" value={review.rating} precision={0.5} readOnly size='small' />}
    <Typography variant='body2'>{review.text}</Typography>
    </Box>
  )
}
