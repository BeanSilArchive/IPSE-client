import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  box-sizing: border-box;
  display: flex;
  color: ${oc.gray[9]};

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

const ContentDiv = styled.div`
  width: 1700px;
  @media (max-width: 1700px) {
    width: 100%;
  }
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  height: 100%;
  padding-left: 50px;
  padding-right: 50px;
  box-sizing: border-box;
  flex-direction: column;

  h2 {
      margin: 0px;
    }
`;

const WhiteBox = styled.div`
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 5px rgba(0,0,0, 0.3);
    padding: 20px 20px 20px 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    align-items: center;
`

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: 20px;
  align-items: center;

`

const SubList = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 5px;

    span {
        padding-top: 20px;
        padding-bottom: 20px;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    h2 {
        margin-right: 30px;
    }
`

const Gradecalc = () => {
  const classes = useStyles();
  // Oo - 1학년 1학기
  // Ot - 1학년 2학기
  // To - 2학년 1학기
  // Tt - 2학년 2학기
  // Ho - 3학년 1학기
  const [values, setValues] = React.useState({
          OoP: '',
          OoR: '',
          OoU: '',
          OoK: '', 
          OoM: '',
          OoS: '',
          OoH: '',
          OoA: '',
          OoI: '',
          OoE: '',
          OoT: '',
          OtP: '',
          OtR: '',
          OtU: '',
          OtK: '', 
          OtM: '',
          OtS: '',
          OtH: '',
          OtA: '',
          OtI: '',
          OtE: '',
          OtT: '',
          ToP: '',
          ToR: '',
          ToU: '',
          ToK: '', 
          ToM: '',
          ToS: '',
          ToH: '',
          ToA: '',
          ToI: '',
          ToE: '',
          ToT: '',
          TtR: '',
          TtU: '',
          TtK: '', 
          TtK: '', 
          TtM: '',
          TtS: '',
          TtH: '',
          TtA: '',
          TtI: '',
          TtE: '',
          TtT: '',
          HoR: '',
          HoU: '',
          HoK: '', 
          HoK: '', 
          HoM: '',
          HoS: '',
          HoH: '',
          HoA: '',
          HoI: '',
          HoE: '',
          HoT: '',   

          DefaultGrade: 0,
          SubjectGrade: 0,
          AttenGrade: 30,
          VolunteerGrade: 0,
          TotalGrade: 0
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }
 
    return (
        <Wrapper>
            <ContentDiv>
                <h2>교과 성적 산출 - 자유 학기제 학기는 입력하지 마세요.</h2>
                <WhiteBox>
                    
                    <Row>
                        <SubList>
                            <span>국어</span>
                            <span>도덕</span>
                            <span>사회</span>
                            <span>역사</span>
                            <span>수학</span>
                            <span>과학</span>
                            <span>영어</span>
                            <span>기술가정</span>
                            <span>체육</span>
                            <span>미술</span>
                            <span>음악</span>
                        </SubList>
                        <Row>
                            <Dropdown>
                            <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OoK}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OoK',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                            <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OoM}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OoM',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                            <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OoS}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OoS',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                            <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OoH}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OoH',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                            <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OoA}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OoA',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                            <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OoI}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OoI',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                            <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OoE}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OoE',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                            <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OoT}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OoT',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>         
                            <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                              <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                                <Select
                                  value={values.OoP}
                                  onChange={handleChange}
                                  inputProps={{
                                    name: 'OoP',
                                    id: 'age-auto-width',
                                  }}
                                  autoWidth
                                >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={5}>A</MenuItem>
                              <MenuItem value={4}>B</MenuItem>
                              <MenuItem value={3}>C</MenuItem>
                              <MenuItem value={2}>D</MenuItem>
                              <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                            <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OoR}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OoR',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                            <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OoU}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OoU',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                    </Dropdown>
                            <Dropdown>
                            <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OtK}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OtK',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OtM}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OtM',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OtS}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OtS',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OtH}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OtH',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OtA}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OtA',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OtI}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OtI',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OtE}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OtE',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OtT}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OtT',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OtP}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OtP',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OtR}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OtR',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.OtU}
                              onChange={handleChange}
                              inputProps={{
                                name: 'OtU',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                   
                    </Dropdown>
                            <Dropdown>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.ToK}
                              onChange={handleChange}
                              inputProps={{
                                name: 'ToK',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.ToM}
                              onChange={handleChange}
                              inputProps={{
                                name: 'ToM',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.ToS}
                              onChange={handleChange}
                              inputProps={{
                                name: 'ToS',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.ToH}
                              onChange={handleChange}
                              inputProps={{
                                name: 'ToH',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.ToA}
                              onChange={handleChange}
                              inputProps={{
                                name: 'ToA',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.ToI}
                              onChange={handleChange}
                              inputProps={{
                                name: 'ToI',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.ToE}
                              onChange={handleChange}
                              inputProps={{
                                name: 'ToE',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.ToT}
                              onChange={handleChange}
                              inputProps={{
                                name: 'ToT',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.ToP}
                              onChange={handleChange}
                              inputProps={{
                                name: 'ToP',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.ToR}
                              onChange={handleChange}
                              inputProps={{
                                name: 'ToR',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.ToU}
                              onChange={handleChange}
                              inputProps={{
                                name: 'ToU',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                   
                    </Dropdown>
                            <Dropdown>
                            <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.TtK}
                              onChange={handleChange}
                              inputProps={{
                                name: 'TtK',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.TtM}
                              onChange={handleChange}
                              inputProps={{
                                name: 'TtM',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.TtS}
                              onChange={handleChange}
                              inputProps={{
                                name: 'TtS',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.TtH}
                              onChange={handleChange}
                              inputProps={{
                                name: 'TtH',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.TtA}
                              onChange={handleChange}
                              inputProps={{
                                name: 'TtA',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.TtI}
                              onChange={handleChange}
                              inputProps={{
                                name: 'TtI',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.TtE}
                              onChange={handleChange}
                              inputProps={{
                                name: 'TtE',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.TtT}
                              onChange={handleChange}
                              inputProps={{
                                name: 'TtT',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.TtP}
                              onChange={handleChange}
                              inputProps={{
                                name: 'TtP',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.TtR}
                              onChange={handleChange}
                              inputProps={{
                                name: 'TtR',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.TtU}
                              onChange={handleChange}
                              inputProps={{
                                name: 'TtU',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                   
                    </Dropdown>
                            <Dropdown>
                          <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.HoK}
                              onChange={handleChange}
                              inputProps={{
                                name: 'HoK',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.HoM}
                              onChange={handleChange}
                              inputProps={{
                                name: 'HoM',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.HoS}
                              onChange={handleChange}
                              inputProps={{
                                name: 'HoS',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.HoH}
                              onChange={handleChange}
                              inputProps={{
                                name: 'HoH',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.HoA}
                              onChange={handleChange}
                              inputProps={{
                                name: 'HoA',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.HoI}
                              onChange={handleChange}
                              inputProps={{
                                name: 'HoI',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.HoE}
                              onChange={handleChange}
                              inputProps={{
                                name: 'HoE',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.HoT}
                              onChange={handleChange}
                              inputProps={{
                                name: 'HoT',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.HoP}
                              onChange={handleChange}
                              inputProps={{
                                name: 'HoP',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.HoR}
                              onChange={handleChange}
                              inputProps={{
                                name: 'HoR',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{marginLeft: `20px`}}>
                        <InputLabel htmlFor="age-auto-width">성취도 등급</InputLabel>
                            <Select
                              value={values.HoU}
                              onChange={handleChange}
                              inputProps={{
                                name: 'HoU',
                                id: 'age-auto-width',
                              }}
                              autoWidth
                            >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>A</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={3}>C</MenuItem>
                            <MenuItem value={2}>D</MenuItem>
                            <MenuItem value={1}>E</MenuItem>
                            </Select>
                        </FormControl>
                    </Dropdown>
                        </Row>
                    </Row>
                </WhiteBox>
                <h2>출결 상황</h2>
                <WhiteBox>
                  <Row>
                  <SubList>
                    <span>1학년</span>
                    <span>2학년</span>
                    <span>3학년</span>
                  </SubList>
                  <Row>
                  <Dropdown>
                  <TextField
                    style={{marginRight: `20px`, marginBottom: `10px`}}
                    id="standard-dense"
                    label="미인정 결석"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                  />
                  <TextField
                    style={{marginRight: `20px`, marginBottom: `10px`}}
                    id="standard-dense"
                    label="미인정 결석"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                  />
                  <TextField
                    style={{marginRight: `20px`}}
                    id="standard-dense"
                    label="미인정 결석"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                  />
                  </Dropdown>
                  <Dropdown>
                  <TextField
                    style={{marginRight: `20px`, marginBottom: `10px`}}
                    id="standard-dense"
                    label="미인정 지각"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                  />
                  <TextField
                    style={{marginRight: `20px`, marginBottom: `10px`}}
                    id="standard-dense"
                    label="미인정 지각"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                  />
                  <TextField
                    style={{marginRight: `20px`}}
                    id="standard-dense"
                    label="미인정 지각"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                  />
                  </Dropdown>
                  <Dropdown>
                  <TextField
                    style={{marginRight: `20px`, marginBottom: `10px`}}
                    id="standard-dense"
                    label="미인정 조퇴"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                  />
                  <TextField
                    style={{marginRight: `20px`, marginBottom: `10px`}}
                    id="standard-dense"
                    label="미인정 조퇴"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                  />
                  <TextField
                    style={{marginRight: `20px`}}
                    id="standard-dense"
                    label="미인정 조퇴"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                  />
                  </Dropdown>
                  <Dropdown>
                  <TextField
                    style={{marginRight: `20px`, marginBottom: `10px`}}
                    id="standard-dense"
                    label="미인정 결과"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                  />
                  <TextField
                    style={{marginRight: `20px`, marginBottom: `10px`}}
                    id="standard-dense"
                    label="미인정 결과"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                  />
                  <TextField
                    style={{marginRight: `20px`}}
                    id="standard-dense"
                    label="미인정 결과"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                  />
                  </Dropdown>
                  </Row>
                  </Row>
                </WhiteBox>
                <h2>봉사 시간</h2>
                <WhiteBox>
                <Row>
                  <SubList>
                    <span>1학년</span>
                    <span>2학년</span>
                    <span>3학년</span>
                  </SubList>
                  <Row>
                  <Dropdown>
                  <TextField
                    style={{marginRight: `20px`, marginBottom: `10px`}}
                    id="standard-dense"
                    label="봉사 시간"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                  />
                  <TextField
                    style={{marginRight: `20px`, marginBottom: `10px`}}
                    id="standard-dense"
                    label="봉사 시간"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                  />
                  <TextField
                    style={{marginRight: `20px`}}
                    id="standard-dense"
                    label="봉사 시간"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                  />
                  </Dropdown>
                  
                  </Row>
                  </Row>
                </WhiteBox>
                <h2>성적 산출 결과</h2>
                <WhiteBox>
                <Row>
                  <SubList>
                    <span style={{marginBottom: `8px`}}>기본 점수</span>
                    <span style={{marginBottom: `8px`}}>교과 성적</span>
                    <span style={{marginBottom: `8px`}}>출석 성적</span>
                    <span style={{marginBottom: `8px`}}>봉사 활동</span>
                    <span style={{marginBottom: `8px`}}>총점</span>
                  </SubList>
                  <Row>
                  <Dropdown>
                  
                  <TextField
        disabled
        id="standard-disabled"
        label="기본 점수"
        defaultValue={values.DefaultGrade}
        className={classes.textField}
        margin="normal"
      />
      <TextField
        disabled
        id="standard-disabled"
        label="교과 점수"
        defaultValue={values.SubjectGrade}
        className={classes.textField}
        margin="normal"
      />
      <TextField
        disabled
        id="standard-disabled"
        label="출석 점수"
        defaultValue={values.AttenGrade}
        className={classes.textField}
        margin="normal"
      />
      <TextField
        disabled
        id="standard-disabled"
        label="봉사 점수"
        defaultValue={values.VolunteerGrade}
        className={classes.textField}
        margin="normal"
      />
      <TextField
        disabled
        id="standard-disabled"
        label="총 점수"
        defaultValue={values.TotalGrade}
        className={classes.textField}
        margin="normal"
      />
                  </Dropdown>
                  
                  </Row>
                  </Row>
                
                </WhiteBox>
            </ContentDiv>
        </Wrapper>
    );
}

export default Gradecalc;