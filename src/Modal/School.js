import React, { useReducer, useState } from "react";
import styled from 'styled-components';
import * as Appli from "api/application";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  label {
      color: black;
  }

`;

const Result = styled.div`
    margin-right: 20px;
    margin-left: 20px;
    width: 100%;
    
    tbody {
        display: flex;
        width: 100%;
        th {
            flex: 1;
        }
    }
`

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    marginTop: `10px`,
    marginLeft: `10px`,
    marginRight: `10px`,
    width: `98.5%`
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));


const School = () => {
  const classes = useStyles();
    function reducer(state, action) {
        return {
          ...state,
          [action.name]: action.value
        };
      }
    
      const [state, dispatch] = useReducer(reducer, {
        searchText: ''
      });
    
      const { searchText } = state;

      const [List, SetList] = useState([{

      }]);
    
      const onChange = e => {
        dispatch(e.target);
        console.log('====================================');
        console.log(searchText);
        console.log('====================================');
      };

       const Onsubmit = e => {
        e.preventDefault();
        Appli
        .schoolSearch({ searchText })
        .then(result => {
          SetList(result.data.list);
          console.log('====================================');
          console.log(List);
          console.log('====================================');
        })
        .catch(result => {
          console.log(result);
        });
       }

    return (
        <Wrapper>
            <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        name="searchText"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={onChange}
      />
      <IconButton className={classes.iconButton} aria-label="search" onClick={Onsubmit}>
        <SearchIcon
         
         />
      </IconButton>
    </Paper>
            <Result>
                <tbody style={{marginTop: `20px`}}>
                    <th>학교이름</th>
                    <th>주소</th>
                </tbody>
                {List.map((item, i) => {
                  if ( List === null && List === undefined) {
                    return false;
                  }else {
                    return (
                      <tbody style={{marginTop: `20px`}}>
                  <th>{item.school_name}</th>
                  <th>{item.address}</th>
                </tbody>
                    );
                  }
                })}
            </Result>
        </Wrapper>
    )
}

export default School;