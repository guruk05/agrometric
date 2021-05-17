import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";
import Container from "@material-ui/core/Container";
import icon from "./icon.png";
import { Card, Grid } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  roots: {
    width: 320,
    height: 690,
    margin: ".65rem",
    padding: "10px",
  },
  root: {
    overflow: "hidden",
    width: theme.spacing(17),
    height: theme.spacing(42), //12
    borderRadius: 10,
    alignContent: "center",
    justify: "center",
    spacing: "5px",
    margin: ".4rem",
  },
  rootsss: {
    width: theme.spacing(44.7),
    height: theme.spacing(72),
  },
  size: {
    width: theme.spacing(44.7),
    height: theme.spacing(88),
  },
  titles: {
    fontSize: 10,
    textAlign: "right",
  },

  rootss: {
    flexGrow: 1,
  },
  title: {
    fontSize: 11,
    textAlign: "left",
  },
  pos: {
    textAlign: "left",
  },
  pos1: {
    margin: "5px -12px",

    textAlign: "right",
    color: "grey",
  },
  pos2: {
    textAlign: "right",
    flex: 1,
    color: "grey",
    fontSize: "15px",
  },
  margins: {
    fontSize: "13px",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#196f3d",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    margin: theme.spacing(1),
    backgroundColor: "#196f3d",
    borderRadius: "25px",
    color: "#fbfcfc",
    textTransform: "none",
  },
  back: {
    float: "left",
    color: " #145a32",
    fontSize: "12px",
  },
  backs: {
    float: "left",
    fontSize: "12px",
  },
  continue: {
    float: "right",
    color: "grey",
  },
  continues: {
    fontSize: "12px",
    float: "right",
    color: "grey",
  },
  rootd: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  input: {
    display: "none",
  },
}));

