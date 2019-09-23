import React, { useReducer, useState } from "react";
import styled from "styled-components";
import * as Appli from "api/application";

import SchoolItem from "./SchoolItem";

import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const Positioner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
`;

const Wrapper = styled.div`
  width: 1000px;
  height: 800px;
  margin: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px;

  label {
    color: black;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const Result = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  width: 100%;

  tbody {
    display: flex;
    width: 100%;
    #school {
      flex: 1;
    }
    #address {
      flex: 2;
    }
  }
`;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: `100%`,
    height: `50px`
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    height: `30px`
  },
  iconButton: {
    paddingTop: `35px`
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

const School = ({ setModal, setSchoolName, setSeq }) => {
  const classes = useStyles();
  function reducer(state, action) {
    return {
      ...state,
      [action.name]: action.value
    };
  }

  const [state, dispatch] = useReducer(reducer, {
    searchText: ""
  });

  const { searchText } = state;

  const [List, SetList] = useState([{}]);

  const onChange = e => {
    dispatch(e.target);
    // console.log("====================================");
    // console.log(searchText);
    // console.log("====================================");
  };

  const Onsubmit = e => {
    e.preventDefault();
    Appli.schoolSearch({ searchText })
      .then(result => {
        SetList(result.data.list);
        // console.log("====================================");
        // console.log(List);
        // console.log("====================================");
      })
      .catch(result => {
        console.log(result);
      });
  };

  return (
    <Positioner>
      <Wrapper>
        <form onSubmit={Onsubmit}>
          <Paper className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="학교 이름으로 검색해 보세요"
              name="searchText"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={onChange}
            />
            <IconButton
              className={classes.iconButton}
              aria-label="search"
              onClick={Onsubmit}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </form>
        <Result>
          <tbody style={{ marginTop: `20px` }}>
            <th id="school">학교이름</th>
            <th id="address">주소</th>
          </tbody>
          {List.map((item, i) => {
            if (List === null && List === undefined) {
              return false;
            } else {
              return (
                <SchoolItem
                  schoolName={item.school_name}
                  address={item.address}
                  seq={item.seq}
                  setModal={setModal}
                  setSchoolName={setSchoolName}
                  setSeq={setSeq}
                />
              );
            }
          })}
        </Result>
      </Wrapper>
    </Positioner>
  );
};

export default School;
