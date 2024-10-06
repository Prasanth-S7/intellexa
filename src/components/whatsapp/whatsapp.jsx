import './whatsapp.css'
import Image from 'next/image'
import logo from "@/assets/logo-black.png"
export const Whatsapp = (() => {
    return (
        <div className="tooltipWrapper">
            <div className="tooltipBox">
                <div className="profileSection">
                    <div className="userInfo">
                        <div className="profileImage overflow-hidden">
                            <Image src={logo} alt="logo" className="rounded-lg scale-125" />
                        </div>
                        <div className="userDetails">
                            <div className="userName font-slussenLight text-base">INTELLEXA_REC</div>
                            <div className="userHandle font-slussenLight text-sm">Intellexa REC</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="linkText">
                <a className="iconLink" href="https://www.linkedin.com/company/intellexa-rec/">
                    <div className="iconLayer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fab fa-linkedin">
                            <svg viewBox="100 100 448 512" className=' scale-50'>
                                <path xmlns="http://www.w3.org/2000/svg" fill="#E0E0E0" d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z" />
                            </svg>
                        </span>
                    </div>
                    <div className="linkDescription">LinkedIn</div>
                </a>
            </div>
        </div>
    )
})