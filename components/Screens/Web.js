import 'react-native-gesture-handler';
import React from 'react';
import { WebView, View } from 'react-native-webview';

const WebScreen = () => {
    return (
        <WebView source={{ uri:  'https://news.sanook.com/lotto/' }} />
    )
}

export default WebScreen;