export const Camera = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [change, setChange] = useState(true);
  const [preview, setPreview] = useState();
  const [state, setState] = useState([{}]);

  useEffect(() => {
    if (state.length > 0) {
      console.log("state" + ":" + JSON.stringify(state[2]));
    }
    // console.log("state" + ":" + JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    console.log("change" + ":" + change);
  }, [change]);

  const Prints = () => (
    <div>
      <h1 style={{ color: "#006400", marginLeft: "370px" }}>CARDMOM DATA</h1>
      <table style={{ fontSize: "7px" }}>
        <h3>IMAGE ANALYSIS</h3>
        <tr>
          <td>Parameters</td>
          <td>Measurement</td>
        </tr>
        <tr>
          <td>count</td>
          <td>
            {/* {state.map(d => {
                          return (
                              <div  key={d}>
                                  {d[1].Count}
                              </div>
                          );
                      })


                      } */}

            <div>
              {/* {state.map(d=> {
                      return ( */}
              <div key={state.d}>{state[1].Count}</div>
              {/* );
                    })} */}
            </div>
          </td>
        </tr>
        <tr>
          <td>average length</td>
          <td>
            {/* {state.map(d => {
                          return ( */}
            <div key={state.d}>{state[1].Average_Length}</div>
            {/* );
                      })
                      } */}
          </td>
        </tr>
        <tr>
          <td>average diameter</td>
          <td>
            {/* {state.map(d => {
                          return ( */}
            <div key={state.d}>{state[1]["Average_Circumference_Dia "]}</div>
            {/* );
                      })
                      } */}

            {/* {state.map(d=> {
                      return (
                        <div key={d}>
                          {state[1].Count}<span><b style={{ color: " #145a32", fontSize: "11px" }}></b></span>
                          <div className={classes.pos1}>
                            <Tooltip title={state[1].Count} arrow>
                              <InfoOutlinedIcon style={{ fontSize: "15px" }} />
                            </Tooltip>
                          </div>
                        </div>
                      );
                    })} */}
          </td>
        </tr>
      </table>
      <table style={{ fontSize: "7px", marginLeft: "50px", spacing: "50px" }}>
        <tr>
          <h3>RANGE ANALYSIS</h3>
          <td>Range</td>
          <td>seeds</td>
          <td>Total</td>
          <td>%of Total</td>
          <td>%not Broken</td>
          <td>Current</td>
          <td>Forecast</td>
        </tr>
        <tr>
          <td>
            <div>Range:8mm</div>
          </td>
          <td>
            {/* {data.range8mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Range : 8+"][0]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range8mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Total : "][0]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range8mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Range : 8+"][1]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range8mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Range : 8+"][2]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range8mm.map((a, index) => {
                          return ( */}
            <div>NA</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range8mm.map((a, index) => {
                          return ( */}
            <div>NA</div>
            {/* );
                      })
                      } */}
          </td>
        </tr>
        <tr>
          <td>
            <div>Range:7.5-8.0mm</div>
          </td>
          <td>
            {/* {data.range75mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Range : 7.5 - 8"][0]}</div>

            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range75mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Total : "][0]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range75mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Range : 7.5 - 8"][1]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range75mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Range : 7.5 - 8"][2]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range75mm.map((a, index) => {
                          return ( */}
            <div>NA</div>

            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range75mm.map((a, index) => {
                          return ( */}
            <div>NA</div>

            {/* );
                      })
                      } */}
          </td>
        </tr>
        <tr>
          <td>
            <div>Range:7.0-7.5mm</div>
          </td>
          <td>
            {/* {data.range70mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Range : 7 - 7.5"][0]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range70mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Total : "][0]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range70mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Range : 7 - 7.5"][1]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range70mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Range : 7 - 7.5"][2]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range70mm.map((a, index) => {
                          return ( */}
            <div>NA</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range70mm.map((a, index) => {
                          return ( */}
            <div>NA</div>
            {/* );
                      })
                      } */}
          </td>
        </tr>
        <tr>
          <td>
            <div>Range:6.5-7.0mm</div>
          </td>
          <td>
            {/* {data.range65mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Range : 6.5 - 7"][0]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range65mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Total : "][0]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range65mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Range : 6.5 - 7"][1]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range65mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Range : 6.5 - 7"][2]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range65mm.map((a, index) => {
                          return ( */}
            <div>NA</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range65mm.map((a, index) => {
                          return ( */}
            <div>NA</div>
            {/* );
                      })
                      } */}
          </td>
        </tr>
        <tr>
          <td>
            <div>Range:6-6.5mm</div>
          </td>
          <td>
            {/* {data.range60mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Range : 6 - 6.5"][1]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range60mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Total : "][0]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range60mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Range : 6 - 6.5"][1]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range60mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Range : 6 - 6.5"][2]}</div>

            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range60mm.map((a, index) => {
                          return ( */}
            <div>NA</div>

            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range60mm.map((a, index) => {
                          return ( */}
            <div>NA</div>
            {/* );
                      })
                      } */}
          </td>
        </tr>
        <tr>
          <td>
            <div>Range:0-6mm</div>
          </td>
          <td>
            {/* {data.range06mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Range : 0 - 6 (broken)"][1]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range06mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Total : "][0]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range06mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Range : 0 - 6 (broken)"][1]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range06mm.map((a, index) => {
                          return ( */}
            <div>{state[2]["Range : 0 - 6 (broken)"][2]}</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range06mm.map((a, index) => {
                          return ( */}
            <div>NA</div>
            {/* );
                      })
                      } */}
          </td>
          <td>
            {/* {data.range06mm.map((a, index) => {
                          return ( */}
            <div>NA</div>
            {/* );
                      })
                      } */}
          </td>
        </tr>
      </table>
      {/* <div style={{ padding: "100px", spacing: "200px" }}>
              <table style={{ fontSize: "7px", marginLeft: "50px" }}>
                  <tr>
                      <h3>MOISTURE ANALYSIS</h3>
                      <td>Range</td>
                      <td>seeds</td>
                      <td>Total</td>
                      <td>%of Total</td>
                      <td>%not Broken</td>
                      <td>Current</td>
                      <td>Forecast</td>
                  </tr>
                  <tr>
                      <td>
                          <div>
                              Moisture:&lt;10%
      </div>
                      </td>
                      <td>
                          {data.moisture10.map((a, index) => {
                              return (
                                  <div>
                                      {a.seeds}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture10.map((a, index) => {
                              return (
                                  <div>
                                      {a.number}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture10.map((a, index) => {
                              return (
                                  <div>
                                      {a.percentage1}
                                  </div>
                              );
                          })
                          }
    
                      </td>
                      <td>
                          {data.moisture10.map((a, index) => {
                              return (
                                  <div>
                                      {a.percentage}
                                  </div>
    
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture10.map((a, index) => {
                              return (
                                  <div>
                                      {a.current}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture10.map((a, index) => {
                              return (
                                  <div>
                                      {a.forecast}
                                  </div>
                              );
                          })
                          }
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <div>
                              Moisture:8-10%
      </div>
                      </td>
                      <td>
                          {data.moisture8.map((a, index) => {
                              return (
                                  <div>
                                      {a.seeds}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture8.map((a, index) => {
                              return (
                                  <div>
                                      {a.number}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture8.map((a, index) => {
                              return (
                                  <div>
                                      {a.percentage1}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture8.map((a, index) => {
                              return (
                                  <div>
                                      {a.percentage}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture8.map((a, index) => {
                              return (
                                  <div>
                                      {a.current}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture8.map((a, index) => {
                              return (
                                  <div>
                                      {a.forecast}
                                  </div>
                              );
                          })
                          }
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <div>
                              Moisture:6-8%
      </div>
                      </td>
                      <td>
                          {data.moisure6.map((a, index) => {
                              return (
                                  <div>
                                      {a.seeds}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisure6.map((a, index) => {
                              return (
                                  <div>
                                      {a.number}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisure6.map((a, index) => {
                              return (
                                  <div>
                                      {a.percentage1}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisure6.map((a, index) => {
                              return (
                                  <div>
                                      {a.percentage}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisure6.map((a, index) => {
                              return (
                                  <div>
                                      {a.current}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisure6.map((a, index) => {
                              return (
                                  <div>
                                      {a.forecast}
                                  </div>
                              );
                          })
                          }
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <div>
                              Moisture:4-6%
      </div>
                      </td>
                      <td>
                          {data.moisture4.map((a, index) => {
                              return (
                                  <div>
                                      {a.seeds}
                                  </div>
    
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture4.map((a, index) => {
                              return (
                                  <div>
                                      {a.number}
                                  </div>
    
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture4.map((a, index) => {
                              return (
                                  <div>
                                      {a.percentage1}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture4.map((a, index) => {
                              return (
                                  <div>
                                      {a.percentage}
                                  </div>
    
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture4.map((a, index) => {
                              return (
                                  <div>
                                      {a.current}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture4.map((a, index) => {
                              return (
                                  <div>
                                      {a.forecast}
                                  </div>
                              );
                          })
                          }
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <div>
                              Moisture:2-4%
      </div>
                      </td>
                      <td>
                          {data.moisture24.map((a, index) => {
                              return (
                                  <div>
                                      {a.seeds}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture24.map((a, index) => {
                              return (
                                  <div>
                                      {a.number}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture24.map((a, index) => {
                              return (
                                  <div>
                                      {a.percentage1}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture24.map((a, index) => {
                              return (
                                  <div>
                                      {a.percentage}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture24.map((a, index) => {
                              return (
                                  <div>
                                      {a.current}
                                  </div>
                              );
                          })
                          }
                      </td>
                      <td>
                          {data.moisture24.map((a, index) => {
                              return (
                                  <div>
                                      {a.forecast}
                                  </div>
    
                              );
                          })
                          }
    
    
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <div>
                              Moisture:&lt;2%
      </div>
    
    
    
    
    
    
                      </td>
                      <td>
                          {data.moisture1.map((a, index) => {
                              return (
    
    
    
    
                                  <div>
                                      {a.seeds}
                                  </div>
    
                              );
                          })
                          }
    
    
                      </td>
                      <td>
                          {data.moisture1.map((a, index) => {
                              return (
    
    
    
    
                                  <div>
                                      {a.number}
                                  </div>
    
                              );
                          })
                          }
    
    
                      </td>
                      <td>
                          {data.moisture1.map((a, index) => {
                              return (
    
    
    
    
                                  <div>
                                      {a.percentage1}
                                  </div>
    
                              );
                          })
                          }
    
    
                      </td>
                      <td>
                          {data.moisture1.map((a, index) => {
                              return (
    
    
    
    
                                  <div>
                                      {a.percentage}
                                  </div>
    
                              );
                          })
                          }
    
    
                      </td>
                      <td>
                          {data.moisture1.map((a, index) => {
                              return (
    
    
    
    
                                  <div>
                                      {a.current}
                                  </div>
    
                              );
                          })
                          }
    
    
                      </td>
                      <td>
                          {data.moisture1.map((a, index) => {
                              return (
    
    
    
    
                                  <div>
                                      {a.forecast}
                                  </div>
    
                              );
                          })
                          }
    
    
                      </td>
                  </tr>
              </table>
          </div>
          <table style={{ fontSize: "7px", marginLeft: "50px", height: "300px" }}>
    
              <tr>
                  <h3>COLOR ANALYSIS</h3>
                  <td>Range</td>
                  <td>seeds</td>
                  <td>Total</td>
                  <td>%of Total</td>
                  <td>%not Broken</td>
                  <td>Current</td>
                  <td>Forecast</td>
              </tr>
    
              <tr>
                  <td>
                      <div>
                          Jumbo Green
      </div>
    
    
    
    
    
    
                  </td>
                  <td>
                      {data.jumboGreen.map((a, index) => {
                          return (
    
    
    
    
                              <div>
                                  {a.seeds}
                              </div>
    
                          );
                      })
                      }
    
    
                  </td>
                  <td>
                      {data.jumboGreen.map((a, index) => {
                          return (
    
    
    
    
                              <div>
                                  {a.number}
                              </div>
    
                          );
                      })
                      }
    
    
                  </td>
                  <td>
                      {data.jumboGreen.map((a, index) => {
                          return (
    
    
    
    
                              <div>
                                  {a.percentage1}
                              </div>
    
                          );
                      })
                      }
    
    
                  </td>
                  <td>
                      {data.jumboGreen.map((a, index) => {
                          return (
    
    
    
    
                              <div>
                                  {a.percentage}
                              </div>
    
                          );
                      })
                      }
    
    
                  </td>
                  <td>
                      {data.jumboGreen.map((a, index) => {
                          return (
    
    
    
    
                              <div>
                                  {a.current}
                              </div>
    
                          );
                      })
                      }
    
    
                  </td>
                  <td>
                      {data.jumboGreen.map((a, index) => {
                          return (
    
    
    
    
                              <div>
                                  {a.forecast}
                              </div>
    
                          );
                      })
                      }
    
    
                  </td>
              </tr>
              <tr>
                  <td>
                      <div>
                          Imperial Best Green
      </div>
    
    
    
    
    
    
                  </td>
                  <td>
                      {data.imperialbestGreen.map((a, index) => {
                          return (
    
    
    
    
                              <div>
                                  {a.seeds}
                              </div>
    
                          );
                      })
                      }
    
    
                  </td>
                  <td>
                      {data.imperialbestGreen.map((a, index) => {
                          return (
    
    
    
    
                              <div>
                                  {a.number}
                              </div>
    
                          );
                      })
                      }
    
    
                  </td>
                  <td>
                      {data.imperialbestGreen.map((a, index) => {
                          return (
    
    
    
    
                              <div>
                                  {a.percentage1}
                              </div>
    
                          );
                      })
                      }
    
    
                  </td>
                  <td>
                      {data.imperialbestGreen.map((a, index) => {
                          return (
                              <div>
                                  {a.percentage}
                              </div>
    
                          );
                      })
                      }
                  </td>
                  <td>
                      {data.imperialbestGreen.map((a, index) => {
                          return (
                              <div>
                                  {a.current}
                              </div>
    
                          );
                      })
                      }
                  </td>
                  <td>
                      {data.imperialbestGreen.map((a, index) => {
                          return (
                              <div>
                                  {a.forecast}
                              </div>
    
                          );
                      })
                      }
    
    
                  </td>
              </tr>
              <tr>
                  <td>
                      <div>
                          Fancy Green
      </div>
                  </td>
                  <td>
                      {data.fancyGreen.map((a, index) => {
                          return (
                              <div>
                                  {a.seeds}
                              </div>
    
                          );
                      })
                      }
                  </td>
                  <td>
                      {data.fancyGreen.map((a, index) => {
                          return (
                              <div>
                                  {a.number}
                              </div>
    
                          );
                      })
                      }
                  </td>
                  <td>
                      {data.fancyGreen.map((a, index) => {
                          return (
                              <div>
                                  {a.percentage1}
                              </div>
    
                          );
                      })
                      }
                  </td>
                  <td>
                      {data.fancyGreen.map((a, index) => {
                          return (
                              <div>
                                  {a.percentage}
                              </div>
                          );
                      })
                      }
    
                  </td>
                  <td>
                      {data.fancyGreen.map((a, index) => {
                          return (
    
    
    
    
                              <div>
                                  {a.current}
                              </div>
    
                          );
                      })
                      }
    
    
                  </td>
                  <td>
                      {data.fancyGreen.map((a, index) => {
                          return (
    
    
    
    
                              <div>
                                  {a.forecast}
                              </div>
    
                          );
                      })
                      }
    
    
                  </td>
              </tr>
              <tr>
                  <td>
                      <div>
                          Mixed Green
      </div>
                  </td>
                  <td>
                      {data.mixedGreen.map((a, index) => {
                          return (
                              <div>
                                  {a.seeds}
                              </div>
    
                          );
                      })
                      }
                  </td>
                  <td>
                      {data.mixedGreen.map((a, index) => {
                          return (
                              <div>
                                  {a.number}
                              </div>
                          );
                      })
                      }
                  </td>
                  <td>
                      {data.mixedGreen.map((a, index) => {
                          return (
                              <div>
                                  {a.percentage1}
                              </div>
                          );
                      })
                      }
                  </td>
                  <td>
                      {data.mixedGreen.map((a, index) => {
                          return (
                              <div>
                                  {a.percentage}
                              </div>
                          );
                      })
                      }
                  </td>
                  <td>
                      {data.mixedGreen.map((a, index) => {
                          return (
                              <div>
                                  {a.current}
                              </div>
    
                          );
                      })
                      }
    
    
                  </td>
                  <td>
                      {data.mixedGreen.map((a, index) => {
                          return (
                              <div>
                                  {a.forecast}
                              </div>
    
                          );
                      })
                      }
                  </td>
              </tr>
              <tr>
                  <td>
                      <div>
                          Yellow Mixed
      </div>
                  </td>
                  <td>
                      {data.yellowMixed.map((a, index) => {
                          return (
                              <div>
                                  {a.seeds}
                              </div>
                          );
                      })
                      }
                  </td>
                  <td>
                      {data.yellowMixed.map((a, index) => {
                          return (
                              <div>
                                  {a.number}
                              </div>
                          );
                      })
                      }
    
    
                  </td>
                  <td>
                      {data.yellowMixed.map((a, index) => {
                          return (
    
    
    
    
                              <div>
                                  {a.percentage1}
                              </div>
    
                          );
                      })
                      }
    
    
                  </td>
                  <td>
                      {data.yellowMixed.map((a, index) => {
                          return (
    
    
    
    
                              <div>
                                  {a.percentage}
                              </div>
                          );
                      })
                      }
                  </td>
                  <td>
                      {data.yellowMixed.map((a, index) => {
                          return (
                              <div>
                                  {a.current}
                              </div>
                          );
                      })
                      }
                  </td>
                  <td>
                      {data.yellowMixed.map((a, index) => {
                          return (
                              <div>
                                  {a.forecast}
                              </div>
                          );
                      })
                      }
                  </td>
              </tr>
              <tr>
                  <td>
                      <div>
                          MYQ
      </div>
                  </td>
                  <td>
                      {data.myq.map((a, index) => {
                          return (
                              <div>
                                  {a.seeds}
                              </div>
                          );
                      })
                      }
                  </td>
                  <td>
                      {data.myq.map((a, index) => {
                          return (
                              <div>
                                  {a.number}
                              </div>
                          );
                      })
                      }
    
    
                  </td>
                  <td>
                      {data.myq.map((a, index) => {
                          return (
                              <div>
                                  {a.percentage1}
                              </div>
                          );
                      })
                      }
                  </td>
                  <td>
                      {data.myq.map((a, index) => {
                          return (
                              <div>
                                  {a.percentage}
                              </div>
                          );
                      })
                      }
                  </td>
                  <td>
                      {data.myq.map((a, index) => {
                          return (
                              <div>
                                  {a.current}
                              </div>
                          );
                      })
                      }
                  </td>
                  <td>
                      {data.myq.map((a, index) => {
                          return (
                              <div>
                                  {a.forecast}
                              </div>
                          );
                      })
                      }
                  </td>
              </tr>
          </table> */}
    </div>
  );
  const print = () => {
    const string = renderToString(<Prints />);
    var pdf = new jsPDF("p", "mm", "a4");
    pdf.fromHTML(string);
    pdf.save("CARDMOM_DATA");
  };
  // var resData=[];
  // const [books, setBooks] = useState(null);
  const onSubmit = () => {
    var formData = new FormData();
    formData.append("file", selectedFile);
    console.log(`selectedFile : ${JSON.stringify(selectedFile)}`);
    console.log(`FormData : ${JSON.stringify(formData)}`);
    let url =
      "https://p1xk20n9gl.execute-api.ap-south-1.amazonaws.com/em/upload/";

    axios
      .put(url, formData)
      .then(async (response) => {
        setState(response.data);

        console.log(response.data);
        setChange(!change);
      })
      .catch((err) => {
        console.log(err);
      });

    // .then((todo)=> setList(todo.data));

    // .then(res => setState(res.data))
  };
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    console.log(` Use effect Selected file : ${JSON.stringify(selectedFile)}`);

    const objectUrl = URL.createObjectURL(selectedFile);
    console.log(` objectUrl : ${objectUrl}`);

    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    const image = e.target.files[0];
    console.log(`onSelectFile : ${JSON.stringify(image)}`);
    setSelectedFile(image);

    const getBase64 = (file, cb) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        cb(reader.result);
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    };

    getBase64(image, (result) => {
      console.log(`Base64 Image ${result}`);
    });
  };
  const classes = useStyles();

  return (
    <div>
      <Box my={20}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "20vh" }}
        >
          <Card elevation={5} style={{ width: "300px", borderRadius: "10px" }}>
            <Box my={2}>
              <b style={{ color: "#196f3d" }}>Upload Image</b>
            </Box>
            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
              onChange={onSelectFile}
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <img src={icon} alt="" width="50" height="50" />
              </IconButton>
              <Container style={{ fontfamily: "Gill Sans", fontSize: "12px" }}>
                <p>Take a new picture</p>
                <p>or</p>
                <p>attach an image from gallery</p>
              </Container>
            </label>

            {/* <label htmlFor="icon-button-file">
                    <Button style={{ border: 'none' }}>
                      <img src={icon} alt="" width="60" height="60" />
                    </Button>
                    <Container style={{ fontfamily: "Gill Sans", fontSize: '12px' }}>
                      <p>Take a new picture</p>
                      <p>or</p>
                      <p>attach an image from gallery</p>
                    </Container>
                    </label> */}

            {/* <input type='file'  id="image"
                   accept="image/jpeg"
                    onChange={onSelectFile}/> */}

            <div>
              {selectedFile && (
                <div>
                  <img src={preview} alt="demo" width="200px" height="200px" />{" "}
                  <div>
                    {" "}
                    <Button
                      className={classes.margins}
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={onSubmit}
                    >
                      <b>submit</b>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </Grid>
        {!change ? (
          <div>
            <div style={{ marginBottom: "-180px" }}>
              <Box my={10}>
                <h4
                  style={{
                    color: " #145a32",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                >
                  Image analysis
                </h4>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Card elevation={9} className={classes.root}>
                    <CardContent>
                      <Typography className={classes.title}>Count</Typography>
                      <Typography variant="h5" component="h2">
                        <span>
                          <b style={{ color: " #145a32", fontSize: "20px" }}>
                            <div>
                              <div>
                                {state.length >= 0 ? ( // mapping  Count data
                                  <div>
                                    {/* {state.map((d)=> {
                      return (            */}
                                    <div>
                                      {state[1].Count}
                                      <span>
                                        <b
                                          style={{
                                            color: " #145a32",
                                            fontSize: "11px",
                                          }}
                                        ></b>
                                      </span>
                                      <div className={classes.pos1}>
                                        <Tooltip title={state[1].Count} arrow>
                                          <InfoOutlinedIcon
                                            style={{ fontSize: "15px" }}
                                          />
                                        </Tooltip>
                                      </div>
                                    </div>
                                    {/* );
                    })} */}
                                  </div>
                                ) : (
                                  <div>
                                    <p>0 numbers</p>
                                  </div>
                                )}
                              </div>

                              {/* {state.map((d)=> {
                      return (            */}
                              {/* <div>
                          {state[1].Count}<span><b style={{ color: " #145a32", fontSize: "11px" }}></b></span>
                          <div className={classes.pos1}>
                            <Tooltip title={state[1].Count} arrow>
                              <InfoOutlinedIcon style={{ fontSize: "15px" }} />
                            </Tooltip>
                          </div>
                        </div>  */}
                              {/* );
                    })} */}
                            </div>
                          </b>
                        </span>
                      </Typography>
                    </CardContent>
                  </Card>

                  <Card elevation={9} className={classes.root}>
                    <CardContent>
                      <Typography className={classes.title}>
                        Average Length
                      </Typography>
                      <Typography variant="h5" component="h2">
                        <span>
                          <b style={{ color: " #145a32", fontSize: "20px" }}>
                            <div>
                              <div key={state.id}>
                                {state[1].Average_Length}
                                <span>
                                  <b
                                    style={{
                                      color: " #145a32",
                                      fontSize: "15px",
                                    }}
                                  ></b>
                                </span>
                                <div className={classes.pos1}>
                                  <Tooltip
                                    title={state[1].Average_Length}
                                    arrow
                                  >
                                    <InfoOutlinedIcon
                                      style={{ fontSize: "15px" }}
                                    />
                                  </Tooltip>
                                </div>
                              </div>
                            </div>
                          </b>
                        </span>
                        <span>
                          <b
                            style={{ color: " #145a32", fontSize: "15px" }}
                          ></b>
                        </span>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  display="flex"
                >
                  <Card elevation={9} className={classes.root}>
                    <CardContent>
                      <Typography className={classes.title}>
                        Average Diameter
                      </Typography>
                      <Typography variant="h5" component="h2">
                        <span>
                          <b style={{ color: " #145a32", fontSize: "20px" }}>
                            <div>
                              <div key={state.id}>
                                {state[1]["Average_Circumference_Dia "]}
                                <span>
                                  <b
                                    style={{
                                      color: " #145a32",
                                      fontSize: "15px",
                                    }}
                                  ></b>
                                </span>
                                <div className={classes.pos1}>
                                  <Tooltip
                                    title={
                                      state[1]["Average_Circumference_Dia "]
                                    }
                                    arrow
                                  >
                                    <InfoOutlinedIcon
                                      style={{ fontSize: "15px" }}
                                    />
                                  </Tooltip>
                                </div>
                              </div>
                            </div>
                          </b>
                        </span>
                        <span>
                          <b
                            style={{ color: " #145a32", fontSize: "15px" }}
                          ></b>
                        </span>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Box>

              {/* 

{data} */}

              {/* 

<ul>                    
                {state.map((tdd)=><li key={tdd.id}>{tdd.["Average_Circumference_Dia "]}</li>)}              
                </ul>
 */}

              {/* {state.map((item,key)=>
               
                <tr key={key}> */}
              {/* <td>{item.heading}</td>
              <td>{item.date}</td> */}
              {/* <td>{item.Count}</td>
              </tr>
                
                )} */}

              <Box my={10}>
                <h4
                  style={{
                    color: " #145a32",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                >
                  Range analysis
                </h4>

                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Card elevation={9} spacing={9} className={classes.roots}>
                    <div>
                      {/* {state.map((d) => { */}

                      {Object.entries(state[2]).map(([key, value]) => {
                        {
                          console.log(`Keys : ${key}`);
                        }
                        return (
                          <div>
                            <CardContent>
                              <Typography
                                className={classes.back}
                                color="textSecondary"
                                gutterBottom
                              >
                                <b>{key}</b>
                              </Typography>
                              <Typography
                                className={classes.continue}
                                color="textSecondary"
                              >
                                <Tooltip title={value[0]} arrow>
                                  <InfoOutlinedIcon
                                    style={{ fontSize: "15px" }}
                                  />
                                </Tooltip>
                              </Typography>
                            </CardContent>
                            <CardContent>
                              <Typography
                                className={classes.backs}
                                color="textSecondary"
                                gutterBottom
                              >
                                <b style={{ color: "black" }}>
                                  {" "}
                                  {value[0]} {/* {state[2]["Range : 8+"][0]} */}
                                  seeds
                                </b>{" "}
                                out of{" "}
                                <span style={{ color: "black" }}>
                                  {state[2]["Total : "][0]}
                                </span>
                                &nbsp;({value[1]}&nbsp;of total)
                              </Typography>
                              <Typography
                                className={classes.continues}
                                color="textSecondary"
                              >
                                Current:
                                <span style={{ color: "black" }}>₹NA/kg</span>
                              </Typography>
                            </CardContent>
                            <CardContent>
                              <Typography
                                className={classes.backs}
                                color="textSecondary"
                                gutterBottom
                              >
                                %not broken:&nbsp;
                                <span>{value[2]}%</span>
                              </Typography>
                              <Typography
                                className={classes.continues}
                                color="textSecondary"
                              >
                                Forecast:
                                <span style={{ color: "black" }}>₹NA/kg</span>
                              </Typography>
                            </CardContent>
                            <hr width="310m" color="#C0C0C0" />
                          </div>
                        );
                      })}
                    </div>
                    {/* <div>
                      {Object.entries(state[2]).forEach(([key, value]) => {
                        return (
                          <div>
                            <CardContent>
                              <Typography
                                className={classes.back}
                                color="textSecondary"
                                gutterBottom
                              >
                                <b>Range :7.5 - 8mm</b>
                              </Typography>
                              <Typography
                                className={classes.continue}
                                color="textSecondary"
                              >
                                <Tooltip
                                  title={state[2]["Range : 7.5 - 8"][0]}
                                  arrow
                                >
                                  <InfoOutlinedIcon
                                    style={{ fontSize: "15px" }}
                                  />
                                </Tooltip>
                              </Typography>
                            </CardContent>
                            <CardContent>
                              <Typography
                                className={classes.backs}
                                color="textSecondary"
                                gutterBottom
                              >
                                <b style={{ color: "black" }}>
                                  {" "}
                                  {state[2]["Range : 7.5 - 8"][0]} seeds
                                </b>{" "}
                                out of{" "}
                                <span style={{ color: "black" }}>
                                  {state[2]["Total : "][0]}
                                </span>
                                ({state[2]["Range : 7.5 - 8"][1]}%of total)
                              </Typography>
                              <Typography
                                className={classes.continues}
                                color="textSecondary"
                              >
                                Current:
                                <span style={{ color: "black" }}>₹NA/kg</span>
                              </Typography>
                            </CardContent>
                            <CardContent>
                              <Typography
                                className={classes.backs}
                                color="textSecondary"
                                gutterBottom
                              >
                                %not broken:
                                <span>{state[2]["Range : 7.5 - 8"][2]}%</span>
                              </Typography>
                              <Typography
                                className={classes.continues}
                                color="textSecondary"
                              >
                                Forecast:
                                <span style={{ color: "black" }}>₹NA/kg</span>
                              </Typography>
                            </CardContent>
                            <hr width="310m" color="#C0C0C0" />
                          </div>
                        );
                      })}
                    </div> */}
                    {/* <div>
                      {state.map((d) => {
                        return (
                          <div>
                            <CardContent>
                              <Typography
                                className={classes.back}
                                color="textSecondary"
                                gutterBottom
                              >
                                <b>Range :7 - 7.5mm</b>
                              </Typography>
                              <Typography
                                className={classes.continue}
                                color="textSecondary"
                              >
                                <Tooltip
                                  title={state[2]["Range : 7 - 7.5"][0]}
                                  arrow
                                >
                                  <InfoOutlinedIcon
                                    style={{ fontSize: "15px" }}
                                  />
                                </Tooltip>
                              </Typography>
                            </CardContent>
                            <CardContent>
                              <Typography
                                className={classes.backs}
                                color="textSecondary"
                                gutterBottom
                              >
                                <b style={{ color: "black" }}>
                                  {" "}
                                  {state[2]["Range : 7 - 7.5"][0]} seeds
                                </b>{" "}
                                out of{" "}
                                <span style={{ color: "black" }}>
                                  {state[2]["Total : "][0]}
                                </span>
                                ({state[2]["Range : 7 - 7.5"][1]}%of total)
                              </Typography>
                              <Typography
                                className={classes.continues}
                                color="textSecondary"
                              >
                                Current:
                                <span style={{ color: "black" }}>₹NA/kg</span>
                              </Typography>
                            </CardContent>
                            <CardContent>
                              <Typography
                                className={classes.backs}
                                color="textSecondary"
                                gutterBottom
                              >
                                %not broken:
                                <span>{state[2]["Range : 7 - 7.5"][2]}%</span>
                              </Typography>
                              <Typography
                                className={classes.continues}
                                color="textSecondary"
                              >
                                Forecast:
                                <span style={{ color: "black" }}>₹NA/kg</span>
                              </Typography>
                            </CardContent>
                            <hr width="310m" color="#C0C0C0" />
                          </div>
                        );
                      })}
                    </div> */}
                    {/* <div>
                      {state.map((d) => {
                        return (
                          <div>
                            <CardContent>
                              <Typography
                                className={classes.back}
                                color="textSecondary"
                                gutterBottom
                              >
                                <b>Range :6.5 - 7mm</b>
                              </Typography>
                              <Typography
                                className={classes.continue}
                                color="textSecondary"
                              >
                                <Tooltip
                                  title={state[2]["Range : 6.5 - 7"][0]}
                                  arrow
                                >
                                  <InfoOutlinedIcon
                                    style={{ fontSize: "15px" }}
                                  />
                                </Tooltip>
                              </Typography>
                            </CardContent>
                            <CardContent>
                              <Typography
                                className={classes.backs}
                                color="textSecondary"
                                gutterBottom
                              >
                                <b style={{ color: "black" }}>
                                  {" "}
                                  {state[2]["Range : 6.5 - 7"][0]} seeds
                                </b>{" "}
                                out of{" "}
                                <span style={{ color: "black" }}>
                                  {state[2]["Total : "][0]}
                                </span>
                                ({state[2]["Range : 6.5 - 7"][1]}%of total)
                              </Typography>
                              <Typography
                                className={classes.continues}
                                color="textSecondary"
                              >
                                Current:
                                <span style={{ color: "black" }}>₹NA/kg</span>
                              </Typography>
                            </CardContent>
                            <CardContent>
                              <Typography
                                className={classes.backs}
                                color="textSecondary"
                                gutterBottom
                              >
                                %not broken:
                                <span>{state[2]["Range : 6.5 - 7"][2]}%</span>
                              </Typography>
                              <Typography
                                className={classes.continues}
                                color="textSecondary"
                              >
                                Forecast:
                                <span style={{ color: "black" }}>₹NA/kg</span>
                              </Typography>
                            </CardContent>
                            <hr width="310m" color="#C0C0C0" />
                          </div>
                        );
                      })}
                    </div> */}
                    {/* <div>
                      {state.map((d) => {
                        return (
                          <div>
                            <CardContent>
                              <Typography
                                className={classes.back}
                                color="textSecondary"
                                gutterBottom
                              >
                                <b>Range :6 - 6.5mm</b>
                              </Typography>
                              <Typography
                                className={classes.continue}
                                color="textSecondary"
                              >
                                <Tooltip
                                  title={state[2]["Range : 6 - 6.5"][0]}
                                  arrow
                                >
                                  <InfoOutlinedIcon
                                    style={{ fontSize: "15px" }}
                                  />
                                </Tooltip>
                              </Typography>
                            </CardContent>
                            <CardContent>
                              <Typography
                                className={classes.backs}
                                color="textSecondary"
                                gutterBottom
                              >
                                <b style={{ color: "black" }}>
                                  {" "}
                                  {state[2]["Range : 6 - 6.5"][0]} seeds
                                </b>{" "}
                                out of{" "}
                                <span style={{ color: "black" }}>
                                  {state[2]["Total : "][0]}
                                </span>
                                ({state[2]["Range : 6 - 6.5"][1]}%of total)
                              </Typography>
                              <Typography
                                className={classes.continues}
                                color="textSecondary"
                              >
                                Current:
                                <span style={{ color: "black" }}>₹NA/kg</span>
                              </Typography>
                            </CardContent>
                            <CardContent>
                              <Typography
                                className={classes.backs}
                                color="textSecondary"
                                gutterBottom
                              >
                                %not broken:
                                <span>{state[2]["Range : 6 - 6.5"][2]}%</span>
                              </Typography>
                              <Typography
                                className={classes.continues}
                                color="textSecondary"
                              >
                                Forecast:
                                <span style={{ color: "black" }}>₹NA/kg</span>
                              </Typography>
                            </CardContent>
                            <hr width="310m" color="#C0C0C0" />
                          </div>
                        );
                      })}
                    </div> */}
                    {/* <div>
                      {state.map((d) => {
                        return (
                          <div>
                            <CardContent>
                              <Typography
                                className={classes.back}
                                color="textSecondary"
                                gutterBottom
                              >
                                <b>Range :0 - 6mm</b>
                              </Typography>
                              <Typography
                                className={classes.continue}
                                color="textSecondary"
                              >
                                <Tooltip
                                  title={state[2]["Range : 0 - 6 (broken)"][0]}
                                  arrow
                                >
                                  <InfoOutlinedIcon
                                    style={{ fontSize: "15px" }}
                                  />
                                </Tooltip>
                              </Typography>
                            </CardContent>
                            <CardContent>
                              <Typography
                                className={classes.backs}
                                color="textSecondary"
                                gutterBottom
                              >
                                <b style={{ color: "black" }}>
                                  {" "}
                                  {state[2]["Range : 0 - 6 (broken)"][0]} seeds
                                </b>{" "}
                                out of{" "}
                                <span style={{ color: "black" }}>
                                  {state[2]["Total : "][0]}
                                </span>
                                ({state[2]["Range : 0 - 6 (broken)"][2]}%of
                                total)
                              </Typography>

                              <Typography
                                className={classes.continues}
                                color="textSecondary"
                              >
                                Current:
                                <span style={{ color: "black" }}>NA/kg</span>
                              </Typography>
                            </CardContent>
                            <CardContent>
                              <Typography
                                className={classes.backs}
                                color="textSecondary"
                                gutterBottom
                              >
                                %not broken:
                                <span>
                                  {state[2]["Range : 0 - 6 (broken)"][2]}%
                                </span>
                              </Typography>

                              <Typography
                                className={classes.continues}
                                color="textSecondary"
                              >
                                Forecast:
                                <span style={{ color: "black" }}>NA/kg</span>
                              </Typography>
                            </CardContent>
                          </div>
                        );
                      })}
                    </div> */}
                  </Card>
                </Grid>
              </Box>

              {/* 

   <Box my={14}>
        <h4 style={{ color: " #145a32", fontSize: "20px", textAlign: 'center' }}>Moisture analysis</h4>

        <Grid

          container
          direction="row"
          justify="center"
          alignItems="center">
          <Card elevation={9} spacing={9} className={classes.roots}>
            <div>
              {data.moisture10.map((postData) => {

                return (
                  <div>
                    <CardContent>
                      <Typography className={classes.back} color="textSecondary" gutterBottom>
                        <b>Moisture:&lt;10%</b>
                      </Typography>

                      <Typography className={classes.continue} color="textSecondary">
                        <Tooltip title={postData.seeds} arrow>
                          <InfoOutlinedIcon style={{ fontSize: "15px" }} />

                        </Tooltip>
                      </Typography>

                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        <b style={{ color: 'black' }}> {postData.seeds} seeds</b> out of <span style={{ color: 'black' }}>{postData.number}</span>({postData.percentage1}%of total)
         </Typography>

                      <Typography className={classes.continues} color="textSecondary">
                        Current:<span style={{ color: 'black' }}>₹{postData.current}/kg</span>
                      </Typography>

                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        %not broken:<span>{postData.percentage}%</span>
                      </Typography>

                      <Typography className={classes.continues} color="textSecondary">
                        Forecast:<span style={{ color: 'black' }}>₹{postData.forecast}/kg</span>
                      </Typography>

                    </CardContent>
                    <hr width='310m' color="#C0C0C0" />
                  </div>
                );
              })}
            </div>

            <div>
              {data.moisture8.map((postData) => {

                return (
                  <div>
                    <CardContent>
                      <Typography className={classes.back} color="textSecondary" gutterBottom>
                        <b>Moisture:8-10%</b>
                      </Typography>

                      <Typography className={classes.continue} color="textSecondary">
                        <Tooltip title={postData.seeds} arrow>
                          <InfoOutlinedIcon style={{ fontSize: "15px" }} />

                        </Tooltip>
                      </Typography>

                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        <b style={{ color: 'black' }}> {postData.seeds} seeds</b> out of <span style={{ color: 'black' }}>{postData.number}</span>({postData.percentage1}%of total)
           </Typography>

                      <Typography className={classes.continues} color="textSecondary">
                        Current:<span style={{ color: 'black' }}>₹{postData.current}/kg</span>
                      </Typography>

                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        %not broken:<span>{postData.percentage}%</span>
                      </Typography>

                      <Typography className={classes.continues} color="textSecondary">
                        Forecast:<span style={{ color: 'black' }}>₹{postData.forecast}/kg</span>
                      </Typography>

                    </CardContent>
                    <hr width='310m' color="#C0C0C0" />
                  </div>
                );
              })}
            </div>


            <div>
              {data.moisure6.map((postData) => {

                return (
                  <div>
                    <CardContent>
                      <Typography className={classes.back} color="textSecondary" gutterBottom>
                        <b>Moisture:6-8%</b>
                      </Typography>

                      <Typography className={classes.continue} color="textSecondary">
                        <Tooltip title={postData.seeds} arrow>
                          <InfoOutlinedIcon style={{ fontSize: "15px" }} />

                        </Tooltip>
                      </Typography>

                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        <b style={{ color: 'black' }}> {postData.seeds} seeds</b> out of <span style={{ color: 'black' }}>{postData.number}</span>({postData.percentage1}%of total)
         </Typography>

                      <Typography className={classes.continues} color="textSecondary">
                        Current:<span style={{ color: 'black' }}>₹{postData.current}/kg</span>
                      </Typography>

                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        %not broken:<span>{postData.percentage}%</span>
                      </Typography>

                      <Typography className={classes.continues} color="textSecondary">
                        Forecast:<span style={{ color: 'black' }}>₹{postData.forecast}/kg</span>
                      </Typography>

                    </CardContent>
                    <hr width='310m' color="#C0C0C0" />
                  </div>
                );
              })}
            </div>
            <div>
              {data.moisture4.map((postData) => {
                return (
                  <div>
                    <CardContent>
                      <Typography className={classes.back} color="textSecondary" gutterBottom>
                        <b>Moisture4-6%</b>
                      </Typography>
                      <Typography className={classes.continue} color="textSecondary">
                        <Tooltip title={postData.seeds} arrow>
                          <InfoOutlinedIcon style={{ fontSize: "15px" }} />
                        </Tooltip>
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        <b style={{ color: 'black' }}> {postData.seeds} seeds</b> out of <span style={{ color: 'black' }}>{postData.number}</span>({postData.percentage1}%of total)
         </Typography>
                      <Typography className={classes.continues} color="textSecondary">
                        Current:<span style={{ color: 'black' }}>₹{postData.current}/kg</span>
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        %not broken:<span>{postData.percentage}%</span>
                      </Typography>

                      <Typography className={classes.continues} color="textSecondary">
                        Forecast:<span style={{ color: 'black' }}>₹{postData.forecast}/kg</span>
                      </Typography>
                    </CardContent>
                    <hr width='310m' color="#C0C0C0" />
                  </div>
                );
              })}
            </div>
            <div>
              {data.moisture24.map((postData) => {
                return (
                  <div>
                    <CardContent>
                      <Typography className={classes.back} color="textSecondary" gutterBottom>
                        <b>Moisture:2-4%</b>
                      </Typography>
                      <Typography className={classes.continue} color="textSecondary">
                        <Tooltip title={postData.seeds} arrow>
                          <InfoOutlinedIcon style={{ fontSize: "15px" }} />
                        </Tooltip>
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        <b style={{ color: 'black' }}> {postData.seeds} seeds</b> out of <span style={{ color: 'black' }}>{postData.number}</span>({postData.percentage1}%of total)
         </Typography>
                      <Typography className={classes.continues} color="textSecondary">
                        Current:<span style={{ color: 'black' }}>₹{postData.current}/kg</span>
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        %not broken:<span>{postData.percentage}%</span>
                      </Typography>
                      <Typography className={classes.continues} color="textSecondary">
                        Forecast:<span style={{ color: 'black' }}>₹{postData.forecast}/kg</span>
                      </Typography>
                    </CardContent>
                    <hr width='310m' color="#C0C0C0" />
                  </div>
                );
              })}
            </div>
            <div>
              {data.moisture1.map((postData) => {
                return (
                  <div>
                    <CardContent>
                      <Typography className={classes.back} color="textSecondary" gutterBottom>
                        <b>Moisture:&lt;2%</b>
                      </Typography>
                      <Typography className={classes.continue} color="textSecondary">
                        <Tooltip title={postData.seeds} arrow>
                          <InfoOutlinedIcon style={{ fontSize: "15px" }} />
                        </Tooltip>
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        <b style={{ color: 'black' }}> {postData.seeds} seeds</b> out of <span style={{ color: 'black' }}>{postData.number}</span>({postData.percentage1}%of total)
         </Typography>
                      <Typography className={classes.continues} color="textSecondary">
                        Current:<span style={{ color: 'black' }}>₹1950/kg</span>
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        %not broken:<span>{postData.percentage}%</span>
                      </Typography>
                      <Typography className={classes.continues} color="textSecondary">
                        Forecast:<span style={{ color: 'black' }}>₹{postData.forecast}/kg</span>
                      </Typography>
                    </CardContent>
                  </div>
                );
              })}
            </div>
          </Card>
        </Grid>
      </Box>
      <Box my={-2}>
        <h4 style={{ color: " #145a32", fontSize: "20px", textAlign: 'center' }}>Color analysis</h4>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center">
          <Card elevation={9} spacing={9} className={classes.roots}>
            <div>
              {data.jumboGreen.map((postData) => {
                return (
                  <div>
                    <CardContent>
                      <Typography className={classes.back} color="textSecondary" gutterBottom>
                        <b>Jumbo Green</b>
                      </Typography>
                      <Typography className={classes.continue} color="textSecondary">
                        <Tooltip title={postData.seeds} arrow>
                          <InfoOutlinedIcon style={{ fontSize: "15px" }} />
                        </Tooltip>
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        <b style={{ color: 'black' }}> {postData.seeds}  seeds</b> out of <span style={{ color: 'black' }}>{postData.number}</span>({postData.percentage1}%of total)
         </Typography>

                      <Typography className={classes.continues} color="textSecondary">
                        Current:<span style={{ color: 'black' }}>₹{postData.current}/kg</span>
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        %not broken:<span>{postData.percentage}%</span>
                      </Typography>
                      <Typography className={classes.continues} color="textSecondary">
                        Forecast:<span style={{ color: 'black' }}>₹{postData.forecast}/kg</span>
                      </Typography>
                    </CardContent>
                    <hr width='310m' color="#C0C0C0" />
                  </div>
                );
              })}
            </div>

            <div>
              {data.imperialbestGreen.map((postData) => {

                return (
                  <div>
                    <CardContent>
                      <Typography className={classes.back} color="textSecondary" gutterBottom>
                        <b>Imperial Best Green</b>
                      </Typography>

                      <Typography className={classes.continue} color="textSecondary">
                        <Tooltip title={postData.seeds} arrow>
                          <InfoOutlinedIcon style={{ fontSize: "15px" }} />

                        </Tooltip>
                      </Typography>

                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        <b style={{ color: 'black' }}> {postData.seeds} seeds</b> out of <span style={{ color: 'black' }}>{postData.number}</span>({postData.percentage1}%of total)
         </Typography>

                      <Typography className={classes.continues} color="textSecondary">
                        Current:<span style={{ color: 'black' }}>₹{postData.current}/kg</span>
                      </Typography>

                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        %not broken:<span>{postData.percentage}%</span>
                      </Typography>

                      <Typography className={classes.continues} color="textSecondary">
                        Forecast:<span style={{ color: 'black' }}>₹{postData.forecast}/kg</span>
                      </Typography>

                    </CardContent>
                    <hr width='310m' color="#C0C0C0" />
                  </div>
                );
              })}
            </div>


            <div>
              {data.fancyGreen.map((postData) => {

                return (
                  <div>
                    <CardContent>
                      <Typography className={classes.back} color="textSecondary" gutterBottom>
                        <b>Fancy Green</b>
                      </Typography>
                      <Typography className={classes.continue} color="textSecondary">
                        <Tooltip title={postData.seeds} arrow>
                          <InfoOutlinedIcon style={{ fontSize: "15px" }} />
                        </Tooltip>
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        <b style={{ color: 'black' }}> {postData.seeds} seeds</b> out of <span style={{ color: 'black' }}>{postData.number}</span>({postData.percentage1}%of total)
                       </Typography>
                      <Typography className={classes.continues} color="textSecondary">
                        Current:<span style={{ color: 'black' }}>₹{postData.current}/kg</span>
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        %not broken:<span>{postData.percentage}%</span>
                      </Typography>
                      <Typography className={classes.continues} color="textSecondary">
                        Forecast:<span style={{ color: 'black' }}>₹{postData.forecast}/kg</span>
                      </Typography>
                    </CardContent>
                    <hr width='310m' color="#C0C0C0" />
                  </div>
                );
              })}
            </div>
            <div>
              {data.mixedGreen.map((postData) => {
                return (
                  <div>
                    <CardContent>
                      <Typography className={classes.back} color="textSecondary" gutterBottom>
                        <b>Mixed Green</b>
                      </Typography>

                      <Typography className={classes.continue} color="textSecondary">
                        <Tooltip title={postData.seeds} arrow>
                          <InfoOutlinedIcon style={{ fontSize: "15px" }} />
                        </Tooltip>
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        <b style={{ color: 'black' }}> {postData.seeds} seeds</b> out of <span style={{ color: 'black' }}>{postData.number}</span>({postData.percentage1}%of total)</Typography>
                      <Typography className={classes.continues} color="textSecondary">
                        Current:<span style={{ color: 'black' }}>₹{postData.current}/kg</span>
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        %not broken:<span>{postData.percentage}%</span>
                      </Typography>
                      <Typography className={classes.continues} color="textSecondary">
                        Forecast:<span style={{ color: 'black' }}>₹{postData.forecast}/kg</span>
                      </Typography>
                    </CardContent>
                    <hr width='310m' color="#C0C0C0" />
                  </div>
                );
              })}
            </div>
            <div>
              {data.yellowMixed.map((postData) => {
                return (
                  <div>
                    <CardContent>
                      <Typography className={classes.back} color="textSecondary" gutterBottom>
                        <b>Yellow Mixed</b>
                      </Typography>
                      <Typography className={classes.continue} color="textSecondary">
                        <Tooltip title={postData.seeds} arrow>
                          <InfoOutlinedIcon style={{ fontSize: "15px" }} />
                        </Tooltip>
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        <b style={{ color: 'black' }}> {postData.seeds} seeds</b> out of <span style={{ color: 'black' }}>{postData.number}</span>({postData.percentage1}%of total)
                          </Typography>

                      <Typography className={classes.continues} color="textSecondary">
                        Current:<span style={{ color: 'black' }}>₹{postData.current}/kg</span>
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        %not broken:<span>{postData.percentage}%</span>
                      </Typography>
                      <Typography className={classes.continues} color="textSecondary">
                        Forecast:<span style={{ color: 'black' }}>₹{postData.forecast}/kg</span>
                      </Typography>
                    </CardContent>
                    <hr width='310m' color="#C0C0C0" />
                  </div>
                );
              })}
            </div>

            <div>
              {data.myq.map((postData) => {

                return (
                  <div>
                    <CardContent>
                      <Typography className={classes.back} color="textSecondary" gutterBottom>
                        <b>MYQ</b>
                      </Typography>
                      <Typography className={classes.continue} color="textSecondary">
                        <Tooltip title={postData.seeds} arrow>
                          <InfoOutlinedIcon style={{ fontSize: "15px" }} />
                        </Tooltip>
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        <b style={{ color: 'black' }}> {postData.seeds} seeds</b> out of <span style={{ color: 'black' }}>{postData.number}</span>({postData.percentage1}%of total)
         </Typography>

                      <Typography className={classes.continues} color="textSecondary">
                        Current:<span style={{ color: 'black' }}>₹{postData.current}/kg</span>
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography className={classes.backs} color="textSecondary" gutterBottom>
                        %not broken:<span>{postData.percentage}%</span>
                      </Typography>
                      <Typography className={classes.continues} color="textSecondary">
                        Forecast:<span style={{ color: 'black' }}>₹{postData.forecast}/kg</span>
                      </Typography>
                    </CardContent>
                  </div>
                );
              })}
            </div>
          </Card>
        </Grid>
      </Box>  */}
              <div style={{ paddingbottom: "20px" }}>
                <Box my={-9}>
                  <Grid margin={0}>
                    <div>
                      <Button
                        variant="contained"
                        className={classes.margins}
                        onClick={print}
                      >
                        <b>Save PDF</b>
                      </Button>
                    </div>
                  </Grid>
                </Box>
              </div>
            </div>
          </div>
        ) : null}

        {/* <div>
{!res.da === null &&
    res.data.map((Count) => {
        return <span>{Count}</span>;
    })
}
</div>
 */}

        {/* <div>
                {data1.map((i) => (
          <div className="card">
           <div className="card-body">
               <h5 className="card-title">{i.count}</h5>
          
            </div>
          </div>
        ))}
                </div>  */}

        {/* <div>
                {state.map( d => <div>
                
                {d.Count}
           
                {d.Average_Length}
                {d.Average_Circumference_Dia}
                </div>)}        


                </div>
       */}
      </Box>
    </div>
  );
};

export default Camera;
