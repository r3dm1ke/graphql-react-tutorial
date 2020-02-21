import React from 'react';
import IssueList from './IssueList';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Chip,
  makeStyles
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles({
  root: {
    marginTop: '1rem'
  },
  summaryContainer: {
    flexDirection: 'column',
  },
  summaryHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  },
  chip: {
    marginLeft: '0.5rem'
  }
});

const Repository = ({repo, expanded, onToggled}) => {
  const {node: {name, descriptionHTML, owner: {login}, stargazers: {totalCount: totalStarCount}}} = repo;
  const classes = useStyles();
  return (
    <ExpansionPanel
      expanded={expanded}
      onChange={onToggled}
      className={classes.root}
    >
      <ExpansionPanelSummary classes={{content: classes.summaryContainer}}>
        <div className={classes.summaryHeader}>
          <Typography variant={'h6'}>{name}</Typography>
          <div>
            <Chip label={`by ${login}`} avatar={<PeopleIcon/>} className={classes.chip}/>
            <Chip label={totalStarCount} avatar={<StarIcon/>} className={classes.chip}/>
          </div>
        </div>
        <Typography
          variant={'caption'}
          dangerouslySetInnerHTML={{__html: descriptionHTML}}
          component={'div'}
        />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {expanded && (<IssueList repoName={name} repoOwner={login}/>)}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Repository;
