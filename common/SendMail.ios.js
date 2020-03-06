import { Linking, Alert } from 'react-native';

export async function sendEmail(subject, content) {

  const Entities = require('html-entities').AllHtmlEntities;

  const entities = new Entities();

  let sub = entities.decode(subject)
              .replace(new RegExp('&', 'g'),'and');

  if(content == null) content = '';

  let bdy = entities.decode(content)
    //.replace(new RegExp('&#58;', 'g'),':')
    //.replace(new RegExp('&nbsp;', 'g'),' ')
    //.replace(new RegExp('&amp;', 'g'),'and')
    .replace(new RegExp('&', 'g'),'and');
    console.log("decode email --> "+bdy);
    const url = 'mailto:?Content-type=text/html&subject=CHLA FOUNDATION - '+sub+'&body='+bdy;

    const canOpen = await Linking.canOpenURL(url);

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

    return Linking.openURL(url);
}
