import React, { useState } from "react";
import { Slider } from "@mui/material";
import { Typography } from "@mui/material";
import { PieChart } from "react-minimal-pie-chart";
// import { NavLink } from "react-router-dom";
import styles from "./Calculator.module.css";

import CurrencyInput from "react-currency-input-field";

export default function Calculator() {
  const [amount, setAmount] = useState(10000);
  const [interest, setInterest] = useState(6);
  const [tenure, setTenure] = useState(5);
  const [fdamount, setFDAmount] = useState(50000);
  const [fdinterest, setFDInterest] = useState(5);
  const [fdtime, setFDTime] = useState(6);

  const [mutual, setMutual] = useState(true);
  const [fd, setFd] = useState(false);
  const maxValue = 1000000;
  const minValue = 100;
  const maxInterest = 25;
  const minInterest = 4;
  const minfdinterest = 2.5;
  const maxfdinterest = 7.5;
  const maxTenure = 30;
  const minTenure = 1;
  // const fd1 = parseInt(fdamount);

  const si = (fdamount * fdinterest * fdtime) / 100;
  const fdValue = Math.round(fdamount + si);
  const mfValue = Math.round(amount * (1 + interest / 100) ** tenure);
  // console.log(fdamount);
  // console.log("type of fdvalue", typeof fdamount);
  // const formattedValue2 = formatValue({
  //   value: "500000",
  //   intlConfig: { locale: "en-IN", currency: "INR" },
  // });

  // console.log(formattedValue2);

  return (
    <div className={styles.container}>
      <div className={styles.calculationContainer}>
        <div className={styles.header}>
          <h1 className={styles.head_text}>Calculators</h1>
        </div>

        <div className={styles.navbar}>
          <div
            className={mutual === true ? styles.active : styles.inactive}
            onClick={() => {
              setAmount(10000);
              setInterest(6);
              setTenure(5);
              setMutual(true);
              setFd(false);
            }}
          >
            <span>Mutual Funds</span>
          </div>
          <div
            className={`${styles.navLink2} ${
              fd === true ? styles.active : styles.inactive
            }`}
            onClick={() => {
              setFDAmount(50000);
              setFDInterest(5);
              setFDTime(6);
              setMutual(false);
              setFd(true);
            }}
          >
            <span>Fixed Deposit</span>
          </div>
        </div>
        <div className={styles.sliderContent}>
          {/* <div style={{ marginTop: "3.47vw" }}> */}
          {fd === false ? (
            <Typography id={styles.principal}>SIP Amount</Typography>
          ) : (
            <Typography id={styles.principal}>Total Investment</Typography>
          )}

          {/* </div> */}
          <div className={styles.sipBox}>
            {/* <span className={styles.sipValue}> */}
            <CurrencyInput
              className={styles.sipValue}
              value={fd === true ? fdamount : amount}
              intlConfig={{ locale: "en-IN", currency: "INR" }}
              onValueChange={(value) => {
                if (value < 1000001)
                  fd === true
                    ? setFDAmount(Number(value))
                    : setAmount(Number(value));
              }}
            />
          </div>
        </div>
        <div className={styles.slider}>
          <Slider
            value={fd === true ? fdamount : amount}
            defaultValue={fd === true ? fdamount : amount}
            max={maxValue}
            min={minValue}
            step={100}
            onChange={(e) => {
              setAmount(Number(e.target.value));
              setFDAmount(Number(e.target.value));
            }}
            sx={{
              maxWidth: "575px",
              width: "39.93vw",

              height: "0.55vw",
              // marginTop: "200px",
              color: "#683FDB",
              "& .MuiSlider-rail": {
                color: "#683FDB" ? "#EBEBEB" : "#683FDB",
                height: "0.55vw" ? "0.35vw" : "0.55vw",
                cursor: "3.67vw",
              },
            }}
          />
        </div>
        <div className={styles.sliderContent}>
          {fd === false ? (
            <Typography id={styles.interest} gutterBottom>
              Expected Rate of Return
            </Typography>
          ) : (
            <Typography id={styles.interest} gutterBottom>
              Rate of Interest (p.a)
            </Typography>
          )}

          <div className={styles.sipBox}>
            <div className={styles.sipValue}>
              <input
                type="number"
                className={styles.placeholder}
                min={0}
                value={fd === true ? fdinterest : interest}
                onChange={(e) => {
                  if (
                    fd === true ? e.target.value < 7.6 : e.target.value < 25.1
                  ) {
                    fd === true
                      ? setFDInterest(
                          Math.round(Number(e.target.value) * 100) / 100
                        )
                      : setInterest(
                          Math.round(Number(e.target.value) * 100) / 100
                        );
                  }
                }}
              ></input>
            </div>

            {/* <span className={styles.sipValue}>
              {fd === true ? fdinterest : interest}%
            </span> */}
          </div>
        </div>
        <div className={styles.slider}>
          <Slider
            value={fd === true ? fdinterest : interest}
            // defaultValue={fd === true ? fdinterest : interest}
            max={mutual === true ? maxInterest : maxfdinterest}
            min={mutual === true ? minInterest : minfdinterest}
            step={0.1}
            onChange={(e) => {
              setInterest(Number(e.target.value));
              setFDInterest(Number(e.target.value));
            }}
            sx={{
              maxWidth: "575px",
              width: "39.93vw",
              height: "0.55vw",

              color: "#683FDB",
              "& .MuiSlider-rail": {
                color: "#683FDB" ? "#EBEBEB" : "#683FDB",
                height: "0.55vw" ? "0.35vw" : "0.55vw",
                cursor: "1.67vw",
              },
            }}
          />
        </div>
        <div className={styles.sliderContent}>
          {fd === false ? (
            <Typography id={styles.tenure} gutterBottom>
              Time Period
            </Typography>
          ) : (
            <Typography id={styles.tenure} gutterBottom>
              Investment Duration
            </Typography>
          )}
          <div className={styles.sipBox}>
            <div className={styles.sipValue}>
              <input
                className={styles.placeholder}
                type="number"
                min={0}
                
                value={fd === true ? fdtime : tenure}
                onChange={(e) => {
                  if (e.target.value < 31) {
                    fd === true
                      ? setFDTime(Number(e.target.value))
                      : setTenure(Number(e.target.value));
                  }
                }}
              ></input>
            </div>
          </div>
        </div>
        <div className={styles.slider}>
          <Slider
            value={fd === true ? fdtime : tenure}
            // defaultValue={fd === true ? fdtime : tenure}
            max={maxTenure}
            min={minTenure}
            onChange={(e) => {
              setTenure(e.target.value);
              setFDTime(e.target.value);
            }}
            sx={{
              maxWidth: "575px",
              width: "39.93vw",
              height: "0.55vw",

              color: "#683FDB",

              "& .MuiSlider-rail": {
                color: "#683FDB" ? "#EBEBEB" : "#683FDB",
                height: "0.55vw" ? "0.35vw" : "0.55vw",
                cursor: "1.67vw",
              },
            }}
          />
        </div>
      </div>
      <div className={styles.graph}>
        <div className={styles.pieChart}>
          <PieChart
            // center={[50, 50]}
            data={[
              {
                title: "Investment Value",
                value: fd === true ? fdamount : amount,
                color: "#6D42DA",
              },
              {
                title: "Future Value",
                value: fd === true ? fdValue : mfValue,
                color: "#5985FC",
              },
            ]}
            onMouseOver={(event, data) => {}}
            style={styles.pieChartdata}
            labelPosition={20}
            lengthAngle={360}
            lineWidth={41}
            paddingAngle={0}
            startAngle={0}
            radius={50}
            viewBoxSize={[100, 100]}
          />
        </div>
        <div className={styles.belowDetails}>
          <div className={styles.investmentValue}>
            <span className={styles.ivCircle}></span>
            <span className={styles.belowText}>Investment&nbsp;Value:</span>
            <span className={styles.belowAmount}>
              {fd === true
                ? fdamount.toLocaleString("en-IN")
                : amount.toLocaleString("en-IN")}
            </span>
          </div>
          <div className={styles.futureValue}>
            <span className={styles.fvCircle}></span>
            <span className={styles.belowText}>Future&nbsp;Value:</span>
            <span className={styles.belowAmount}>
              {fd === true
                ? fdValue.toLocaleString("en-IN")
                : mfValue.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
