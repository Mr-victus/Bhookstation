import { Linking, Alert } from 'react-native';

export async function sendEmail(subject, content) {

  const Entities = require('html-entities').AllHtmlEntities;

  const entities = new Entities();

    let sub = entities.decode(subject)
      .replace(new RegExp('&', 'g'),'and');

    if(!content) content = '';

    let bdy = entities.decode(content);
    //.replace(new RegExp('&#58;', 'g'),':')
    //.replace(new RegExp('&nbsp;', 'g'),' ')
    //.replace(new RegExp('&amp;', 'g'),'and')
    bdy = bdy.replace(/(<([^>]+)>)/ig, "");
    //-- get rid of html-encoded characters:
    bdy=bdy.replace(/&nbsp;/gi," ")
            .replace(/&amp;/gi,"&")
            .replace(/&quot;/gi,'"')
            .replace(/&lt;/gi,'<')
            .replace(/&gt;/gi,'>');
            //.replace(/[!'()*]/g, escape);

    bdy=bdy.replace(new RegExp('&', 'g'),'and');
    console.log("decode email --> "+bdy);
    let uri = 'mailto:?Content-type=text/html&subject=CHLA FOUNDATION - '+sub+'&body='+bdy;

    try {
      uri = encodeURI(uri);
    }catch(err){
      console.log(err);
    }

    const canOpen = await Linking.canOpenURL(uri);

    if (!canOpen) {
        Alert.alert(
          'Error while opening email',
          null,
          [
            {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
          ],
          { cancelable: true }
        )
    }

    return Linking.openURL(uri);
}
