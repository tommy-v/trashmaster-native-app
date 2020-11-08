// TODO : DELETE
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/types';
import * as RootNavigation from '../../RootNavigation';
import { Text } from 'react-native';

// Renderless component
export default function Redirection() {
  const navigationPath: string = useSelector(
    (state: RootState) => state.navigation.path,
  );
  useEffect(() => {
    RootNavigation.navigate(`${navigationPath}`, { userName: 'Test' });
  }, [navigationPath]); 
  return (
  <Text>{navigationPath}</Text> 
  );
}
