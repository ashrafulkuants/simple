import React, { useState, useRef, useEffect } from 'react'
import WorkingCompo from './WorkingCompo'
import { Slider } from "@mui/material";
import { Typography } from "@mui/material";
import styles from "./calculator/Calculator.module.css";
import CurrencyInput from "react-currency-input-field";
import axios from 'axios';
import config from '../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const featuresData = [{ img: "/assets/Groupbranding.svg", title: 'Personal Branding', content: 'Kuants will assist you in building your own digital brand through websites, social media and other digital assets Understand and build soft skills to become your clients trusted person' },
{ img: "/assets/Groupmarketing.png", title: 'Marketing', content: 'Keep your clients engaged by sharing with your curated content and market news build by Kuants team for your customer interactions. Videos, Blogs, Newsletter' },
{ img: "/assets/Grouptraining-and-support.svg", title: 'Training & Support', content: 'Get training on mutual funds, stock markets, IPOs etc, both online and offline with the help of our team of 200 experienced professionals to serve your clients interests in best possible manner' },]
const Partnership = () => {
    const [isMobile,setIsMobile]=useState(false)
    const [clients, setClients] = useState(100);
    const [sip, setSip] = useState(100000);
    const [years, setYears] = useState(15);
    const maxClients = 1000;
    const maxSip = 300000;
    const maxYears = 30;
    const minClients = 1;
    const minSip = 100;
    const minYears = 1;
    const income = (sip * clients * years * .5) / 100;

    const [full_name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [overlay, setOverlay] = useState(false)
    const [activityChanged, setActivityChanged] = useState(false)
    const [otpRequest, setOtpRequest] = useState(true)
    const [otpA, setOtpA] = useState('')
    const [otpB, setOtpB] = useState('')
    const [otpC, setOtpC] = useState('')
    const [otpD, setOtpD] = useState('')
    const refOtpA = useRef(null);
    const refOtpB = useRef(null);
    const refOtpC = useRef(null);
    const refOtpD = useRef(null);
    const [otpfilled, setOtpfilled] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let formObj = { full_name, mobile }
        axios.post(config.createcallback, formObj).then((res) => {
            if (res.status === 201) {
                setName('')
                setMobile('')
                toast.success("Query Received! We will contact you shortly.", {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            } else {
                toast.error("Some error occured, Please try again.", {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
        })

    }
    const addPartner = () => {
        if(full_name==='' && mobile===''){
            setActivityChanged(false)
        }
        setOverlay(true)
    }
    const handleRequestOtp = (e) => {
        e.preventDefault()
        
        let formObj = { name: full_name, mobile }
        setOtpRequest(false)

        axios.post(config.sendotp, formObj).then((res) => {
            if (res.status === 200) {
                toast.success("OTP has been sent to your mobile.", {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
            else {
                toast.error("Some error occured, Please try again.", {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
        })


    }
    const handleOtpSubmit = (e) => {
        e.preventDefault()
        let otp = `${otpA}${otpB}${otpC}${otpD}`
        let formObj = { mobile, otp }
        axios.post(config.verify, formObj).then((res) => {
            console.log(res);
            // Add otp checking 
            if (res.status === 200) {
                toast.success('Request Submitted!', {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
            else {
                toast.error("Some error occured, Please try again.", {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
            setName('')
            setMobile('')
            setOtpA('')
            setOtpB('')
            setOtpC('')
            setOtpD('')
            setOverlay(!overlay)
            setOtpRequest(!otpRequest)
        })

    }
    useEffect(() => {
            if(window.innerWidth<426){
              setIsMobile(true)
            }
        if (otpA !== '' && otpB !== '' && otpC !== '' && otpD !== '') {
            setOtpfilled(true)
        }
        else setOtpfilled(false)

    }, [otpA, otpB, otpC, otpD])

    return (
        <div className='partnership-program hero-container'>
            <ToastContainer autoClose={3500} />
            {overlay && <div className='overlay'>
                <div className='add-partner'>
                    <div className='partner-cross-icon' onClick={()=>{setOverlay(!overlay)}}>x</div>
                    <h4>Join as Partner</h4>
                    <form >
                        {otpRequest ? <input required type="text" name="name" placeholder='Full Name' value={full_name} onChange={(e) => {
                            setName(e.target.value)
                            if (e.target.value !== '' && mobile.length === 10) {
                                setActivityChanged(true)
                            }
                            else setActivityChanged(false)
                        }
                        } /> :
                            <p className='otp-mainpara'>Enter the <span>4 digit</span> OTP which you have received on your mobile no. <span>+91 - {mobile}</span><span onClick={()=>setOtpRequest(!otpRequest)}>Edit</span></p>}
                        {otpRequest ? <div className="input-box">
                            <span className="prefix">+91</span>
                            <input required type="number" name="phone" placeholder='Phone no.' value={mobile} onChange={(e) => {
                                if (e.target.value.length < 11) {
                                    setMobile(e.target.value)
                                    if (e.target.value.length === 10 && full_name !== '') {
                                        setActivityChanged(true)
                                    }
                                    else setActivityChanged(false)
                                }
                            }} />
                        </div>
                            : <>
                                <div className='otp-container'>
                                    <input name='otpA' type="number" ref={refOtpA} value={otpA} onChange={(e) => {

                                        if (otpA.length === 1 && e.nativeEvent.inputType !== 'deleteContentBackward') {
                                            refOtpB.current.focus()
                                        }
                                        else if (e.nativeEvent.inputType === 'deleteContentBackward') {
                                            setOtpA('')
                                            // refOtpB.current.focus()
                                        }
                                        else {
                                            setOtpA(e.target.value)
                                            refOtpB.current.focus()
                                        }

                                    }}
                                    />
                                    <input name='otpB' type="number" ref={refOtpB} value={otpB} onChange={(e) => {

                                        if (otpB.length === 1 && e.nativeEvent.inputType !== 'deleteContentBackward') {
                                            refOtpC.current.focus()
                                        }
                                        else if (e.nativeEvent.inputType === 'deleteContentBackward') {
                                            setOtpB('')
                                            refOtpA.current.focus()
                                        }
                                        else {
                                            setOtpB(e.target.value)
                                            refOtpC.current.focus()
                                        }
                                    }
                                    } />
                                    <input name='otpC' type="number" ref={refOtpC} value={otpC} onChange={(e) => {

                                        if (otpC.length === 1 && e.nativeEvent.inputType !== 'deleteContentBackward') {
                                            refOtpD.current.focus()
                                        }
                                        else if (e.nativeEvent.inputType === 'deleteContentBackward') {
                                            setOtpC('')
                                            refOtpB.current.focus()
                                        }
                                        else {
                                            setOtpC(e.target.value)
                                            refOtpD.current.focus()
                                        }
                                    }} />
                                    <input name='otpD' type="number" ref={refOtpD} value={otpD} onChange={(e) => {
                                        if (e.nativeEvent.inputType === 'deleteContentBackward') {
                                            setOtpD('')
                                            refOtpC.current.focus()
                                        }
                                        else if (otpD === '') {
                                            setOtpD(e.target.value)
                                        }
                                    }} />
                                </div>
                                <div className='re-otp'><p>Code not received?</p><span onClick={handleRequestOtp}>Resend</span></div>
                            </>}
                        {otpRequest ? <button disabled={!activityChanged} onClick={handleRequestOtp}>Request for OTP</button> :
                            <button disabled={!otpfilled} onClick={handleOtpSubmit} >Submit</button>}

                    </form>
                </div>
            </div>}
            <div className='partnership-main'>
                <div className='p-m-left'>
                    <h2 className='main-heading-style partner-heading'>Partnerships</h2>
                    <p>Are you a CA, Investment Advisor, LIC Agent, or in investments field, looking to build a long term recurring source of income? </p>
                    <p>Partner with Kuants in easy steps to build, and scale your net worth through your network
                    </p>
                    <button className='about-btn about-btn-ios join-partner-btn' onClick={addPartner}>Join as Partner</button>
                </div>
                <img src='/assets/partner-top.svg' alt='parters-top' />

            </div>
            <button className='about-btn about-btn-ios join-partner-btn-mobile' onClick={addPartner} style={{alignSelf:'stretch'}}>Join as Partner</button>

            <div className='benefits'>
                <h2 className="heading-style-one">Benefits</h2>
                <div className="b-card-container">
                    {featuresData.map((item, index) => (
                        <div className="card" key={index}>
                            <img src={`${item.img}`} alt={`${item.title}`} />
                            <p className='card-title'>{item.title}</p>
                            <p className='card-content'>{item.content}</p>
                        </div>
                    ))}

                </div>
            </div>
            <WorkingCompo isMobile={isMobile} />
            <h2 className='heading-style-one income-calc-text'>Income Calculator</h2>
            <div className={styles.partnerCalculator}>
                <div className={styles.calculationContainer}>
                    <div className={styles.sliderContent}>
                        <Typography id={styles.principal}>Number of Clients</Typography>
                        <div className={styles.sipBox}>
                            <input
                                className={styles.placeholder}
                                min={0}
                                type="number"
                                value={clients}
                                onChange={(e) => {
                                    if (e.target.value < 1001) {
                                        setClients(Number(e.target.value))
                                    }
                                }}
                            ></input>
                        </div>
                    </div>
                    <div className={styles.slider}>
                        <Slider
                            value={clients}
                            defaultValue={clients}
                            max={maxClients}
                            min={minClients}
                            step={1}
                            onChange={(e) => {
                                setClients(Number(e.target.value));
                            }}
                            sx={{
                                maxWidth: "785px",


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
                        <Typography id={styles.interest} gutterBottom>
                            Total SIP per Client
                        </Typography>
                        <div className={styles.sipBox}>
                            <div className={styles.sipValue}>
                                <CurrencyInput
                                    className={styles.sipValue}
                                    value={sip}
                                    intlConfig={{ locale: "en-IN", currency: "INR" }}
                                    onValueChange={(value) => {
                                        if (value < 300001)
                                            setSip(value)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.slider}>
                        <Slider
                            value={sip}
                            max={maxSip}
                            min={minSip}
                            step={100}
                            onChange={(e) => {
                                setSip(Number(e.target.value));
                            }}
                            sx={{
                                maxWidth: "785px",

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

                        <Typography id={styles.tenure} gutterBottom>
                            Number of Years
                        </Typography>

                        <div className={styles.sipBox}>
                            <div className={styles.sipValue}>
                                <input
                                    className={styles.placeholder}
                                    type="number"
                                    min={0}
                                    value={years}
                                    onChange={(e) => {
                                        if (e.target.value < 31) {
                                            setYears(Number(e.target.value))
                                        }
                                    }}
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className={styles.slider}>
                        <Slider
                            value={years}
                            // defaultValue={fd === true ? fdtime : tenure}
                            max={maxYears}
                            min={minYears}
                            onChange={(e) => {
                                setYears(e.target.value);
                            }}
                            sx={{
                                maxWidth: "785px",

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
                <div className={styles.incomeContainer}>
                    <img src="/assets/Groupwallet.png" />
                    <p>Total Income</p>
                    <span>{income.toLocaleString("en-IN")}</span>
                </div>
            </div>
            <div className='callback-container'>
                <h2 className='heading-style-one'>Request for Call Back</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input required type="text" name="name" placeholder='Full Name' value={full_name} onChange={(e) => setName(e.target.value)} />
                    <input required type="number" name="phone" placeholder='Phone number' value={mobile} onChange={(e) =>{if(e.target.value.length<11){ setMobile(e.target.value)} }}/>
                    <input type='submit' className='' value='Submit' />
                </form>
            </div>

        </div>
    )
}

export default Partnership