import React, {useCallback} from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import {Colors, Metrix, NavigationService, SVGS} from '../../config';
import {ContainerProps} from '../../config/types/appDataTypes';
import {Typography} from '../index';
import styles from './styles';

const Container: React.FC<ContainerProps> = ({
  children,
  pH = 24,
  headerTitle,
  headerSubText,
  backIcon = false,
  contentContainerStyle,
  backIconHandler = false,
  handleBackIcon = () => {},
  scrollViewRef = null,
  onScroll = () => {},
  scrollView = false,
}) => {
  const handleBackPress = useCallback(() => {
    NavigationService.goBack();
  }, []);

  return (
    <View style={styles.imageBackground}>
      <View
        style={[styles.headerContainer, backIcon && styles.backIconContainer]}>
        {backIcon && (
          <TouchableOpacity
            activeOpacity={Metrix.ActiveOpacity}
            onPress={() => {
              backIconHandler ? handleBackIcon() : handleBackPress();
            }}
            style={styles.backButton}>
            <SVGS.BackIcon
              width={Metrix.HorizontalSize(24)}
              height={Metrix.VerticalSize(22)}
            />
          </TouchableOpacity>
        )}

        <Typography mT={20} color={Colors.white} size={14} bold>
          {headerTitle}
        </Typography>

        {headerSubText && (
          <Typography mT={6} lineHeight={24} color={Colors.white}>
            {headerSubText}
          </Typography>
        )}
      </View>

      {scrollView ? (
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={contentContainerStyle}
            keyboardShouldPersistTaps="handled"
            scrollEnabled={true}
            ref={scrollViewRef}
            onScroll={onScroll}
            style={[
              styles.contentContainer,
              {paddingHorizontal: Metrix.HorizontalSize(pH)},
            ]}>
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      ) : (
        <View
          style={[
            styles.contentContainer,
            {paddingHorizontal: Metrix.HorizontalSize(pH)},
          ]}>
          {children}
        </View>
      )}
    </View>
  );
};

export default Container;
