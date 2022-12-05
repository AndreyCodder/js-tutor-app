import React, { useState } from 'react';
import { View } from 'react-native';
import Auth from './Auth';
import RememberLogin from './RememberLogin';

const MainAuth = () => {
    
    const [screen, setScreen] = useState('auth');

    switch(screen){
        case 'auth':
            return (
                <View>
                    <Auth setScreen={setScreen}/>
                </View>
                
            );
        break;
        case 'remember':
            return (
                <View>
                    <RememberLogin setScreen={setScreen}/>
                </View>
                
            );
        break;
    }
    
    
};

export default MainAuth;