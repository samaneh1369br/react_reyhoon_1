import "./FooterTop.css"



const FooterTopData = [
    {   id:1,
        color:"#8b00af",
        sectionTitle: 'تماس با ریحون',
        links: [{
            id: 1,
            title: 'درباره ریحون',
            href: '#'
        },
        {
            id: 2,
            title: 'تماس با ما',
            href: '#'
        },
        {
            id: 3,
            title: 'وبلاگ ریحون',
            href: '#'
        }]
    },
    {   id:2,
        color:"#d40062",
        sectionTitle: 'رستوران ها',
        links: [{
            id: 4,
            title: 'ثبت رستوران',
            href: '#'
        }]
    },
    {   id:3,
        color:"#ff0613",
        sectionTitle: 'پشتیبانی ریحون',
        links: [{
            id: 5,
            title: 'سوالات متداول',
            href: '#'
        },
        {
            id: 6,
            title: 'تماس با پشتیبانی',
            href: '#'
        },
        {
            id: 7,
            title: 'قوانین و مقررات',
            href: '#'
        },
    
    ]

    },
    {   id:4,
        color:"#ffc300",
        sectionTitle: 'اپلیکیشن های موبایل',
        items:[
            {
              src:"https://dist.reyhoon-static.com/web-assets/images/app-links/google-play-dark.png?x-oss-process=image/resize,w_180",
              href:"https://play.google.com/store/apps/details?id=reyhoon.androidapp",
              id:8
             },
             {
               src:"https://dist.reyhoon-static.com/web-assets/images/app-links/sib-app-dark.png?x-oss-process=image/resize,w_180",
               href:"https://sibapp.com/applications/reyhoon",
               id:9
             },
             {
                 src:"https://dist.reyhoon-static.com/web-assets/images/app-links/cafebazaar-dark.png?x-oss-process=image/resize,w_180",
                 href:"https://cafebazaar.ir/app/reyhoon.androidapp/?l=fa",
                 id:10

             }
        ]
    }
]

 function renderFooter() {
   const  renderdata = 
        FooterTopData.map(
            (item,index) => {
                return (
                    <div key={index} style={{borderTop:`3px solid ${item.color}`}}>
                        <p>
                            {item.sectionTitle}
                        </p>
                        <ul className="items-footer">
                            {
                                (item.links)
                                ?
                                        item.links.map(
                                            (link, index) => 
                                             <li key={index} ><a  href={link.href}>{link.title}</a></li>
                                            
                                           )
                                :
                                        item.items.map(
                                            (link) => 
                                                <li key={link.id} className="li_button_footer" ><a href={link.href} className="a_button_footer"><img src={link.src}/></a></li>
                                            
                                           )

                            } 
                        </ul>
                    </div>
                )
            }
        )                               
    return(renderdata)
    
}



const FooterTop=()=>{
return(
    <div className="footer-top">
           <p> 
                 مراقبت و محافظت از حساب کاربری و رمزعبور 
                هر کاربر بر عهده کاربر است. ریحون سریعترین راه
                 سفارش آنلاین غذا است. منوی عکس‌دار رستوران‌های 
                اطرافتان را بر اساس مکان خود به راحتی مشاهده کنید و سفارش دهید.
            </p>
            {renderFooter()}
            
            
          
</div>
)

}
export default FooterTop