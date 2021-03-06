
const SvgLocation = () => {
    return(
        
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 100 100">
            <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradientPin" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B00AF" offset="0%"></stop><stop stopColor="#D40062" offset="90%">
                    </stop>
                    <stop stopColor="#FF0613" offset="100%">
                    </stop>
                </linearGradient>
            </defs>
            <path fill="url(#linearGradientPin)" fillRule="evenodd" d="M50 0c23.488-.229 42.74 18.627 43.061 42.176 0 35-39.834 56.53-41.477 57.412a3.278 3.278 0 0 1-3.168 0c-1.643-.882-41.477-22.412-41.477-57.412C7.26 18.626 26.512-.229 50 0zm0 92.824c7.157-4.236 36.373-23.295 36.373-50.648C85.956 22.4 69.727 6.652 50 6.882 30.273 6.652 14.044 22.4 13.627 42.176c0 27.118 29.216 46.412 36.373 50.648zm.176-66.177c9.179.032 16.603 7.502 16.603 16.706a16.706 16.706 0 0 1-10.3 15.44 16.629 16.629 0 0 1-18.164-3.648 16.739 16.739 0 0 1-3.574-18.226 16.66 16.66 0 0 1 15.435-10.272zm0 26.706c5.508 0 9.973-4.477 9.973-10s-4.465-10-9.973-10c-5.508 0-9.973 4.477-9.973 10s4.465 10 9.973 10z">
            </path>
        </svg>
   
    )
}
export default SvgLocation;