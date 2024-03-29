const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const {OAuth2} = google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'
const {
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    SENDER_EMAIL_ADRESS,
    CLIENT_URL
} = process.env
const oauth2Client = new OAuth2(
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    OAUTH_PLAYGROUND
)
//  envoi de l'email 


const sendEmail = (to, url, btntxt , texte ) => {
    oauth2Client.setCredentials({
        refresh_token : MAILING_SERVICE_REFRESH_TOKEN
    })
    const accessToken = oauth2Client.getAccessToken()
    const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user : SENDER_EMAIL_ADRESS,
            clientId: MAILING_SERVICE_CLIENT_ID,
            clientSecret : MAILING_SERVICE_CLIENT_SECRET,
            refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
            clientUrl:  CLIENT_URL,
            accessToken
        }
    })
    // entete de l'email et corps 
const mailOption = {
    from : SENDER_EMAIL_ADRESS,
    to: to,
    subject: "WORK & Y@MO ",
    html: `
    
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <title></title>
        
        <style type="text/css">
            /* CONFIG STYLES Please do not delete and edit CSS styles below */
    /* IMPORTANT THIS STYLES MUST BE ON FINAL EMAIL */
    #outlook a {
        padding: 0;
    }
    
    .ExternalClass {
        width: 100%;
    }
    
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
        line-height: 100%;
    }
    
    .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
        transition: all 100ms ease-in;
    }
    
    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }
    
    .es-button:hover {
        background: #555555 !important;
        border-color: #555555 !important;
    }
    
    .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
    }
    
    [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 15px 30px 15px 30px !important;
    }
    
    [data-ogsb] .es-button.es-button-1655310305822 {
        padding: 15px 25px !important;
    }
    
    /*
    END OF IMPORTANT
    */
    s {
        text-decoration: line-through;
    }
    
    html,
    body {
        width: 100%;
        font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    }
    
    table {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        border-collapse: collapse;
        border-spacing: 0px;
    }
    
    table td,
    html,
    body,
    .es-wrapper {
        padding: 0;
        Margin: 0;
    }
    
    .es-content,
    .es-header,
    .es-footer {
        table-layout: fixed !important;
        width: 100%;
    }
    
    img {
        display: block;
        border: 0;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
    }
    
    table tr {
        border-collapse: collapse;
    }
    
    p,
    hr {
        Margin: 0;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5 {
        Margin: 0;
        line-height: 120%;
        mso-line-height-rule: exactly;
        font-family: lato, 'helvetica neue', helvetica, arial, sans-serif;
    }
    
    p,
    ul li,
    ol li,
    a {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        mso-line-height-rule: exactly;
    }
    
    .es-left {
        float: left;
    }
    
    .es-right {
        float: right;
    }
    
    .es-p5 {
        padding: 5px;
    }
    
    .es-p5t {
        padding-top: 5px;
    }
    
    .es-p5b {
        padding-bottom: 5px;
    }
    
    .es-p5l {
        padding-left: 5px;
    }
    
    .es-p5r {
        padding-right: 5px;
    }
    
    .es-p10 {
        padding: 10px;
    }
    
    .es-p10t {
        padding-top: 10px;
    }
    
    .es-p10b {
        padding-bottom: 10px;
    }
    
    .es-p10l {
        padding-left: 10px;
    }
    
    .es-p10r {
        padding-right: 10px;
    }
    
    .es-p15 {
        padding: 15px;
    }
    
    .es-p15t {
        padding-top: 15px;
    }
    
    .es-p15b {
        padding-bottom: 15px;
    }
    
    .es-p15l {
        padding-left: 15px;
    }
    
    .es-p15r {
        padding-right: 15px;
    }
    
    .es-p20 {
        padding: 20px;
    }
    
    .es-p20t {
        padding-top: 20px;
    }
    
    .es-p20b {
        padding-bottom: 20px;
    }
    
    .es-p20l {
        padding-left: 20px;
    }
    
    .es-p20r {
        padding-right: 20px;
    }
    
    .es-p25 {
        padding: 25px;
    }
    
    .es-p25t {
        padding-top: 25px;
    }
    
    .es-p25b {
        padding-bottom: 25px;
    }
    
    .es-p25l {
        padding-left: 25px;
    }
    
    .es-p25r {
        padding-right: 25px;
    }
    
    .es-p30 {
        padding: 30px;
    }
    
    .es-p30t {
        padding-top: 30px;
    }
    
    .es-p30b {
        padding-bottom: 30px;
    }
    
    .es-p30l {
        padding-left: 30px;
    }
    
    .es-p30r {
        padding-right: 30px;
    }
    
    .es-p35 {
        padding: 35px;
    }
    
    .es-p35t {
        padding-top: 35px;
    }
    
    .es-p35b {
        padding-bottom: 35px;
    }
    
    .es-p35l {
        padding-left: 35px;
    }
    
    .es-p35r {
        padding-right: 35px;
    }
    
    .es-p40 {
        padding: 40px;
    }
    
    .es-p40t {
        padding-top: 40px;
    }
    
    .es-p40b {
        padding-bottom: 40px;
    }
    
    .es-p40l {
        padding-left: 40px;
    }
    
    .es-p40r {
        padding-right: 40px;
    }
    
    .es-menu td {
        border: 0;
    }
    
    .es-menu td a img {
        display: inline-block !important;
    }
    
    /* END CONFIG STYLES */
    a {
        text-decoration: underline;
    }
    
    h1 a {
        text-align: center;
    }
    
    h2 a {
        text-align: left;
    }
    
    h3 a {
        text-align: left;
    }
    
    p,
    ul li,
    ol li {
        font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
        line-height: 150%;
    }
    
    ul li,
    ol li {
        Margin-bottom: 15px;
        margin-left: 0;
    }
    
    .es-menu td a {
        text-decoration: none;
        display: block;
        font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
    }
    
    .es-wrapper {
        width: 100%;
        height: 100%;
        /* background-image: ; */
        background-repeat: repeat;
        background-position: center top;
    }
    
    .es-wrapper-color {
        background-color: #f1f1f1;
    }
    
    .es-header {
        background-color: transparent;
        background-repeat: repeat;
        background-position: center top;
    }
    
    .es-header-body {
        background-color: #333333;
    }
    
    .es-header-body p,
    .es-header-body ul li,
    .es-header-body ol li {
        color: #ffffff;
        font-size: 14px;
    }
    
    .es-header-body a {
        color: #ffffff;
        font-size: 14px;
    }
    
    .es-content-body {
        background-color: #ffffff;
    }
    
    .es-content-body p,
    .es-content-body ul li,
    .es-content-body ol li {
        color: #555555;
        font-size: 15px;
    }
    
    .es-content-body a {
        color: #26a4d3;
        font-size: 15px;
    }
    
    .es-footer {
        background-color: transparent;
        /* background-image: ; */
        background-repeat: repeat;
        background-position: center top;
    }
    
    .es-footer-body {
        background-color: #ffffff;
    }
    
    .es-footer-body p,
    .es-footer-body ul li,
    .es-footer-body ol li {
        color: #666666;
        font-size: 12px;
    }
    
    .es-footer-body a {
        color: #666666;
        font-size: 12px;
    }
    
    .es-infoblock,
    .es-infoblock p,
    .es-infoblock ul li,
    .es-infoblock ol li {
        line-height: 120%;
        font-size: 12px;
        color: #cccccc;
    }
    
    .es-infoblock a {
        font-size: 12px;
        color: #cccccc;
    }
    
    h1 {
        font-size: 30px;
        font-style: normal;
        font-weight: bold;
        color: #333333;
    }
    
    h2 {
        font-size: 20px;
        font-style: normal;
        font-weight: bold;
        color: #333333;
    }
    
    h3 {
        font-size: 18px;
        font-style: normal;
        font-weight: normal;
        color: #333333;
    }
    
    .es-header-body h1 a,
    .es-content-body h1 a,
    .es-footer-body h1 a {
        font-size: 30px;
    }
    
    .es-header-body h2 a,
    .es-content-body h2 a,
    .es-footer-body h2 a {
        font-size: 20px;
    }
    
    .es-header-body h3 a,
    .es-content-body h3 a,
    .es-footer-body h3 a {
        font-size: 18px;
    }
    
    a.es-button,
    button.es-button {
        border-style: solid;
        border-color: #26a4d3;
        border-width: 15px 30px 15px 30px;
        display: inline-block;
        background: #26a4d3;
        border-radius: 50px;
        font-size: 14px;
        font-family: arial, 'helvetica neue', helvetica, sans-serif;
        font-weight: bold;
        font-style: normal;
        line-height: 120%;
        color: #ffffff;
        text-decoration: none;
        width: auto;
        text-align: center;
    }
    
    .es-button-border {
        border-style: solid solid solid solid;
        border-color: #26a4d3 #26a4d3 #26a4d3 #26a4d3;
        background: #26a4d3;
        border-width: 0px 0px 0px 0px;
        display: inline-block;
        border-radius: 50px;
        width: auto;
    }
    
    /* RESPONSIVE STYLES Please do not delete and edit CSS styles below. If you don't need responsive layout, please delete this section. */
    @media only screen and (max-width: 600px) {
    
        p,
        ul li,
        ol li,
        a {
            line-height: 150% !important;
        }
    
        h1,
        h2,
        h3,
        h1 a,
        h2 a,
        h3 a {
            line-height: 120% !important;
        }
    
        h1 {
            font-size: 30px !important;
            text-align: center;
        }
    
        h2 {
            font-size: 26px !important;
            text-align: left;
        }
    
        h3 {
            font-size: 20px !important;
            text-align: left;
        }
    
        h1 a {
            text-align: center;
        }
    
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
            font-size: 30px !important;
        }
    
        h2 a {
            text-align: left;
        }
    
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
            font-size: 20px !important;
        }
    
        h3 a {
            text-align: left;
        }
    
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
            font-size: 20px !important;
        }
    
        .es-menu td a {
            font-size: 16px !important;
        }
    
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
            font-size: 16px !important;
        }
    
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
            font-size: 17px !important;
        }
    
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
            font-size: 17px !important;
        }
    
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
            font-size: 12px !important;
        }
    
        *[class="gmail-fix"] {
            display: none !important;
        }
    
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
            text-align: center !important;
        }
    
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
            text-align: right !important;
        }
    
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
            text-align: left !important;
        }
    
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
            display: inline !important;
        }
    
        .es-button-border {
            display: inline-block !important;
        }
    
        a.es-button,
        button.es-button {
            font-size: 14px !important;
            display: inline-block !important;
            border-width: 15px 25px 15px 25px !important;
        }
    
        .es-btn-fw {
            border-width: 10px 0px !important;
            text-align: center !important;
        }
    
        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
            width: 100% !important;
        }
    
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
            width: 100% !important;
            max-width: 600px !important;
        }
    
        .es-adapt-td {
            display: block !important;
            width: 100% !important;
        }
    
        .adapt-img {
            width: 100% !important;
            height: auto !important;
        }
    
        .es-m-p0 {
            padding: 0px !important;
        }
    
        .es-m-p0r {
            padding-right: 0px !important;
        }
    
        .es-m-p0l {
            padding-left: 0px !important;
        }
    
        .es-m-p0t {
            padding-top: 0px !important;
        }
    
        .es-m-p0b {
            padding-bottom: 0 !important;
        }
    
        .es-m-p20b {
            padding-bottom: 20px !important;
        }
    
        .es-mobile-hidden,
        .es-hidden {
            display: none !important;
        }
    
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
            width: auto !important;
            overflow: visible !important;
            float: none !important;
            max-height: inherit !important;
            line-height: inherit !important;
        }
    
        tr.es-desk-hidden {
            display: table-row !important;
        }
    
        table.es-desk-hidden {
            display: table !important;
        }
    
        td.es-desk-menu-hidden {
            display: table-cell !important;
        }
    
        .es-menu td {
            width: 1% !important;
        }
    
        table.es-table-not-adapt,
        .esd-block-html table {
            width: auto !important;
        }
    
        table.es-social {
            display: inline-block !important;
        }
    
        table.es-social td {
            display: inline-block !important;
        }
    
        .es-desk-hidden {
            display: table-row !important;
            width: auto !important;
            overflow: visible !important;
            max-height: inherit !important;
        }
    }
    
    /* END RESPONSIVE STYLES */
    .es-p-default {
        padding-top: 20px;
        padding-right: 40px;
        padding-bottom: 0px;
        padding-left: 40px;
    }
    
    .es-p-all-default {
        padding: 0px;
    }
        </style>
        
    </head>
    
    <body>
        <div class="es-wrapper-color">
            <!--[if gte mso 9]>
                <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                    <v:fill type="tile" color="#f1f1f1"></v:fill>
                </v:background>
            <![endif]-->
            
                            <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" esd-custom-block-id="7388" align="center">
                                            <table class="es-content-body" style="background-color: #333333;" width="600" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure esd-checked es-p40t es-p40b es-p40r es-p40l" style="background-image: url('https://res.cloudinary.com/it-engineering-factory/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1655317854/mes%20outils/bien_xloo75.jpg'); background-repeat: no-repeat;" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="520" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p40t es-p10b">
                                                                                            <h1 style="color: #F5F5F9;">BIENVENU SUR WORK ET YAMO </h1>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td esdev-links-color="#757575" class="esd-block-text es-p10t es-p20b es-p30r es-p30l" align="center">
                                                                                            <p style="color: #F5F5F9;"><a href=${url}>veuillez cliquer sur ce bouton pour finaliser l'inscription</a></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="esd-block-button es-p10t es-p20b" align="center"><span class="es-button-border" style="border-width: 0px; border-style: solid; background: none 0% 0% repeat scroll #26a4d3; border-color: #26a4d3;"><a href=${url} class="es-button" target="_blank" style="background: #26a4d3 none repeat scroll 0% 0%; border-color: #26a4d3;">${btntxt}</a></span></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p40t es-p40r es-p40l" esd-custom-block-id="7389" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="520" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="esd-block-text es-p5t es-p15b es-m-txt-c" align="left">
                                                                                            <h2>WORK ET YAMO C'EST QUOI ?</h2>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="esd-block-text es-p10b" align="left">
                                                                                            <p><strong> Work Et Yamo est un cadre de travail spacieux , aéré et climatisé a la portée de toutes les bourses , mettant ainsi à votre disposition plus de <b>6500</b> cours en ligne grace à notre connexion fibre optique</strong></p>
                                                                                            <p><strong>${texte}</strong></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="esd-block-text es-p10t es-p10b" align="left">
                                                                                            <p>nous preparons ainsi les jeunes camerounais au monde de l'emploi a l'international grace à nos cours en ligne et notre programme d'encadrement </p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="esd-block-text es-p10t es-p10b" align="left">
                                                                                            <p>Merci,</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p10t es-p40b es-p40r es-p40l" esd-custom-block-id="7390" align="left">
                                                            <!--[if mso]><table width="520" cellpadding="0"
                                cellspacing="0"><tr><td width="40" valign="top"><![endif]-->
                                                            <table class="es-left" cellspacing="0" cellpadding="0" align="left">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="es-m-p0r es-m-p20b esd-container-frame" width="40" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="esd-block-image" align="left" style="font-size:0"><a target="_blank"><img src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1654873543/mes%20outils/avatar_v8ixww.png" alt style="display: block;" width="40"></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td><td width="20"></td><td width="460" valign="top"><![endif]-->
                                                            <table cellspacing="0" cellpadding="0" align="right">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="460" align="left">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="esd-block-text es-p10t" align="left">
                                                                                            <p style="color: #222222; font-size: 14px;"><strong>Idriss-françois Eliguene</strong><br></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="esd-block-text" align="left">
                                                                                            <p style="color: #666666; font-size: 14px;">Le promoteur | Work & Yamo</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td></tr></table><![endif]-->
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" esd-custom-block-id="7392" align="center">
                                            <table class="es-content-body" style="background-color: #26a4d3;" width="600" cellspacing="0" cellpadding="0" bgcolor="#26a4d3" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p40t es-p20b es-p40r es-p40l" style="background-color: #26a4d3;" bgcolor="#26a4d3" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="520" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="esd-block-text es-m-txt-c" align="center">
                                                                                            <h2 style="color: #ffffff;">TELECHARGEZ L'APPLICATION<br></h2>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="esd-block-text es-p5t es-p10b" align="center">
                                                                                            <p style="color: #aad4ea; font-size: 17px;">pour une expérience inoubliable et vos reservations <br></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="esd-block-button es-p10" align="center"><span class="es-button-border" style="background: #ffffff none repeat scroll 0% 0%;"><a href="https://play.google.com/store/search?q=worketyamo&c=apps&hl=fr&gl=US" class="es-button es-button-1655309516490" target="_blank" style="background: #ffffff none repeat scroll 0% 0%; border-color: #ffffff; color: #26a4d3; border-width: 15px 25px;">TELECHARGER L'APPLI<esd-config-block value="{&quot;configClass&quot;:&quot;es-button-1655309516490&quot;,&quot;rule&quot;:&quot;[data-ogsb] .es-button.es-button-1655309516490&quot;,&quot;properties&quot;:{&quot;padding&quot;:&quot;15px 25px !important&quot;}}" name="btnIndentSettingsControl" style="display: none;"></esd-config-block></a></span></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" esd-custom-block-id="7393" align="center">
                                            <table class="es-content-body" style="background-color: #292828;" width="600" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p30t es-p30b es-p40r es-p40l" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="520" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="esd-block-social" align="center" style="font-size:0">
                                                                                            <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td class="es-p10r" valign="top" align="center"><a target="_blank" href><img title="Facebook" src="https://tlr.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24"></a></td>
                                                                                                        <td class="es-p10r" valign="top" align="center"><a target="_blank" href><img title="Twitter" src="https://tlr.stripocdn.email/content/assets/img/social-icons/circle-white/twitter-circle-white.png" alt="Tw" width="24" height="24"></a></td>
                                                                                                        <td class="es-p10r" valign="top" align="center"><a target="_blank" href><img title="Instagram" src="https://tlr.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24"></a></td>
                                                                                                        <td valign="top" align="center"><a target="_blank" href><img title="Linkedin" src="https://tlr.stripocdn.email/content/assets/img/social-icons/circle-white/linkedin-circle-white.png" alt="In" width="24" height="24"></a></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" esd-custom-block-id="7394" align="center">
                                            <table class="es-footer-body" style="background-color: #ffffff;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p40t es-p40b es-p40r es-p40l" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="520" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="esd-block-text es-p10b" align="center">
                                                                                            <p>situé a biyemassi-melen | en face de l'école nationale polytechnique</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="esd-block-text es-p10b" align="center">
                                                                                            <p>cet email vous a été envoyer par Work Et Yamo team</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p10b">
                                                                                            <p><a target="_blank" href=${url}>Preferences</a> | <a target="_blank" href=${url}>Browser</a> | <a target="_blank" href="${url}>Forward</a> | <a target="_blank" class="unsubscribe">Unsubscribe</a></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="esd-block-text" align="center">
                                                                                            <p>Copyright © 2021-2022 <strong>Work Et Yamo</strong>, All Rights Reserved.</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="esd-footer-popover es-content" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table class="es-content-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="esd-block-image es-infoblock made_with" align="center" style="font-size:0"><a target="_blank" href=${url}><img src="https://res.cloudinary.com/it-engineering-factory/image/upload/v1655311665/mes%20outils/bootstrap-logo_xljs0d.png" alt width="125"></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
    
    </html>
    
    `
}
smtpTransport.sendMail(mailOption,(err, infor) => {
    if(err) return err;
    return infor
})
}
module.exports = sendEmail