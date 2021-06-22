import { useEffect } from 'react'
import { Grid} from "@material-ui/core";
import {ScrollUp} from '../../utils/helper';

const CooKie = () => {
  useEffect( () =>{
    ScrollUp();
  }, [])
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justify="center"
      alignItems="center"
      style={{textAlign: 'justify'}}
    >
      <Grid item xs={9} >
      <h1>Cookie Policy</h1>
      <br/>
      <p>
      Rent-finder uses cookies.
      Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow). These cookies enable the site to recognize your browser and, if you have a registered account, associate it with your registered account.
        </p>
        <br />
        <p>
We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.

        </p>
      <br/>
<h2>Rent-Finder uses the following cookies:</h2>
<br/>
<p>
<b>Permanent cookies</b> : Permanent cookies are saved even after the browser is closed. For example, the login status can be saved or preferred content can be displayed directly when the user visits a website again. The interests of users who are used to measure reach or for marketing purposes can also be stored in such a cookie.  
</p>
<p><b>Google Analytics</b> : Cookies that enable us to measure the traffic on our website.</p>
<p><b>First-party cookies: </b>We set first-party cookies ourselves.</p>
<br/>
<p>
By using this website you agree to use these cookies. You also agree to our cookie policy. If you do not agree to the cookie policy, you should change your settings or not use this website.
</p>
<br/>
<p>
Be aware, however, that disabling cookies may affect your experience on this website.
</p>


</Grid>
    </Grid>
  );
};

export default CooKie;
