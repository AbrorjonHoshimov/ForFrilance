import React from 'react';
import image1 from '../image/img.png'

const Header = () => {
    return (
        <div className={"forHeaderPage"}>
            <div className={'d-flex p-3 gap-3'} style={{width:'50%'}}>
                <div style={{fontSize:'16px',fontWeight:'bold'}}>LOGO</div>
                <div>
                    <div className={'d-flex '}>
                        <div>
                            <svg width="9" height="15" viewBox="0 0 9 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.83302 7.44367C4.83895 6.03804 5.16074 4.65396 5.77194 3.40513C6.38315 2.15631 7.26633 1.07838 8.34892 0.259925C7.39406 0.0604949 6.41027 0.0737214 5.46052 0.298758C4.51078 0.523794 3.61601 0.955682 2.8335 1.56677C2.05099 2.17787 1.39797 2.9547 0.916255 3.84754C0.434538 4.74038 0.134735 5.72956 0.0360368 6.75175C-0.0626612 7.77395 0.0419208 8.80663 0.343088 9.7837C0.644255 10.7608 1.13537 11.6607 1.785 12.4259C2.43463 13.1911 3.22845 13.8046 4.11565 14.2273C5.00286 14.65 5.96389 14.8724 6.93724 14.8805C7.41153 14.8792 7.88449 14.8274 8.34892 14.7258C7.25269 13.8985 6.36102 12.805 5.74911 11.5377C5.1372 10.2703 4.823 8.86612 4.83302 7.44367Z"
                                    fill="#DBE1F7"/>
                            </svg>
                        </div>
                        <div className={'position-relative'}>
                            <div>
                                <svg width="37" height="15" viewBox="0 0 37 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.348938" width="36" height="15" rx="7.5" fill="#869AE3"
                                          fill-opacity="0.3"/>
                                </svg>
                            </div>
                            <div className={'position-absolute'} style={{top:'2px',right:'-2px'}}>
                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_1_58)">
                                        <circle cx="8.84894" cy="8.5" r="5.5" fill="white"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_1_58" x="0.348938" y="0" width="21" height="21"
                                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                           result="hardAlpha"/>
                                            <feOffset dx="2" dy="2"/>
                                            <feGaussianBlur stdDeviation="2.5"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix"
                                                           values="0 0 0 0 0.2625 0 0 0 0 0.469 0 0 0 0 1 0 0 0 1 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                     result="effect1_dropShadow_1_58"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_58"
                                                     result="shape"/>
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={'d-flex align-items-center gap-2' } style={{width:'50%'}}>
                <div>
                <img src={image1} alt="" style={{borderRadius:"50%",width:"25px",height:"25px"}}/>
                </div>
                <div style={{fontSize:'16px',fontWeight:"400px"}}>
                    Сергей
                </div>
            </div>
        </div>
    );
};

export default Header;