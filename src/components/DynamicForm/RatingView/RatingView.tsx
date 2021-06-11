import React, { useEffect, useState } from 'react';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { faCamera, faCheck, faComment, faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, IconButton, makeStyles, Theme } from '@material-ui/core';
import { ColorMaps } from '../../../config';

const useStyles = makeStyles((theme: Theme) => ( {
  clickable: {
    cursor: 'pointer',
    marginRight: theme.spacing(1)
  },
  icon: {
    marginRight: theme.spacing(1),
    cursor: 'pointer',
  },
  wrapper: {
    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  empty: {
    color: 'transparent',
  },
  filled: {
    color: theme.palette.primary.main,
  },
} ));

const RatingView = (props) => {
  const classes = useStyles();

  const [ ratings, setRatings ] = useState([] as any[]);

  const handleRatingClick = (value: number) => (e) => {
    if (props.onRatingClick) {
      props.onRatingClick(value);
    }
  };

  const handleNotesClick = () => {
    if (props.onNotesClick) {
      props.onNotesClick();
    }
  };

  const handlePhotoClick = () => {
    if (props.onPhotoClick) {
      props.onPhotoClick();
    }
  };

  useEffect(() => {
    const ratingNodes: React.ReactNode[] = [];

    if (props.style === 'stars') {
      for (let i = 1; i <= props.maxValue; i++) {
        ratingNodes.push(
          <FontAwesomeIcon key={ props.id + '_' + i }
                           icon={ props.value < i ? emptyStar : filledStar }
                           className={ classes.clickable }
                           onClick={ handleRatingClick(i) }
                           size='2x'
          />,
        );
      }
    }

    if (props.style === 'colors') {
      const index: number = ColorMaps.findIndex(x => x.name === props.colorMap);
      for (let i = 1; i <= props.maxValue; i++) {
        ratingNodes.push(
          <Button variant="contained"
                  className={ classes.clickable }
                  disableRipple
                  disableFocusRipple
                  onClick={ handleRatingClick(i) }
                  style={ { background: ColorMaps[ index ].getColor(( i - 1 ) / ( props.maxValue - 1 )) } }>
            <FontAwesomeIcon icon={ faCheck }
                             style={ { opacity: props.value === i ? 1 : 0 } }
            />
          </Button>
        );
      }
    }

    setRatings(ratingNodes);
  }, [ props ]);

  return (
    <div className={ classes.wrapper }>
      { ratings }
      <IconButton color="inherit" onClick={ () => { handleNotesClick() } }>
        <FontAwesomeIcon icon={ faComment }/>
      </IconButton>
      <IconButton color="inherit" onClick={ () => { handlePhotoClick() } }>
        <FontAwesomeIcon icon={ faCamera }/>
      </IconButton>
    </div>
  );
};

export default RatingView;
