import React from "react";
import './projects.css'
import { BsDisplay, BsGithub } from "react-icons/bs";
import DiscordExample from '../assets/discord.gif'
import BattleshipExample from '../assets/battleship.gif'
import WaldoExample from '../assets/Waldo.gif'
import WeatherExample from '../assets/weather.gif'
import ShoppingExample from '../assets/shopping.gif'
import MatchingExample from '../assets/matching.gif'
import CreditExample from '../assets/credit.gif'
import MemberExample from '../assets/members.gif'
import CopeExample from '../assets/cope.gif'
import { Link } from "react-router-dom";
const Projects = (props) => {
//
    const { projects } = props

    return (
        <div className="projects-container" ref={projects}>
            <div className="project-title-container">
            <svg classlist='project-title' width="383" height="132" viewBox="0 0 383 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-outside-1_1_3" maskUnits="userSpaceOnUse" x="0.150002" y="0.735992" width="383" height="131" fill="black">
                    <rect fill="white" x="0.150002" y="0.735992" width="383" height="131"/>
                    <path className="loading" d="M4.046 81.944C3.44866 73.1547 3.15 61.2933 3.15 46.36C3.15 31.3413 3.36333 21.6133 3.79 17.176C4.21667 14.4453 6.094 12.6533 9.422 11.8C12.75 10.8613 17.1447 10.392 22.606 10.392C30.6273 10.392 37.3687 12.1413 42.83 15.64C48.3767 19.0533 51.15 24.1307 51.15 30.872C51.15 36.4187 50.382 41.0693 48.846 44.824C47.31 48.4933 45.39 51.224 43.086 53.016C39.3313 55.9173 33.7847 57.368 26.446 57.368C23.2887 57.368 19.15 56.9413 14.03 56.088C14.4567 73.1547 14.6273 83.9067 14.542 88.344C14.4567 92.7813 12.9633 95 10.062 95C8.18466 95 6.99 94.6587 6.478 93.976C5.966 93.2933 5.62467 92.824 5.454 92.568C5.28334 92.2267 5.11267 91.7573 4.942 91.16C4.77133 90.5627 4.64333 90.0933 4.558 89.752C4.47267 89.3253 4.38734 88.728 4.302 87.96C4.302 87.192 4.25934 86.5947 4.174 86.168C4.08867 84.888 4.046 83.48 4.046 81.944ZM40.526 31.256C40.526 27.7573 38.6487 25.0267 34.894 23.064C31.1393 21.016 27.1287 19.992 22.862 19.992C18.5953 19.992 15.6087 20.376 13.902 21.144C13.5607 26.1787 13.39 30.8293 13.39 35.096C13.39 39.2773 13.5607 43.0747 13.902 46.488C16.206 46.744 17.7847 46.9573 18.638 47.128C20.8567 47.384 22.734 47.512 24.27 47.512C25.8913 47.512 26.958 47.512 27.47 47.512C28.0673 47.4267 29.134 47.2987 30.67 47.128C32.2913 46.872 33.4433 46.488 34.126 45.976C34.8087 45.464 35.662 44.7813 36.686 43.928C37.71 43.0747 38.4353 42.0933 38.862 40.984C39.9713 37.912 40.526 34.6693 40.526 31.256Z"/>
                    <path className="loading" d="M79.751 76.312L79.879 89.496C79.879 91.032 79.1537 92.44 77.703 93.72C76.3377 95 74.9723 95.64 73.607 95.64C71.6443 95.64 70.407 94.104 69.895 91.032C69.8097 90.3493 69.4683 84.12 68.871 72.344C68.2737 60.4827 67.1217 51.1813 65.415 44.44C64.647 41.1973 64.263 39.2773 64.263 38.68C64.263 35.864 65.9697 34.456 69.383 34.456C70.8337 34.456 71.9857 35.0107 72.839 36.12C73.6923 37.2293 74.2043 38.3813 74.375 39.576C74.631 40.6853 74.8443 42.2213 75.015 44.184C75.1857 46.1467 75.3137 47.384 75.399 47.896C77.191 43.6293 79.879 40.4293 83.463 38.296C87.047 36.1627 90.9723 35.096 95.239 35.096C102.236 35.096 105.735 36.888 105.735 40.472C105.735 42.264 105.095 43.7147 103.815 44.824C102.62 45.848 101.212 46.36 99.591 46.36C92.3377 46.36 87.2177 48.664 84.231 53.272C81.2443 57.88 79.751 65.56 79.751 76.312Z"/>
                    <path className="loading" d="M135.145 35.352C141.289 35.352 146.324 38.296 150.249 44.184C154.26 50.072 156.265 57.1547 156.265 65.432C156.265 73.624 154.217 80.6213 150.121 86.424C146.11 92.2267 140.734 95.128 133.993 95.128C127.337 95.128 121.961 92.184 117.865 86.296C113.769 80.3227 111.721 73.7093 111.721 66.456C111.721 57.1547 113.598 49.7307 117.353 44.184C121.364 38.296 127.294 35.352 135.145 35.352ZM133.609 45.848C130.025 45.848 127.081 47.7253 124.777 51.48C122.473 55.2347 121.321 59.2027 121.321 63.384C121.321 69.8693 122.601 74.8187 125.161 78.232C127.721 81.6453 130.622 83.352 133.865 83.352C139.668 83.352 143.38 80.8347 145.001 75.8C145.684 73.4107 146.025 70.424 146.025 66.84C146.025 52.8453 141.886 45.848 133.609 45.848Z"/>
                    <path className="loading" d="M173.458 14.744C174.994 14.744 176.445 15.4693 177.81 16.92C179.175 18.3707 179.858 19.9067 179.858 21.528C179.858 23.064 179.09 24.6427 177.554 26.264C176.103 27.8853 174.567 28.696 172.946 28.696C171.325 28.696 169.831 28.0133 168.466 26.648C167.186 25.2827 166.546 23.5333 166.546 21.4C166.546 17.304 168.765 15.0853 173.202 14.744C173.287 14.744 173.373 14.744 173.458 14.744ZM169.362 39.832C169.191 38.4667 169.661 37.3573 170.77 36.504C171.879 35.5653 173.543 35.096 175.762 35.096C177.981 35.096 179.218 36.1627 179.474 38.296C180.669 48.792 181.266 58.7333 181.266 68.12C181.266 77.5067 180.967 86.8933 180.37 96.28C179.773 105.752 178.407 113.048 176.274 118.168C173.373 124.909 168.125 128.28 160.53 128.28C156.69 128.28 153.362 127.085 150.546 124.696C147.73 122.307 146.322 119.448 146.322 116.12C146.322 114.328 146.962 112.963 148.242 112.024C149.522 111.085 150.93 110.616 152.466 110.616C154.002 110.616 155.154 111 155.922 111.768C156.69 112.536 157.202 113.389 157.458 114.328C158.311 116.803 159.762 118.04 161.81 118.04C163.943 118.04 165.735 116.376 167.186 113.048C168.722 109.72 169.703 105.197 170.13 99.48C170.642 93.7627 170.898 87.704 170.898 81.304C170.898 61.2507 170.386 47.4267 169.362 39.832Z"/>
                    <path className="loading" d="M212.671 35.736C217.194 35.736 221.503 37.0587 225.599 39.704C229.695 42.3493 231.743 45.6347 231.743 49.56C231.743 53.4 230.079 57.1547 226.751 60.824C223.423 64.408 218.986 66.584 213.439 67.352C211.05 67.6933 207.466 67.864 202.687 67.864C203.626 75.1173 205.46 79.896 208.191 82.2C209.044 83.1387 210.196 83.608 211.647 83.608C216.938 83.608 221.375 81.944 224.959 78.616C228.543 75.2027 231.103 73.496 232.639 73.496C233.322 73.496 234.346 74.136 235.711 75.416C237.076 76.696 237.759 77.8907 237.759 79C237.759 81.2187 235.071 84.4187 229.695 88.6C227.306 90.5627 224.404 92.2267 220.991 93.592C217.663 94.872 214.548 95.512 211.647 95.512C204.223 95.512 198.762 90.7333 195.263 81.176C193.044 75.288 191.935 68.8027 191.935 61.72C191.935 54.6373 193.599 48.536 196.927 43.416C200.255 38.296 205.503 35.736 212.671 35.736ZM213.311 44.568C210.068 44.568 207.295 46.4027 204.991 50.072C204.138 51.352 203.327 54.2533 202.559 58.776C214.506 58.776 220.479 55.832 220.479 49.944C220.479 46.36 218.09 44.568 213.311 44.568Z"/>
                    <path className="loading" d="M243.447 65.048C243.447 59.3307 244.94 54.1253 247.927 49.432C250.999 44.7387 254.882 41.24 259.575 38.936C264.268 36.5467 268.834 35.352 273.271 35.352C277.708 35.352 281.25 35.9067 283.895 37.016C286.626 38.04 287.991 39.448 287.991 41.24C287.991 42.9467 287.479 44.696 286.455 46.488C285.516 48.1947 284.236 49.048 282.615 49.048C282.018 49.048 280.354 48.5787 277.623 47.64C274.978 46.616 273.271 46.104 272.503 46.104C267.554 46.104 263.33 47.9387 259.831 51.608C256.332 55.192 254.583 59.9707 254.583 65.944C254.583 71.9173 255.522 76.3973 257.399 79.384C259.362 82.2853 262.69 83.736 267.383 83.736C269.26 83.736 272.46 82.6693 276.983 80.536C281.591 78.3173 284.45 77.208 285.559 77.208C286.668 77.208 287.564 77.5493 288.247 78.232C288.93 78.9147 289.271 79.768 289.271 80.792C289.271 82.84 287.948 85.016 285.303 87.32C282.743 89.5387 279.543 91.416 275.703 92.952C271.863 94.4027 268.407 95.128 265.335 95.128C258.508 95.128 253.132 92.44 249.207 87.064C245.367 81.688 243.447 74.3493 243.447 65.048Z"/>
                    <path className="loading" d="M298.064 35.224L304.464 35.352C305.915 35.352 306.725 35.3093 306.896 35.224V8.98399C306.981 7.53333 307.707 6.296 309.072 5.272C310.437 4.24799 311.717 3.73599 312.912 3.73599C314.107 3.73599 315.045 4.11999 315.728 4.88799C316.496 5.65599 316.837 6.85066 316.752 8.47199C316.667 10.0933 316.624 18.968 316.624 35.096L331.6 34.584C334.16 34.584 335.44 36.0773 335.44 39.064C335.44 41.2827 334.757 42.9467 333.392 44.056C332.112 45.1653 330.704 45.7627 329.168 45.848C327.717 45.9333 326.267 45.976 324.816 45.976L317.008 45.848C317.008 49.3467 317.349 56.2587 318.032 66.584C318.8 76.9093 319.397 83.608 319.824 86.68C320.251 89.6667 320.336 91.6293 320.08 92.568C319.824 93.4213 319.355 94.0187 318.672 94.36C317.563 94.872 316.069 95.128 314.192 95.128C312.315 95.128 311.205 94.104 310.864 92.056C309.157 80.8773 308.005 65.5173 307.408 45.976C306.64 46.0613 303.696 46.104 298.576 46.104C293.456 46.104 290.896 44.6107 290.896 41.624C290.896 37.3573 293.285 35.224 298.064 35.224Z"/>
                    <path className="loading" d="M341.04 51.48C341.04 46.4453 342.832 42.4347 346.416 39.448C350 36.4613 354.139 34.968 358.832 34.968C363.611 34.968 368.176 35.8213 372.528 37.528C376.88 39.2347 379.056 41.496 379.056 44.312C379.056 45.7627 378.501 46.9147 377.392 47.768C376.283 48.6213 375.301 49.048 374.448 49.048C373.68 49.048 373.04 49.048 372.528 49.048C372.101 48.9627 370.395 48.152 367.408 46.616C364.507 45.08 361.819 44.312 359.344 44.312C356.869 44.312 354.736 44.952 352.944 46.232C351.237 47.4267 350.384 49.2187 350.384 51.608C350.384 53.9973 351.365 55.8747 353.328 57.24C355.376 58.6053 358.917 59.8 363.952 60.824C368.987 61.7627 372.827 63.128 375.472 64.92C378.203 66.712 379.568 70.04 379.568 74.904C379.568 81.9867 377.691 87.0213 373.936 90.008C370.267 92.9093 365.787 94.36 360.496 94.36C355.205 94.36 350.683 93.6347 346.928 92.184C343.259 90.7333 341.424 88.5573 341.424 85.656C341.424 82.328 343.088 80.664 346.416 80.664C347.269 80.664 349.147 81.2613 352.048 82.456C354.949 83.6507 357.808 84.248 360.624 84.248C363.525 84.248 365.701 83.352 367.152 81.56C368.688 79.6827 369.456 77.5493 369.456 75.16C369.456 72.7707 368.475 71.064 366.512 70.04C364.549 68.9307 361.563 68.0347 357.552 67.352C353.541 66.6693 350.597 65.944 348.72 65.176C343.6 63.128 341.04 58.5627 341.04 51.48Z"/>
                    </mask>
                    <path className="loading" d="M4.046 81.944C3.44866 73.1547 3.15 61.2933 3.15 46.36C3.15 31.3413 3.36333 21.6133 3.79 17.176C4.21667 14.4453 6.094 12.6533 9.422 11.8C12.75 10.8613 17.1447 10.392 22.606 10.392C30.6273 10.392 37.3687 12.1413 42.83 15.64C48.3767 19.0533 51.15 24.1307 51.15 30.872C51.15 36.4187 50.382 41.0693 48.846 44.824C47.31 48.4933 45.39 51.224 43.086 53.016C39.3313 55.9173 33.7847 57.368 26.446 57.368C23.2887 57.368 19.15 56.9413 14.03 56.088C14.4567 73.1547 14.6273 83.9067 14.542 88.344C14.4567 92.7813 12.9633 95 10.062 95C8.18466 95 6.99 94.6587 6.478 93.976C5.966 93.2933 5.62467 92.824 5.454 92.568C5.28334 92.2267 5.11267 91.7573 4.942 91.16C4.77133 90.5627 4.64333 90.0933 4.558 89.752C4.47267 89.3253 4.38734 88.728 4.302 87.96C4.302 87.192 4.25934 86.5947 4.174 86.168C4.08867 84.888 4.046 83.48 4.046 81.944ZM40.526 31.256C40.526 27.7573 38.6487 25.0267 34.894 23.064C31.1393 21.016 27.1287 19.992 22.862 19.992C18.5953 19.992 15.6087 20.376 13.902 21.144C13.5607 26.1787 13.39 30.8293 13.39 35.096C13.39 39.2773 13.5607 43.0747 13.902 46.488C16.206 46.744 17.7847 46.9573 18.638 47.128C20.8567 47.384 22.734 47.512 24.27 47.512C25.8913 47.512 26.958 47.512 27.47 47.512C28.0673 47.4267 29.134 47.2987 30.67 47.128C32.2913 46.872 33.4433 46.488 34.126 45.976C34.8087 45.464 35.662 44.7813 36.686 43.928C37.71 43.0747 38.4353 42.0933 38.862 40.984C39.9713 37.912 40.526 34.6693 40.526 31.256Z" stroke="black" stroke-width="6" mask="url(#path-1-outside-1_1_3)"/>
                    <path className="loading" d="M79.751 76.312L79.879 89.496C79.879 91.032 79.1537 92.44 77.703 93.72C76.3377 95 74.9723 95.64 73.607 95.64C71.6443 95.64 70.407 94.104 69.895 91.032C69.8097 90.3493 69.4683 84.12 68.871 72.344C68.2737 60.4827 67.1217 51.1813 65.415 44.44C64.647 41.1973 64.263 39.2773 64.263 38.68C64.263 35.864 65.9697 34.456 69.383 34.456C70.8337 34.456 71.9857 35.0107 72.839 36.12C73.6923 37.2293 74.2043 38.3813 74.375 39.576C74.631 40.6853 74.8443 42.2213 75.015 44.184C75.1857 46.1467 75.3137 47.384 75.399 47.896C77.191 43.6293 79.879 40.4293 83.463 38.296C87.047 36.1627 90.9723 35.096 95.239 35.096C102.236 35.096 105.735 36.888 105.735 40.472C105.735 42.264 105.095 43.7147 103.815 44.824C102.62 45.848 101.212 46.36 99.591 46.36C92.3377 46.36 87.2177 48.664 84.231 53.272C81.2443 57.88 79.751 65.56 79.751 76.312Z" stroke="black" stroke-width="6" mask="url(#path-1-outside-1_1_3)"/>
                    <path className="loading" d="M135.145 35.352C141.289 35.352 146.324 38.296 150.249 44.184C154.26 50.072 156.265 57.1547 156.265 65.432C156.265 73.624 154.217 80.6213 150.121 86.424C146.11 92.2267 140.734 95.128 133.993 95.128C127.337 95.128 121.961 92.184 117.865 86.296C113.769 80.3227 111.721 73.7093 111.721 66.456C111.721 57.1547 113.598 49.7307 117.353 44.184C121.364 38.296 127.294 35.352 135.145 35.352ZM133.609 45.848C130.025 45.848 127.081 47.7253 124.777 51.48C122.473 55.2347 121.321 59.2027 121.321 63.384C121.321 69.8693 122.601 74.8187 125.161 78.232C127.721 81.6453 130.622 83.352 133.865 83.352C139.668 83.352 143.38 80.8347 145.001 75.8C145.684 73.4107 146.025 70.424 146.025 66.84C146.025 52.8453 141.886 45.848 133.609 45.848Z" stroke="black" stroke-width="6" mask="url(#path-1-outside-1_1_3)"/>
                    <path className="loading" d="M173.458 14.744C174.994 14.744 176.445 15.4693 177.81 16.92C179.175 18.3707 179.858 19.9067 179.858 21.528C179.858 23.064 179.09 24.6427 177.554 26.264C176.103 27.8853 174.567 28.696 172.946 28.696C171.325 28.696 169.831 28.0133 168.466 26.648C167.186 25.2827 166.546 23.5333 166.546 21.4C166.546 17.304 168.765 15.0853 173.202 14.744C173.287 14.744 173.373 14.744 173.458 14.744ZM169.362 39.832C169.191 38.4667 169.661 37.3573 170.77 36.504C171.879 35.5653 173.543 35.096 175.762 35.096C177.981 35.096 179.218 36.1627 179.474 38.296C180.669 48.792 181.266 58.7333 181.266 68.12C181.266 77.5067 180.967 86.8933 180.37 96.28C179.773 105.752 178.407 113.048 176.274 118.168C173.373 124.909 168.125 128.28 160.53 128.28C156.69 128.28 153.362 127.085 150.546 124.696C147.73 122.307 146.322 119.448 146.322 116.12C146.322 114.328 146.962 112.963 148.242 112.024C149.522 111.085 150.93 110.616 152.466 110.616C154.002 110.616 155.154 111 155.922 111.768C156.69 112.536 157.202 113.389 157.458 114.328C158.311 116.803 159.762 118.04 161.81 118.04C163.943 118.04 165.735 116.376 167.186 113.048C168.722 109.72 169.703 105.197 170.13 99.48C170.642 93.7627 170.898 87.704 170.898 81.304C170.898 61.2507 170.386 47.4267 169.362 39.832Z" stroke="black" stroke-width="6" mask="url(#path-1-outside-1_1_3)"/>
                    <path className="loading" d="M212.671 35.736C217.194 35.736 221.503 37.0587 225.599 39.704C229.695 42.3493 231.743 45.6347 231.743 49.56C231.743 53.4 230.079 57.1547 226.751 60.824C223.423 64.408 218.986 66.584 213.439 67.352C211.05 67.6933 207.466 67.864 202.687 67.864C203.626 75.1173 205.46 79.896 208.191 82.2C209.044 83.1387 210.196 83.608 211.647 83.608C216.938 83.608 221.375 81.944 224.959 78.616C228.543 75.2027 231.103 73.496 232.639 73.496C233.322 73.496 234.346 74.136 235.711 75.416C237.076 76.696 237.759 77.8907 237.759 79C237.759 81.2187 235.071 84.4187 229.695 88.6C227.306 90.5627 224.404 92.2267 220.991 93.592C217.663 94.872 214.548 95.512 211.647 95.512C204.223 95.512 198.762 90.7333 195.263 81.176C193.044 75.288 191.935 68.8027 191.935 61.72C191.935 54.6373 193.599 48.536 196.927 43.416C200.255 38.296 205.503 35.736 212.671 35.736ZM213.311 44.568C210.068 44.568 207.295 46.4027 204.991 50.072C204.138 51.352 203.327 54.2533 202.559 58.776C214.506 58.776 220.479 55.832 220.479 49.944C220.479 46.36 218.09 44.568 213.311 44.568Z" stroke="black" stroke-width="6" mask="url(#path-1-outside-1_1_3)"/>
                    <path className="loading" d="M243.447 65.048C243.447 59.3307 244.94 54.1253 247.927 49.432C250.999 44.7387 254.882 41.24 259.575 38.936C264.268 36.5467 268.834 35.352 273.271 35.352C277.708 35.352 281.25 35.9067 283.895 37.016C286.626 38.04 287.991 39.448 287.991 41.24C287.991 42.9467 287.479 44.696 286.455 46.488C285.516 48.1947 284.236 49.048 282.615 49.048C282.018 49.048 280.354 48.5787 277.623 47.64C274.978 46.616 273.271 46.104 272.503 46.104C267.554 46.104 263.33 47.9387 259.831 51.608C256.332 55.192 254.583 59.9707 254.583 65.944C254.583 71.9173 255.522 76.3973 257.399 79.384C259.362 82.2853 262.69 83.736 267.383 83.736C269.26 83.736 272.46 82.6693 276.983 80.536C281.591 78.3173 284.45 77.208 285.559 77.208C286.668 77.208 287.564 77.5493 288.247 78.232C288.93 78.9147 289.271 79.768 289.271 80.792C289.271 82.84 287.948 85.016 285.303 87.32C282.743 89.5387 279.543 91.416 275.703 92.952C271.863 94.4027 268.407 95.128 265.335 95.128C258.508 95.128 253.132 92.44 249.207 87.064C245.367 81.688 243.447 74.3493 243.447 65.048Z" stroke="black" stroke-width="6" mask="url(#path-1-outside-1_1_3)"/>
                    <path className="loading" d="M298.064 35.224L304.464 35.352C305.915 35.352 306.725 35.3093 306.896 35.224V8.98399C306.981 7.53333 307.707 6.296 309.072 5.272C310.437 4.24799 311.717 3.73599 312.912 3.73599C314.107 3.73599 315.045 4.11999 315.728 4.88799C316.496 5.65599 316.837 6.85066 316.752 8.47199C316.667 10.0933 316.624 18.968 316.624 35.096L331.6 34.584C334.16 34.584 335.44 36.0773 335.44 39.064C335.44 41.2827 334.757 42.9467 333.392 44.056C332.112 45.1653 330.704 45.7627 329.168 45.848C327.717 45.9333 326.267 45.976 324.816 45.976L317.008 45.848C317.008 49.3467 317.349 56.2587 318.032 66.584C318.8 76.9093 319.397 83.608 319.824 86.68C320.251 89.6667 320.336 91.6293 320.08 92.568C319.824 93.4213 319.355 94.0187 318.672 94.36C317.563 94.872 316.069 95.128 314.192 95.128C312.315 95.128 311.205 94.104 310.864 92.056C309.157 80.8773 308.005 65.5173 307.408 45.976C306.64 46.0613 303.696 46.104 298.576 46.104C293.456 46.104 290.896 44.6107 290.896 41.624C290.896 37.3573 293.285 35.224 298.064 35.224Z" stroke="black" stroke-width="6" mask="url(#path-1-outside-1_1_3)"/>
                    <path className="loading" d="M341.04 51.48C341.04 46.4453 342.832 42.4347 346.416 39.448C350 36.4613 354.139 34.968 358.832 34.968C363.611 34.968 368.176 35.8213 372.528 37.528C376.88 39.2347 379.056 41.496 379.056 44.312C379.056 45.7627 378.501 46.9147 377.392 47.768C376.283 48.6213 375.301 49.048 374.448 49.048C373.68 49.048 373.04 49.048 372.528 49.048C372.101 48.9627 370.395 48.152 367.408 46.616C364.507 45.08 361.819 44.312 359.344 44.312C356.869 44.312 354.736 44.952 352.944 46.232C351.237 47.4267 350.384 49.2187 350.384 51.608C350.384 53.9973 351.365 55.8747 353.328 57.24C355.376 58.6053 358.917 59.8 363.952 60.824C368.987 61.7627 372.827 63.128 375.472 64.92C378.203 66.712 379.568 70.04 379.568 74.904C379.568 81.9867 377.691 87.0213 373.936 90.008C370.267 92.9093 365.787 94.36 360.496 94.36C355.205 94.36 350.683 93.6347 346.928 92.184C343.259 90.7333 341.424 88.5573 341.424 85.656C341.424 82.328 343.088 80.664 346.416 80.664C347.269 80.664 349.147 81.2613 352.048 82.456C354.949 83.6507 357.808 84.248 360.624 84.248C363.525 84.248 365.701 83.352 367.152 81.56C368.688 79.6827 369.456 77.5493 369.456 75.16C369.456 72.7707 368.475 71.064 366.512 70.04C364.549 68.9307 361.563 68.0347 357.552 67.352C353.541 66.6693 350.597 65.944 348.72 65.176C343.6 63.128 341.04 58.5627 341.04 51.48Z" stroke="black" stroke-width="6" mask="url(#path-1-outside-1_1_3)"/>
                    </svg>

            </div>
            <div className="projects-body-container">
                <div className="project-column-one">
                <div className="project-card-container">
                    <div className="project-card-image">
                            <img src={MemberExample} className='project-example' ></img>
                        </div>
                        <div className="project-innerbody-container"> 
                        The "Members Only" project is a secure <span className="underline">CRUD</span> application with user authentication and access control features. Built with technologies such as <span className="underline">Express.js, Mongoose, MongoDB, Passport.js, Bcrypt, and EJS</span>, it provides a secure way to manage user information through hashing and multiple authentication strategies.
                        </div>
                        <div className="project-innnerfooter">
                            <div className="project-title-holder">
                                Members Only
                            </div>
                            <div className="project-icon-holder">
                            <a href="https://members-production.up.railway.app/login" target="_blank"><BsDisplay className="git-icon"/></a>
                            <a href="https://github.com/MelatoninJr?tab=repositories" target="_blank"><BsGithub className="git-icon"/></a>
                            </div>
                        </div>


                    </div>
                    <div className="project-card-container">
                        <div className="project-card-image">
                            <img src={DiscordExample} className='project-example' ></img>
                        </div>
                        <div className="project-innerbody-container">
                                This project was created as my final JS project for the TOP curicullum. It is built with 
                                <span className="underline"> React as well as React Hooks.</span> I also got to utilize <span className="underline">FireBase</span> for my backend and used their
                                <span className="underline"> Google authentication</span> which is shown off in the login page. An Added bonus was getting to
                                construct <span className="underline">protected links</span> to prevent bypasses.
                                
                        </div>
                        <div className="project-innnerfooter">
                            <div className="project-title-holder">
                                Discord-Mock
                            </div>
                            <div className="project-icon-holder">
                                <a href="https://melatoninjr.github.io/Discord-Mock/#/" target="_blank"><BsDisplay className="git-icon"/></a>
                                <a href='https://github.com/MelatoninJr/Discord-Mock' target="_blank"><BsGithub className="git-icon"/></a>
                            
                            </div>
                        </div>
                    </div>


                    <div className="project-card-container">
                        <div className="project-card-image">
                            <img src={CreditExample} className='project-example' ></img>
                        </div>
                        <div className="project-innerbody-container">
                                Credit form showcases the use of <span className="underline">React components and vanilla CSS. </span> This particular project shows off the use of <span className="underline">media queries </span>for a fully <span className="underline">responsive display.</span> The form has valdiation and is easy to use on all different devices such as desktop, tablet, and mobile view.
                        </div>
                        <div className="project-innnerfooter">
                            <div className="project-title-holder">
                                Credit Form
                            </div>
                            <div className="project-icon-holder">
                            <a href="https://melatoninjr.github.io/frontend-mentor/" target="_blank"><BsDisplay className="git-icon"/></a>
                            <a href="https://github.com/MelatoninJr/frontend-mentor" target="_blank"><BsGithub className="git-icon"/></a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="project-column-two">
                <div className="project-card-container">
                    <div className="project-card-image">
                            <img src={WaldoExample} className='project-example' ></img>
                        </div>
                        <div className="project-innerbody-container">
                                Where's Waldo is a <span className="underline">photo tagging app.</span> This project was created with <span className="underline">React.</span> With the focus on <span className="underline">functional components</span> and <span className="underline">React Hooks</span> such as <span className="und">UseRef and UseEffect. </span>
                                One key element of this project was calculating character coordinates based on dynamic window sizes, and checking player inputs against stored coordinates in <span className="underline">Firebase.</span>
                                
                        </div>
                        <div className="project-innnerfooter">
                            <div className="project-title-holder">
                                Where's Waldo
                            </div>
                            <div className="project-icon-holder">
                            <a href="https://melatoninjr.github.io/waldo/" target="_blank"><BsDisplay className="git-icon"/></a>
                            <a href="https://github.com/MelatoninJr/waldo" target="_blank"><BsGithub className="git-icon"/></a>
                            </div>
                        </div>

                    </div>
                <div className="project-card-container">
                    <div className="project-card-image">
                            <img src={BattleshipExample} className='project-example' ></img>
                        </div>
                        <div className="project-innerbody-container">
                                Battleship was constructed to with the main focus being on <span className="underline">Object Oriented Programming</span> and <span className="underline">Components.</span> I was tasked with using various components
                                to try and <span className="underline">limit the use of global variables.</span> All of the components where bundled together with <span className="underline">Webpack</span>, and further tested through <span className="underline">Jest Testing Suite.</span>
                        </div>
                        <div className="project-innnerfooter">
                            <div className="project-title-holder">
                                BattleShip
                            </div>
                            <div className="project-icon-holder">
                                <a href='https://melatoninjr.github.io/battleship/' target="_blank"> <BsDisplay className="git-icon"/></a>
                                <a href='https://github.com/MelatoninJr/battleship'target="_blank"><BsGithub className="git-icon"/></a>

                            </div>
                        </div>

                    </div>
                    <div className="project-card-container">
                    <div className="project-card-image">
                            <img src={CopeExample} className='project-example' ></img>
                        </div>
                        <div className="project-innerbody-container">
                        Working from a detailed Figma wireframe provided by the artist, I leveraged the power of React to create an interactive UI and used Tailwind CSS to achieve custom, responsive design. This efficient and streamlined process ensured that the artistic vision was maintained throughout, resulting in a website that's visually striking, user-friendly, and technically robust.
                        </div>
                        <div className="project-innnerfooter">
                            <div className="project-title-holder">
                                Cope Logistic
                            </div>
                            <div className="project-icon-holder">
                            <a href="https://melatoninjr.github.io/shopping-cart/" target="_blank"><BsDisplay className="git-icon"/></a>
                            <a href="https://github.com/MelatoninJr/shopping-cart" target="_blank"><BsGithub className="git-icon"/></a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Projects;
/*
This unique web project showcases the successful collaboration between me, a contracted artist, and the use of modern web technologies, namely React and Tailwind CSS.

Working from a detailed Figma wireframe provided by the artist, I leveraged the power of React to create an interactive UI and used Tailwind CSS to achieve custom, responsive design. This efficient and streamlined process ensured that the artistic vision was maintained throughout, resulting in a website that's visually striking, user-friendly, and technically robust.

This project stands as proof of my ability to not only handle technical tools effectively but also to successfully collaborate within a cross-disciplinary team, creating a final product that truly marries form and function.
*/