import Script from 'next/script';

const GoogleAnalytics = () => {
    return (
        <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}/>
    <Script id=''>
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
                `}
    </Script>
    </>
);
};

export default GoogleAnalytics;
