import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import itemData from './itemData';
import imgOsaka from './img_osaka.jpg';
import AddIcon from '@material-ui/icons/Add';
import {
  Box,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  addIcon: {
    width: 50,
    height: 50,
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TitlebarImageList(props) {
  const classes = useStyles();
  var itemData = [];
  for(var i = 0; i < 5; i++){
    var item = {
      img: imgOsaka,
      title: 'Osaka',
      author: 'author',
    }
    itemData.push(item);
  }
  const {spots} = props;
  if(spots == null) return(null);

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
        {spots.map((item) => (
          <ImageListItem key={item.photos == null ? null: item.photos[0].getUrl()}>
            <img src={item.photos == null ? null: item.photos[0].getUrl()} alt={item.name} />
            <ImageListItemBar
              title={item.name}
              subtitle={<span>by: {item.name}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.name}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
        <ImageListItem>
          <Box display='flex' justifyContent='center' alignItems="center" height='100%'>
          <IconButton onClick={props.onClick}>
            <AddIcon fontSize='large' className={classes.addIcon}/>
          </IconButton>
          </Box>
        </ImageListItem>
      </ImageList>
    </div>
  );
}
