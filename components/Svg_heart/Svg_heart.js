
const SvgHeart = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 100 100">
            <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradientHeart" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B00AF" offset="0%">
                    </stop>
                    <stop stopColor="#D40062" offset="90%">
                    </stop>
                    <stop stopColor="#FF0613" offset="100%">
                     </stop>
                </linearGradient>
            </defs>
            <path fill="url(#linearGradientHeart)" fillRule="evenodd" d="M91.235 15.973a25.732 25.732 0 0 0-18.353-8.8A35.802 35.802 0 0 0 50 18.261 35.861 35.861 0 0 0 27.059 7.232a25.438 25.438 0 0 0-18.294 8.741c-11.662 11.77-11.662 30.706 0 42.475 19.764 17.893 30.059 27.28 35.294 32.09a8.723 8.723 0 0 0 11.765 0l35.294-32.09c11.694-11.737 11.747-30.673.117-42.475zM86.53 53.58C71.647 67.248 62.176 75.813 56.118 81.328l-4.647 4.224c-.765.7-1.941.7-2.706 0-5.412-4.81-15.647-14.139-35.294-31.973-8.968-9.125-8.968-23.729 0-32.854a18.9 18.9 0 0 1 13.588-6.746 29.44 29.44 0 0 1 18.412 9.269L50 27.355l4.588-4.107a29.026 29.026 0 0 1 18.294-9.328 19.194 19.194 0 0 1 13.53 6.805c9 9.093 9.053 23.697.117 32.854z">
            </path>
        </svg>
    )
}
export default SvgHeart;