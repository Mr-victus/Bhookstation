import { Linking } from 'react-native';

export async function openLink(url) {

    // check if we can use this link
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error('Provided URL can not be handled - '+url);
    }

    return Linking.openURL(url);
}
